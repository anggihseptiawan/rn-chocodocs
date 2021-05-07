import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {colors} from '../../../utils';
import {Button} from '../../atoms';

const ChatInput = ({value, handleChange, handlePress}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tulis pesan.."
        value={value}
        onChangeText={handleChange}
      />
      <Button
        type="btn-icon"
        disable={value.length < 1}
        handlePress={handlePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: colors.disable,
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
  },
});

export default ChatInput;
