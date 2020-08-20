import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Logo} from '../../assets';
import {fonts} from '../../utils';
import {Fire} from '../../config';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      Fire.auth().onAuthStateChanged((user) => {
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      });
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.icon} />
      <Text style={styles.text}>Chocodocs</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 90,
    height: 90,
  },
  text: {
    color: 'black',
    marginTop: 10,
    fontSize: 18,
    fontFamily: fonts.primary[600],
  },
});

export default Splash;
