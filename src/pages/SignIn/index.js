import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Logo} from '../../assets';
import {Input, Link, Button, Loading} from '../../components';
import {colors, fonts, useForm, storeData} from '../../utils';
import {Fire} from '../../config';
import {showMessage} from 'react-native-flash-message';

const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({email: '', password: ''});
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then((resDB) => {
            if (resDB.val()) {
              setLoading(false);
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          });
      })
      .catch((err) => {
        setLoading(false);
        showMessage({
          message: err.message,
          type: 'danger',
        });
      });
  };

  return (
    <>
      <View style={styles.container}>
        <Image source={Logo} style={styles.image} />
        <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
        <Input
          label="Email Address"
          space={25}
          value={form.email}
          handleChange={(value) => setForm('email', value)}
        />
        <Input
          label="Password"
          space={10}
          value={form.password}
          secureTextEntry
          handleChange={(value) => setForm('password', value)}
        />
        <Link title="Forgot Password" size={12} space={40} />
        <Button title="Sign In" space={30} handlePress={login} />
        <Link
          title="Create New Account"
          size={16}
          align="center"
          handlePress={() => navigation.navigate('SignUp')}
        />
      </View>
      {loading && <Loading />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.secondary,
    marginVertical: 40,
    maxWidth: 190,
  },
});

export default SignIn;
