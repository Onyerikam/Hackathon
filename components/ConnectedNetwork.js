// ConnectedNetwork.js
import React from 'react';
import { View, Text } from 'react-native';

const ConnectedNetwork = ({ network }) => (
    <View>
    <Text>Connected to: {network.ssid}</Text>
    </View>
);

export default ConnectedNetwork;