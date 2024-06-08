import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.teachmeet.angular',
  appName: 'teachmeet-mobile',
  webDir: 'dist/mobile',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.10.14:4200',
    //url: 'http://192.168.10.3:4200', // Static IP
    cleartext: true,
  },
};

export default config;

// import type { CapacitorConfig } from '@capacitor/cli';

// const config: CapacitorConfig = {
//   appId: 'com.teachmeet.angular',
//   appName: 'teachmeet-mobile',
//   webDir: 'dist/mobile',
//   bundledWebRuntime: false,
//   server: {
//     url: 'http://localhost:4200', // This will be replaced by the script
//     cleartext: true,
//   },
// };

// export default config;
