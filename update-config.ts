import { networkInterfaces } from 'os';
import { readFile, writeFile } from 'fs';
import { join } from 'path';

function getLocalIPAddress(): string {
  const interfaces = networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]!) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

const ipAddress = getLocalIPAddress();
const configFilePath = join(__dirname, 'capacitor.config.ts');

readFile(configFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading capacitor.config.ts:', err);
    return;
  }

  const updatedData = data.replace(
    /url: 'http:\/\/.*:\d+'/,
    `url: 'http://${ipAddress}:4200'`
  );

  writeFile(configFilePath, updatedData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing capacitor.config.ts:', err);
      return;
    }
    console.log(
      'Updated capacitor.config.ts with local IP address:',
      ipAddress
    );
  });
});
