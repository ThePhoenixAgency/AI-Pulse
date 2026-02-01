const Jimp = require('jimp');

async function cropSafe() {
    try {
        // Read the raw generated image which has padding to ensure safety
        const image = await Jimp.read('assets/logo_raw.png');

        // Just perform a standard autocrop to remove transparent borders
        // This calculates the bounding box of the actual visible pixels
        // and crops to that. It will NOT cut off any visible part of the logo.
        image.autocrop()
            .write('assets/logo_final.png');

        console.log('Logo safely autocropped to assets/logo_final.png');
    } catch (err) {
        console.error('Error cropping logo:', err);
        process.exit(1);
    }
}

cropSafe();
