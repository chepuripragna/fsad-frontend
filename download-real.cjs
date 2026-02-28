const fs = require('fs');
const path = require('path');
const https = require('https');

const requiredImages = [
    'states/telangana.jpg',
    'states/andhra-pradesh.jpg',
    'states/tamil-nadu.jpg',
    'states/karnataka.jpg',
    'states/maharashtra.jpg',
    'states/rajasthan.jpg',
    'states/uttar-pradesh.jpg',
    'states/madhya-pradesh.jpg',
    'states/odisha.jpg',
    'states/delhi.jpg',
    'monuments/charminar.jpg',
    'monuments/golconda-fort.jpg',
    'monuments/ramappa-temple.jpg',
    'monuments/thousand-pillar.jpg',
    'monuments/warangal-fort.jpg',
    'monuments/bhadrachalam-temple.jpg',
    'monuments/undavalli-caves.jpg',
    'monuments/tirupati-temple.jpg',
    'monuments/lepakshi-temple.jpg',
    'monuments/amaravati-stupa.jpg',
    'monuments/generic-1.jpg',
    'monuments/generic-2.jpg',
    'monuments/generic-3.jpg',
    'festivals/diwali.jpg',
    'festivals/holi.jpg',
    'festivals/durga-puja.jpg',
    'festivals/pongal.jpg',
    'culture/architecture.jpg',
    'culture/traditions.jpg',
    'culture/festivals.jpg',
    'default/placeholder.jpg'
];

function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        https.get(url, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                return downloadImage(res.headers.location, dest).then(resolve).catch(reject);
            }
            if (res.statusCode !== 200) {
                return reject(new Error('Failed to download: ' + res.statusCode));
            }

            const file = fs.createWriteStream(dest);
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
            file.on('error', (err) => {
                fs.unlink(dest, () => reject(err));
            });
        }).on('error', reject);
    });
}

(async () => {
    const basePath = path.join(__dirname, 'src', 'assets', 'images');
    console.log(`Starting real-looking image generation via dummyimage...`);
    let success = 0;
    let fail = 0;

    for (let i = 0; i < requiredImages.length; i++) {
        const relPath = requiredImages[i];

        // Vary the colors slightly just to differentiate them somewhat visually
        const r = (100 + (i * 5)) % 255;
        const g = (150 + (i * 10)) % 255;
        const b = (200 + (i * 15)) % 255;

        const bg = `${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        const fg = 'ffffff';

        // Generate an image using dummyimage.com which returns absolutely valid binary JPEGs
        const text = path.basename(relPath, '.jpg').toUpperCase().replace(/-/g, '+');
        const url = `https://dummyimage.com/800x600/${bg}/${fg}.jpg&text=${text}`;

        try {
            await downloadImage(url, path.join(basePath, relPath));
            console.log(`[SUCCESS] Generated ${relPath}`);
            success++;
        } catch (e) {
            console.error(`[ERROR] Failed to generate ${relPath}`, e.message);
            fail++;
        }
    }

    console.log(`Finished: ${success} successful, ${fail} failed.`);
})();
