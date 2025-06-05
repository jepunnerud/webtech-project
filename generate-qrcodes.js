import fs from 'fs';
import path from 'path'; // 'path' should be imported before being used in __dirname setup
import QRCode from 'qrcode';
import { fileURLToPath } from 'url'; // For __dirname setup
import { dirname } from 'path';      // For __dirname setup

// Define __filename and __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Now you can use __dirname safely
const playersPath = path.join(__dirname, 'public', 'players.json');
const players = JSON.parse(fs.readFileSync(playersPath, 'utf8'));

const qrFolder = path.join(__dirname, 'public', 'player-qrcode');
if (!fs.existsSync(qrFolder)) {
  fs.mkdirSync(qrFolder, { recursive: true });
}

// ... (rest of your script from my previous answer, including the QR code generation logic)
const qrPromises = players.map((player) => {
  return new Promise((resolve, reject) => {
    const lastName = player.name.split(' ').pop().toLowerCase();
    const qrFilename = `${lastName}-qr.png`; // Consistent filename
    const qrPath = path.join(qrFolder, qrFilename);

    if (!player.long_description_wiki || typeof player.long_description_wiki !== 'string' || player.long_description_wiki.trim() === '') {
      console.warn(`Skipping QR for ${player.name} due to missing or invalid long_description_wiki.`);
      player.long_description_qr = `/player-qrcode/${qrFilename}`; // Still set the expected path
      resolve(null);
      return;
    }
    const qrContent = player.long_description_wiki;

    console.log(`Generating QR for ${player.name} (Content: ${qrContent.substring(0,50)}...) into ${qrPath}...`);
    QRCode.toFile(qrPath, qrContent, { width: 300 }, (err) => {
      if (err) {
        console.error(`Error generating QR for ${player.name}:`, err);
        reject(err);
      } else {
        console.log(`QR code saved for ${player.name} at ${qrPath}`);
        player.long_description_qr = `/player-qrcode/${qrFilename}`; // Set the path in the player object
        resolve(qrPath);
      }
    });
  });
});

Promise.all(qrPromises)
  .then((results) => {
    const successfulGenerations = results.filter(r => r !== null);
    console.log(`All QR codes processed. ${successfulGenerations.length} successfully generated.`);
    // To save the updated players array (with long_description_qr filled) back to players.json:
    // fs.writeFileSync(playersPath, JSON.stringify(players, null, 2), 'utf8');
    // console.log('players.json has been updated with QR code paths.');
  })
  .catch((err) => {
    console.error('One or more QR code generations failed.', err);
  });