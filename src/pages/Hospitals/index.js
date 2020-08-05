import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {BgHospital, Hospital1, Hospital2} from '../../assets';
import {fonts, colors} from '../../utils';
import {ListHospital} from '../../components';

const Hospitals = () => {
  return (
    <View style={styles.wrapper}>
      <ImageBackground source={BgHospital} style={styles.container}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.available}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital
          name="RS. Gatot Subroto"
          address="Jl. Raya Gatot Subroto, Jakarta Selatan"
          image={Hospital1}
        />
        <ListHospital
          name="RS. Sulianti Saroso"
          address="Jl. Raya Pulo Gadung, Jakarta Timur"
          image={Hospital2}
        />
        <ListHospital
          name="RS. Harapan"
          address="Jl. Raya Pasar Minggu, Jakarta Selatan"
          image={Hospital1}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  container: {
    height: 220,
  },
  content: {
    padding: 20,
    borderRadius: 20,
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
  available: {
    textAlign: 'center',
  },
});

export default Hospitals;
