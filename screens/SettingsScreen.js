// SettingsScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import DeviceList from '../components/DeviceList';
import BluetoothList from '../components/BluetoothList';

class SettingsScreen extends React.Component {
state = {
devices: [],
bluetoothDevices: [],
};

componentDidMount() {
this.fetchConnectedDevices();
this.fetchBluetoothDevices();
}

fetchConnectedDevices = async () => {
const devices = await NetworkScanner.fetchConnectedDevicesAsync();
this.setState({ devices });
}

fetchBluetoothDevices = async () => {
const bluetoothDevices = await BluetoothScanner.scanAsync();
this.setState({ bluetoothDevices });
}

render() {
const { devices, bluetoothDevices } = this.state;

return (
    <View>
      <Text>Connected Devices:</Text>
      <DeviceList devices={devices} />
      <Text>Bluetooth Devices:</Text>
      <BluetoothList devices={bluetoothDevices} />
    </View>
  );
}
}

export default SettingsScreen;
