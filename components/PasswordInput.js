// PasswordInput.js
import React from 'react';
import { View, TextInput, Button } from 'react-native';

const PasswordInput = ({ onChange, onSubmit }) => (
  <View>
    <TextInput onChangeText={onChange} />
    <Button onPress={onSubmit} title="Connect" />
  </View>
);

export default PasswordInput;