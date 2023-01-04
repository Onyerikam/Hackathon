// BluetoothList.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const BluetoothList = ({ devices }) => (
    <FlatList
    data={devices}
    renderItem={({ item }) => (
    <View>
    <Text>{item.name}</Text>
    </View>
    )}
    keyExtractor={item => item.id}
    />
);

export default BluetoothList;