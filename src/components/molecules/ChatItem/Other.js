import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Person} from '../../../assets';

const Other = () => {
  return (
    <View style={styles.container}>
      <Image source={Person} style={styles.image} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>
            Other njndfjnjf fnjkdsnfd fjdskjnfdjsnkjdn
          </Text>
        </View>
        <Text style={styles.date}>4.20 AM</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  chatContent: {
    maxWidth: '80%',
    backgroundColor: colors.primary,
    padding: 12,
    paddingVertical: 18,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: 'white',
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 10,
  },
});

export default Other;
