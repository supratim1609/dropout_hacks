import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FOLDER_ID = '125T81r_yq18pYcjES535B02BnHMrRxaz';
const API_KEY = process.env.GOOGLE_DRIVE_API_KEY;
const PUBLIC_DIR = path.join(__dirname, '../public/sponsors');
const DATA_FILE = path.join(__dirname, '../app/data/sponsors.ts');

if (!API_KEY) {
    console.error('Error: GOOGLE_DRIVE_API_KEY environment variable is not set.');
    process.exit(1);
}

const drive = google.drive({ version: 'v3', auth: API_KEY });

async function syncSponsors() {
    try {
        console.log('Fetching file list from Google Drive...');
        const res = await drive.files.list({
            q: `'${FOLDER_ID}' in parents and trashed = false`,
            fields: 'files(id, name, mimeType)',
            orderBy: 'name',
        });

        const files = res.data.files || [];
        console.log(`Found ${files.length} files.`);

        if (!fs.existsSync(PUBLIC_DIR)) {
            fs.mkdirSync(PUBLIC_DIR, { recursive: true });
        }

        const sponsors = [];

        for (const file of files) {
            if (!file.mimeType?.startsWith('image/')) {
                // Some logos might not have the correct mimeType if they lack extensions, 
                // but usually they are images. Let's process them anyway if they look like logos.
            }

            const fileName = file.name || 'unknown';
            const fileId = file.id;
            
            // Clean up name (remove leading numbers like "1.", "2.")
            let cleanName = fileName.split('.').slice(0, -1).join('.'); // Remove extension if exists
            if (!cleanName) cleanName = fileName; // If no extension, use full name
            cleanName = cleanName.replace(/^\d+\./, '').trim(); // Remove leading number

            const extension = fileName.includes('.') ? fileName.split('.').pop() : 'png';
            const localFileName = `${cleanName.toLowerCase().replace(/\s+/g, '-')}.${extension}`;
            const localPath = path.join(PUBLIC_DIR, localFileName);

            console.log(`Syncing ${cleanName}...`);

            // Download file
            const dest = fs.createWriteStream(localPath);
            const response = await drive.files.get(
                { fileId: fileId, alt: 'media' },
                { responseType: 'stream' }
            );

            await new Promise((resolve, reject) => {
                response.data
                    .on('end', () => resolve(true))
                    .on('error', (err) => reject(err))
                    .pipe(dest);
            });

            sponsors.push({
                name: cleanName,
                logo: `/sponsors/${localFileName}`,
                // Add special cases for background if needed
                ...(cleanName.toLowerCase() === 'codecrafters.io' ? { innerBgClass: 'bg-black' } : {})
            });
        }

        // Generate data file content
        const fileContent = `export interface Sponsor {
    name: string;
    logo: string;
    innerBgClass?: string;
}

export const SPONSORS: Sponsor[] = ${JSON.stringify(sponsors, null, 4)};
`;

        fs.writeFileSync(DATA_FILE, fileContent);
        console.log('Successfully updated app/data/sponsors.ts');

    } catch (error) {
        console.error('Error syncing sponsors:', error);
        process.exit(1);
    }
}

syncSponsors();
