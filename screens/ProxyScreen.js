import React from 'react';
import { View, Text, Switch } from 'react-native';
import ProxyService from '../services/ProxyService';

export default class ProxyScreen extends React.Component {
state = {
isProxyConnected: false,
}

componentDidMount() {
this.fetchProxyStatus();
}

fetchProxyStatus = async () => {
const isProxyConnected = await ProxyService.isConnectedAsync();
this.setState({ isProxyConnected });
}

handleProxyToggle = async (value) => {
if (value) {
await ProxyService.connectAsync();
} else {
await ProxyService.disconnectAsync();
}
this.setState({ isProxyConnected: value });
}

render() {
const { isProxyConnected } = this.state;
return (
<View>
<Text>Proxy:</Text>
<Switch value={isProxyConnected} onValueChange={this.handleProxyToggle} />
</View>
);
}
}