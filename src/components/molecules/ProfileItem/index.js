import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../utils';

const ProfileItem = ({label, value, space}) => {
  return (
    <View style={styles.container(space)}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: (space) => ({
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    marginBottom: space,
  }),
  label: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginBottom: 5,
  },
  value: {
    fontSize: 14,
  },
});

export default ProfileItem;
