const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');

// Load players.json
const playersPath = path.join(__dirname, 'public', 'players.json');
const players = JSON.parse(fs.readFileSync(playersPath, 'utf8'));

// Ensure QR code folder exists.
const qrFolder = path.join(__dirname, 'public', 'player-qrcode');
if (!fs.existsSync(qrFolder)) {
  fs.mkdirSync(qrFolder, { recursive: true });
}

// Wrap QR code generation in promises
const qrPromises = players.map(player => {
  return new Promise((resolve, reject) => {
    // Extract last name from the player's name. Assumes last word is the last name.
    const lastName = player.name.split(' ').pop().toLowerCase();
    const qrPath = path.join(qrFolder, `${lastName}-qr.png`);
    // Use the local QR code link as the content.
    const qrContent = path.join('player-qrcode', `${lastName}-qr.png`);
    console.log(`Generating QR for ${player.name} ([WIKILINK_PLACEHOLDER]) into ${qrPath}...`);
    QRCode.toFile(qrPath, qrContent, { width: 300 }, (err) => {
      if (err) {
        console.error(`Error generating QR for ${player.name}:`, err);
        reject(err);
      } else {
        console.log(`QR code saved for ${player.name} at ${qrPath}`);
        resolve(qrPath);
      }
    });
  });
});

Promise.all(qrPromises)
  .then(results => {
    console.log(`All QR codes generated:`, results);
  })
  .catch(err => {
    console.error("One or more QR code generations failed.", err);
  });