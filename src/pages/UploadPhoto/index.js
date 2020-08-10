import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Header, Button, Link} from '../../components';
import {NullPhoto, Add, Remove} from '../../assets';
import {colors, fonts} from '../../utils';

const UploadPhoto = ({navigation}) => {
  const [hasPhoto, setHasPhoto] = useState(false);

  return (
    <View style={styles.container}>
      <Header title="Upload Photo" handlePress={() => navigation.goBack()} />
      <View style={styles.mainContent}>
        <View style={styles.topSection}>
          <View style={styles.imageWrapper}>
            <Image source={NullPhoto} style={styles.image} />
            {hasPhoto && <Image source={Remove} style={styles.icon} />}
            {!hasPhoto && <Image source={Add} style={styles.icon} />}
          </View>
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.occupation}>Product Designer</Text>
        </View>
        <View>
          <Button
            disable
            title="Upload and Continue"
            space={15}
            handlePress={() => navigation.replace('MainApp')}
          />
          <Link
            title="Skip for this"
            align="center"
            size={16}
            handlePress={() => navigation.replace('MainApp')}
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
