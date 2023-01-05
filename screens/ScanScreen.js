import React from 'react';
import { View, Text, Button } from 'react-native';
import NetworkScanService from '../services/NetworkScanService';

export default class ScanScreen extends React.Component {
state = {
networks: [],
}

componentDidMount() {
this.scanNetworks();
}

scanNetworks = async () => {
const networks = await NetworkScanService.scanAsync();
this.setState({ networks });
}

handleScanButtonPress = () => {
this.scanNetworks();
}

render() {
const { networks } = this.state;
return (
<View>
<Button title="Scan" onPress={this.handleScanButtonPress} />
{networks.map(network => (
<Text key={network.ssid}>{network.ssid}</Text>
))}
</View>
);
}
}