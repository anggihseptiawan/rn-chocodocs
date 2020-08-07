import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {colors} from '../../../utils';
import {Button} from '../../atoms';

const ChatInput = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis pesan.." />
      <Button type="btn-icon" disable />
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
