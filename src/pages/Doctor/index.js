import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {
  HomeProfile,
  DoctorCategory,
  RatedDoctor,
  NewsItem,
} from '../../components';
import {fonts, colors, getData} from '../../utils';
import {JSONCategoryDoctor, NullPhoto, Person} from '../../assets';

const Doctor = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HomeProfile handlePress={() => navigation.navigate('UserProfile')} />
          <Text style={styles.title}>
            Mau konsultasi dengan siapa hari ini ?
          </Text>
          <View style={styles.scrollWrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                {JSONCategoryDoctor.data.map((data) => {
                  return (
                    <DoctorCategory
                      key={data.id}
                      category={data.category}
                      handlePress={() => navigation.navigate('ChooseDoctor')}
                    />
                  );
                })}
              </View>
            </ScrollView>
          </View>
          <Text style={styles.labelTitle}>Top Rated Doctor</Text>
          <RatedDoctor
            name="Donita aprilia"
            desc="Dokter anak"
            avatar={Person}
            handlePress={() => navigation.navigate('DokterProfile')}
          />
          <RatedDoctor
            name="Budi Yulianto"
            desc="Dokter Jantung"
            avatar={NullPhoto}
            handlePress={() => navigation.navigate('DokterProfile')}
          />
          <RatedDoctor
            name="Dodi Mulyono"
            desc="Dokter Gigi"
            avatar={Person}
            handlePress={() => navigation.navigate('DokterProfile')}
          />
          <Text style={styles.labelTitle}>Good News</Text>
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: 'white',
    paddingTop: 30,
    paddingHorizontal: 20,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  category: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 15,
  },
  // scrollWrapper: {
  //   marginHorizontal: -40,
  // },
  labelTitle: {
    fontSize: 16,
    fontFamily: colors.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 15,
  },
});

export default Doctor;
