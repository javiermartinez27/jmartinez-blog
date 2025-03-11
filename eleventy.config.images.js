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
		let formats = ["webp", "jpeg"];
		let file = relativeToInputPath(this.page.inputPath, src);
		let fileExtension = src.split(".").slice(-1).pop()
		let fileName = file.split("/").pop();
		let fileNameWithoutExtension = fileName.split(".").slice(0, -1).join(".");
		
		// Get original dimensions
		let dimensions = sizeOf(file);
		
		// Default to higher resolution if no widths specified
		let defaultWidths = [800, 1200, 1600];
		let imageWidths = widths || defaultWidths;
		
		// If widths is an array with a single number, expand it to multiple sizes for responsive images
		if (Array.isArray(widths) && widths.length === 1 && typeof widths[0] === 'number') {
			const baseWidth = widths[0];
			// Create responsive widths based on the specified width
			imageWidths = [baseWidth, Math.round(baseWidth * 1.5), Math.round(baseWidth * 2)];
		}
		
		let metadata = await eleventyImage(file, {
			widths: imageWidths,
			sharpOptions: {
				animated: fileExtension === "gif" ? true : false,
			},
			sharpWebpOptions: {
				quality: 85, // Higher quality for WebP
				lossless: false,
				reductionEffort: 6
			},
			sharpJpegOptions: {
				quality: 90, // Higher quality for JPEG
				mozjpeg: true // Use mozjpeg for better compression
			},
			formats,
			outputDir: path.join(eleventyConfig.dir.output, "img"), // Advanced usage note: `eleventyConfig.dir` works here because we're using addPlugin.
		});

		// Calculate proper dimensions for the image
		let width = Array.isArray(imageWidths) && imageWidths[0] !== "auto" ? imageWidths[0] : dimensions.width;
		let height = Math.round(width * dimensions.height / dimensions.width);
		
		// Default sizes attribute if not provided
		let sizesAttr = sizes || "(min-width: 1024px) 800px, 100vw";
		
		// TODO loading=eager and fetchpriority=high
		let imageAttributes = {
			alt,
			sizes: sizesAttr,
			class: "img-container " + (height > width ? "vertical-img" : ""),
			loading: "lazy",
			decoding: "async",
			width: width,
			height: height
		}; 

		if(showText) {
			return eleventyImage.generateHTML(metadata, imageAttributes) + `<p style="font-size: 0.75rem;text-align: center;margin-top: 0.5rem">${alt}</p>`
		} else {
			return eleventyImage.generateHTML(metadata, imageAttributes)
		}
	});
};
