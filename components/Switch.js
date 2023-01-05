import React from 'react';
import { View, Switch } from 'react-native';

export default class CustomSwitch extends React.Component {
render() {
const { value, onValueChange } = this.props;
return (
<View>
<Switch value={value} onValueChange={onValueChange} />
</View>
);
}
}
