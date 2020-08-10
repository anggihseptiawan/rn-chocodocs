import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, ChatItem, ChatInput} from '../../components';
import {colors} from '../../utils';

const Chat = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        title="Budi Yulianto"
        type="dark-profile"
        handlePress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.date}>Senin, 20 Agustus 2020</Text>
        <ChatItem isMe />
        <ChatItem />
        <ChatItem />
      </View>
      <ChatInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    flex: 1,
  },
  date: {
    textAlign: 'center',
    color: colors.text.secondary,
    fontSize: 11,
    marginVertical: 20,
  },
});

export default Chat;
