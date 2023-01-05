import { NativeModules } from 'react-native';

const NetworkScan = NativeModules.NetworkScan;

export default {
scanAsync: () => NetworkScan.scanAsync(),
};