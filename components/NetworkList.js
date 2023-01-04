// NetworkList.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const NetworkList = ({ networks, onPress }) => (
    <FlatList
    data={networks}
    renderItem={({ item }) => (
    <View>
    <Text onPress={() => onPress(item)}>{item.ssid}</Text>
    </View>
    )}
    keyExtractor={item => item.ssid}
    />
);

export default NetworkList;
