import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fonts, colors} from '../../../utils';

const IsMe = ({isMe}) => {
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Text style={styles.text}>
          Bu dokter, apakah memakan jeruk tiap hari bikin kita jadi sehat ?
        </Text>
      </View>
      <Text style={styles.date}>4.20 AM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingRight: 16,
  },
  chatContent: {
    maxWidth: '70%',
    backgroundColor: colors.greenCard,
    padding: 12,
    paddingVertical: 18,
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
  },
});

export default IsMe;
