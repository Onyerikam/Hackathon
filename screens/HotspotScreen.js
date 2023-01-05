import React from 'react';
import { View, Text, Switch } from 'react-native';
import WiFiHotspotService from '../services/WiFiHotspotService';

export default class HotspotScreen extends React.Component {
state = {
isHotspotEnabled: false,
}

componentDidMount() {
this.fetchHotspotStatus();
}

fetchHotspotStatus = async () => {
const isHotspotEnabled = await WiFiHotspotService.isEnabledAsync();
this.setState({ isHotspotEnabled });
}

handleHotspotToggle = async (value) => {
await WiFiHotspotService.setEnabledAsync(value);
this.setState({ isHotspotEnabled: value });
}

render() {
const { isHotspotEnabled } = this.state;
return (
<View>
<Text>Hotspot:</Text>
<Switch value={isHotspotEnabled} onValueChange={this.handleHotspotToggle} />
</View>
);
}
}