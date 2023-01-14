import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './screens/HomeScreen';
import ScanScreen from './screens/ScanScreen';
import NetworkScreen from './screens/NetworkScreen';
import AdvancedSettingsScreen from './screens/AdvancedSettingsScreen';

const AppNavigator = createBottomTabNavigator({
   Home: HomeScreen,
   Scan: ScanScreen,
   Network: NetworkScreen,
   AdvancedSettings: AdvancedSettingsScreen,
});

export default createAppContainer(AppNavigator);
