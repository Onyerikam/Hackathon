import React from 'react';
import { View, Text, Switch } from 'react-native';
import VPNService from '../services/VPNService';

export default class VPNScreen extends React.Component {
state = {
isVPNConnected: false,
}

componentDidMount() {
this.fetchVPNStatus();
}

fetchVPNStatus = async () => {
const isVPNConnected = await VPNService.isConnectedAsync();
this.setState({ isVPNConnected });
}

handleVPNToggle = async (value) => {
if (value) {
await VPNService.connectAsync();
} else {
await VPNService.disconnectAsync();
}
this.setState({ isVPNConnected: value });
}

render() {
const { isVPNConnected } = this.state;
return (
<View>
<Text>VPN:</Text>
<Switch value={isVPNConnected} onValueChange={this.handleVPNToggle} />
</View>
);
}
}