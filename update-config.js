import { readFile, writeFile } from 'fs';
import { networkInterfaces } from 'os';
import { join } from 'path';

// Function to get the local IP address
function getLocalIPAddress() {
  const interfaces = networkInterfaces();
  for (let name of Object.keys(interfaces)) {
    for (let iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

const ipAddress = getLocalIPAddress();
const configFilePath = join(__dirname, 'capacitor.config.ts');

// Read the current config file
readFile(configFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading capacitor.config.ts:', err);
    return;
  }

  // Replace the server URL with the current IP address
  const updatedData = data.replace(
    /url: 'http:\/\/.*:\d+'/,
    `url: 'http://${ipAddress}:4200'`
  );

  // Write the updated config back to the file
  writeFile(configFilePath, updatedData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing capacitor.config.ts:', err);
      return;
    }
    console.log('Updated capacitor.config.ts with local IP address:', ipAddress);
  });
});
