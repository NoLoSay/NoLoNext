import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nolosay.app',
  appName: 'NoLoSay',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
