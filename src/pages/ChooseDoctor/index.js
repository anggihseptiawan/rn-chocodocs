import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Person} from '../../assets';
import {Header, ListDoctor} from '../../components';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        title="Pilih Dokter Anak"
        type="dark"
        handlePress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ListDoctor
          image={Person}
          name="Budi Yulianto"
          chat="Pria"
          type="next"
          handlePress={() => navigation.navigate('Chat')}
        />
        <ListDoctor
          image={Person}
          name="Budi Yulianto"
          chat="Pria"
          type="next"
          handlePress={() => navigation.navigate('Chat')}
        />
        <ListDoctor
          image={Person}
          name="Budi Yulianto"
          chat="Pria"
          type="next"
          handlePress={() => navigation.navigate('Chat')}
        />
        <ListDoctor
          image={Person}
          name="Budi Yulianto"
          chat="Pria"
          type="next"
          handlePress={() => navigation.navigate('Chat')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});

export default ChooseDoctor;
