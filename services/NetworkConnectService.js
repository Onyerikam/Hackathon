import { NativeModules } from 'react-native';

const NetworkConnect = NativeModules.NetworkConnect;

export default {
connectAsync: (ssid, password) => NetworkConnect.connectAsync(ssid, password),
};