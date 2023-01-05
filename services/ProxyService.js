import { NativeModules } from 'react-native';

const Proxy = NativeModules.Proxy;

export default {
isConnectedAsync: () => Proxy.isConnectedAsync(),
connectAsync: () => Proxy.connectAsync(),
disconnectAsync: () => Proxy.disconnectAsync(),
};