import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, Profile, ProfileItem, Button} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';

const DokterProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Doctor Profile" handlePress={() => navigation.goBack()} />
      <ScrollView>
        <Profile name="Donita Aprilila" occupation="Dokter Anak" />
        <ProfileItem label="Aluumnus" value="Universitas Indonesia, 2019" />
        <ProfileItem label="Tempat Praktik" value="Rumah Sakit Umum, Bandung" />
        <ProfileItem label="No. STR" value="98788787798" space={30} />
        <View style={styles.btnWrapper}>
          <Button
            title="Start Consultation"
            handlePress={() => navigation.navigate('Chat')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  btnWrapper: {
    paddingHorizontal: 40,
    marginBottom: 60,
  },
});

export default DokterProfile;
