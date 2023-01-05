import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';
import ScanScreen from './screens/ScanScreen';
import NetworkScreen from './screens/NetworkScreen';
import AdvancedSettingsScreen from './screens/AdvancedSettingsScreen';
import HotspotScreen from './screens/HotspotScreen';
import VPNScreen from './screens/VPNScreen';
import ProxyScreen from './screens/ProxyScreen';

const AppNavigator = createStackNavigator({
Home: HomeScreen,
Scan: ScanScreen,
Network: NetworkScreen,
AdvancedSettings: AdvancedSettingsScreen,
Hotspot: HotspotScreen,
VPN: VPNScreen,
Proxy: ProxyScreen,
});

export default createAppContainer(AppNavigator);