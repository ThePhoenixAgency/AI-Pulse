const Jimp = require('jimp');

async function cropLogo() {
    try {
        const image = await Jimp.read('assets/logo_text.png');
        image.autocrop()
             .write('assets/logo_rectangular.png');
        console.log('Logo cropped successfully to assets/logo_rectangular.png');
    } catch (err) {
        console.error('Error cropping logo:', err);
        process.exit(1);
    }
}

cropLogo();
