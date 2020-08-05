import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ListDoctor} from '../../components';
import {colors, fonts} from '../../utils';
import {Person, NullPhoto} from '../../assets';

const Messages = () => {
  const [doctors] = useState([
    {
      id: 1,
      image: Person,
      name: 'Budi Prasetyo',
      chat: 'Baik bu, terimakasih..',
    },
    {
      id: 2,
      image: NullPhoto,
      name: 'Asta Atmaja',
      chat: 'Nanti jam 7 yahh..',
    },
    {
      id: 3,
      image: Person,
      name: 'Doni darmawan',
      chat: 'Jakarta selatan bu..',
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Text style={styles.title}>Messages Page</Text>
        {doctors.map(({id, image, name, chat}) => {
          return <ListDoctor key={id} image={image} name={name} chat={chat} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginBottom: 20,
  },
  mainContent: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});

export default Messages;
