import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Person} from '../../../assets/illustration';
import {fonts, colors} from '../../../utils';

const NewsItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.news}>
        <Text style={styles.title}>
          Is it safe to stay at home during corona viurs ?
        </Text>
        <Text style={styles.date}>Today</Text>
      </View>
      <View>
        <Image source={Person} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 15,
  },
  news: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  date: {
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 2,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 5,
  },
});

export default NewsItem;
