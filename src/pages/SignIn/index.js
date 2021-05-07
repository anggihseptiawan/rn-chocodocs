import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {Logo} from '../../assets';
import {Button, Input, Link} from '../../components';
import {Fire} from '../../config';
import {colors, fonts, showAlert, storeData, useForm} from '../../utils';
const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({email: '', password: ''});
  const dispatch = useDispatch();

  const login = () => {
    dispatch({type: 'SET_LOADER', value: true});
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then((resDB) => {
            if (resDB.val()) {
              dispatch({type: 'SET_LOADER', value: false});
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          });
      })
      .catch((err) => {
        dispatch({type: 'SET_LOADER', value: false});
        showAlert(err.message, 'danger');
      });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
    </ScrollView>
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
