import { NativeModules } from 'react-native';

const WiFiHotspot = NativeModules.WiFiHotspot;

export default {
isEnabledAsync: () => WiFiHotspot.isEnabledAsync(),
setEnabledAsync: (enabled) => WiFiHotspot.setEnabledAsync(enabled),
};