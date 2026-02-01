const Jimp = require('jimp');

async function cropLogoAggressive() {
    try {
        const image = await Jimp.read('assets/logo_text.png');
        const width = image.bitmap.width;
        const height = image.bitmap.height;

        // Calculate crop parameters
        // We want to keep the full width but only the middle 30% of height
        // This assumes the text is centered vertically
        const cropHeight = Math.floor(height * 0.35);
        const cropY = Math.floor((height - cropHeight) / 2);

        image.crop(0, cropY, width, cropHeight)
            .autocrop() // Final cleanup just in case
            .write('assets/logo_final.png');

        console.log(`Logo cropped aggressively to ${width}x${cropHeight} at y=${cropY} saved to assets/logo_final.png`);
    } catch (err) {
        console.error('Error cropping logo:', err);
        process.exit(1);
    }
}

cropLogoAggressive();
