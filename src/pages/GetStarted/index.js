import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {Logo, Background} from '../../assets';
import {Button} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={Background} style={styles.container}>
      <View>
        <Image source={Logo} style={styles.image} />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah dan fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          space={10}
          handlePress={() => navigation.navigate('SignUp')}
        />
        <Button
          type="secondary"
          title="Sign In"
          handlePress={() => navigation.navigate('SignIn')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 28,
    fontFamily: 'NunitoSans-SemiBold',
    lineHeight: 32,
    marginTop: 90,
    color: 'white',
  },
  topBtn: {
    marginBottom: 15,
  },
});

export default GetStarted;
