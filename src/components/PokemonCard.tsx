import React, {FC} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Card} from 'react-native-elements';

const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

interface PokemonCardProps {
  name: string;
}
const PokemonCard: FC<PokemonCardProps> = ({name}) => {
  return (
    <Card containerStyle={styles.container}>
      <Text style={[styles.textBold, {marginBottom: 10}]}>{name}</Text>
    </Card>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    width: Devicewidth / 1.05,
    padding: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
