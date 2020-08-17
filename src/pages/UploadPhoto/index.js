import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Header, Button, Link} from '../../components';
import {NullPhoto, Add, Remove} from '../../assets';
import {colors, fonts} from '../../utils';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {Fire} from '../../config';

const UploadPhoto = ({navigation, route}) => {
  const {fullName, occupation, uid} = route.params;

  const [photoForDB, setPhotoForDB] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(NullPhoto);

  const getImage = () => {
    ImagePicker.launchImageLibrary(
      {quality: 0.5, maxWidth: 200, maxHeight: 200},
      (res) => {
        if (res.didCancel || res.error) {
          showMessage({
            message: 'Oops, sepertinya anda tidak memilih photo..',
            type: 'danger',
          });
        } else {
          setPhotoForDB(`data:${res.type};base64, ${res.data}`);

          const source = {uri: res.uri};
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };

  const uploadAndContinue = () => {
    // save photo for db
    Fire.database().ref(`users/${uid}/`).update({photo: photoForDB});
    navigation.replace('MainApp', uid);
  };

  return (
    <View style={styles.container}>
      <Header title="Upload Photo" handlePress={() => navigation.goBack()} />
      <View style={styles.mainContent}>
        <View style={styles.topSection}>
          <TouchableNativeFeedback
            style={styles.imageWrapper}
            onPress={getImage}>
            <Image source={photo} style={styles.image} />
            {hasPhoto && <Image source={Remove} style={styles.icon} />}
            {!hasPhoto && <Image source={Add} style={styles.icon} />}
          </TouchableNativeFeedback>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.occupation}>{occupation}</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Upload and Continue"
            space={15}
            handlePress={uploadAndContinue}
          />
          <Link
            title="Skip for this"
            align="center"
            size={16}
            handlePress={uploadAndContinue}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainContent: {
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 110,
    height: 110,
    position: 'relative',
    borderRadius: 110 / 2,
  },
  icon: {
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  topSection: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  name: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    marginTop: 20,
  },
  occupation: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    color: colors.text.secondary,
    marginTop: 4,
  },
});

export default UploadPhoto;
