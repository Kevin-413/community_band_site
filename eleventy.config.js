const Image = require("@11ty/eleventy-img");
const siteConfig = require("./_data/config.json");

module.exports = (config) => {
    config.addGlobalData("currentYear", () => new Date().getFullYear());

    config.addFilter("withBase", (path = "") => {
        if (typeof path !== "string") {
            return path;
        }

        // Keep absolute URLs, anchors, and non-root relative paths untouched.
        if (/^(https?:)?\/\//.test(path) || path.startsWith("#") || !path.startsWith("/")) {
            return path;
        }

        const basePath = (siteConfig.sitePath || "").replace(/\/$/, "");
        return `${basePath}${path}`;
    });

    config.addPassthroughCopy("src/_images");
    config.addPassthroughCopy("src/_css");
    config.addPassthroughCopy("src/docs");

    // Add responsive image shortcode
    config.addAsyncShortcode("image", async function(src, alt, sizes = "100vw", className = "") {
        const metadata = await Image(src, {
            widths: [400, 800, 1200, "auto"],
            formats: ["avif", "webp", "jpeg", "png"],
            outputDir: "./_site/img/",
            urlPath: `${siteConfig.sitePath || ""}/img/`,
        });

        const imageAttributes = {
            alt,
            sizes,
            loading: "lazy",
            decoding: "async",
            ...(className && { class: className }),
        };

        return Image.generateHTML(metadata, imageAttributes);
    });

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: './src',
            data: '../_data',
            includes: '../_includes'
        },
    };
};