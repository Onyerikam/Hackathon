// ConnectedNetwork.js
import React from 'react';
import { View, Text } from 'react-native';

// Connected to: {the network name also know as ssid}
const ConnectedNetwork = ({ network }) => (
    <View>
     <Text>Connected to: {network.ssid}</Text>
    </View>
);

export default ConnectedNetwork;