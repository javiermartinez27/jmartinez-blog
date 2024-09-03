const path = require("path");
const eleventyImage = require("@11ty/eleventy-img");
const sizeOf = require('image-size');

module.exports = eleventyConfig => {
	function relativeToInputPath(inputPath, relativeFilePath) {
		let split = inputPath.split("/");
		split.pop();

		return path.resolve(split.join(path.sep), relativeFilePath);
	}

	// Eleventy Image shortcode
	// https://www.11ty.dev/docs/plugins/image/
	eleventyConfig.addAsyncShortcode("image", async function imageShortcode(src, alt, widths, sizes, showText = true) {
		// Full list of formats here: https://www.11ty.dev/docs/plugins/image/#output-formats
		// Warning: Avif can be resource-intensive so take care!
		let formats = ["webp"];
		let file = relativeToInputPath(this.page.inputPath, src);
		let fileExtension = src.split(".").slice(-1).pop()
		let fileName = file.split("/").pop();
		let fileNameWithoutExtension = fileName.split(".").slice(0, -1).join(".");
		let metadata = await eleventyImage(file, {
			widths: widths || ["auto"],
			sharpOptions: {
				animated: fileExtension === "gif" ? true : false,
			},
			formats,
			outputDir: path.join(eleventyConfig.dir.output, "img"), // Advanced usage note: `eleventyConfig.dir` works here because we’re using addPlugin.
		});
		

		// TODO loading=eager and fetchpriority=high
		let imageAttributes = {
			alt,
			sizes,
			class: fileNameWithoutExtension,
			loading: "lazy",
			decoding: "async",
		}; 
		
		// Needed cause eleventyImage make GIFs look weird
		let dimensions = sizeOf(file);
		let width = widths ? widths[0] : dimensions.width;
		let height = widths ? widths[0] * dimensions.height / dimensions.width : dimensions.height;

		if(showText) {
			return "<style scoped>." + fileNameWithoutExtension + "{width:" + width + "px; height:" + height + "px;}</style>" +
				"<div class='img-container' style='display: flex; justify-content: center;'>" +
				eleventyImage.generateHTML(metadata, imageAttributes) + "</div>" + 
				"<p style='font-size: 12px; display: flex; justify-content: center; margin-bottom: 5rem'>" + alt + "</p>";
		} else {
			return "<style scoped>." + fileNameWithoutExtension + "{width:" + width + "px; height:" + height + "px;}</style>" +
				"<div class='img-container' style='display: flex; justify-content: center;'>" +
				eleventyImage.generateHTML(metadata, imageAttributes) + "</div>"
		}
	});
};
