// DataUsage.js
import React from 'react';
import { View, Text, ProgressBar } from 'react-native';

const DataUsage = ({ usage, limit }) => (
    <View>
    <Text>Data usage: {usage}MB</Text>
    <Text>Data limit: {limit}MB</Text>
    <ProgressBar progress={usage / limit} />
    </View>
);

export default DataUsage;