import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.teachmeet.angular',
  appName: 'teachmeet-mobile',
  webDir: 'dist/mobile',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.10.3:4200',
    cleartext: true,
  },
};

export default config;
