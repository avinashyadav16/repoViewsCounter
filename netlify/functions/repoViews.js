const fs = require('fs').promises;
const path = require('path');
const fetch = require('node-fetch');

exports.handler = async (event) => {
    const { repo } = event.queryStringParameters;

    if (!repo) {
        return {
            statusCode: 400,
            body: 'Missing repo parameter',
        };
    }

    const fileName = repo.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const filePath = path.resolve('/tmp', `${fileName}.txt`);

    try {
        let count = 1;
        try {
            const data = await fs.readFile(filePath, 'utf8');
            count = parseInt(data, 10) + 1;
        } catch (err) {
            if (err.code !== 'ENOENT') throw err;
        }

        await fs.writeFile(filePath, count.toString(), 'utf8');

        const shortNumber = (num) => {
            const units = ['', 'K', 'M', 'B', 'T'];
            let unit = 0;
            while (num >= 1000 && unit < units.length - 1) {
                num /= 1000;
                unit++;
            }
            return num.toFixed(1) + units[unit];
        };

        const message = shortNumber(count);

        const params = new URLSearchParams({
            label: 'Repository Views',
            logo: 'github',
            message,
            color: 'purple',
            style: 'for-the-badge',
        });

        const url = `https://img.shields.io/static/v1?${params.toString()}`;

        const response = await fetch(url);
        const svg = await response.text();

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'image/svg+xml',
            },
            body: svg,
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: 'Internal Server Error',
        };
    }
};
