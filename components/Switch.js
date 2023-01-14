import React, { Component } from 'react';
import { View, Switch } from 'react-native';

export default class CustomSwitch extends Component {
  render() {
   const { value, onValueChange } = this.props;
  return (
   <View>
    <Switch value={value} onValueChange={onValueChange} />
   </View>
  );
 }
}
