import React from 'react';
import { View, Text, Button } from 'react-native';
import NetworkConnectService from '../services/NetworkConnectService';

export default class NetworkScreen extends React.Component {
state = {
ssid: '',
password: '',
}

handleSSIDChange = (ssid) => {
this.setState({ ssid });
}

handlePasswordChange = (password) => {
this.setState({ password });
}

handleConnectButtonPress = async () => {
const { ssid, password } = this.state;
await NetworkConnectService.connectAsync(ssid, password);
}

render() {
const { ssid, password } = this.state;
return (
<View>
<Text>SSID:</Text>
<TextInput value={ssid} onChangeText={this.handleSSIDChange} />
<Text>Password:</Text>
<TextInput value={password} onChangeText={this.handlePasswordChange} secureTextEntry />
<Button title="Connect" onPress={this.handleConnectButtonPress} />
</View>
);
}
}