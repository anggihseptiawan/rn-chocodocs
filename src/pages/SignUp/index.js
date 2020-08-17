import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Button, Header, Input, Loading} from '../../components';
import {useForm, colors} from '../../utils';
import {Fire} from '../../config';
import {showMessage} from 'react-native-flash-message';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    occupation: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    setLoading(true);
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        const data = {
          fullName: form.fullName,
          occupation: form.occupation,
          email: form.email,
          uid: res.user.uid,
        };

        // add data to database
        Fire.database().ref(`users/${res.user.uid}/`).set(data);

        setLoading(false);
        setForm('reset');
        showMessage({
          message: 'Yeay, pendaftaran berhasil..',
          type: 'success',
        });
        navigation.navigate('UploadPhoto', data);
      })
      .catch((err) => {
        setLoading(false);
        setForm('reset');
        showMessage({
          message: err.message,
          backgroundColor: colors.danger,
        });
      });
  };

  return (
    <>
      <View style={styles.wrapper}>
        <Header handlePress={() => navigation.goBack()} title="Daftar Akun" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Input
              label="Full Name"
              space={20}
              value={form.fullName}
              handleChange={(value) => setForm('fullName', value)}
            />
            <Input
              label="Pekerjaan"
              space={20}
              value={form.occupation}
              handleChange={(value) => setForm('occupation', value)}
            />
            <Input
              label="Email"
              space={20}
              value={form.email}
              handleChange={(value) => setForm('email', value)}
            />
            <Input
              label="Password"
              space={40}
              value={form.password}
              handleChange={(value) => setForm('password', value)}
              secureTextEntry
            />
            <Button title="Continue" handlePress={onContinue} />
          </View>
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    padding: 20,
    paddingTop: 0,
  },
});

export default SignUp;
