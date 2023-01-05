import { NativeModules } from 'react-native';

const VPN = NativeModules.VPN;

export default {
isConnectedAsync: () => VPN.isConnectedAsync(),
connectAsync: () => VPN.connectAsync(),
disconnectAsync: () => VPN.disconnectAsync(),
};