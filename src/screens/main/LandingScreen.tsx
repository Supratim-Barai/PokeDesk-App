import React, {FC, useEffect, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import PokemonCard from '../../components/PokemonCard';

import {getpokemon} from '../../utils/api';

const LandingScreen: FC = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    getpokemon().then(response => {
      console.log(response.data);
      setData(response.data.results);
    });
  }, []);

  // const paddedId = ('00' + (index + 1)).slice(-3);

  // const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`

  const renderItem = (item: any, index: number) => (
    <View style={{marginVertical: 7, marginTop: 10}}>
      <TouchableOpacity>
        <PokemonCard
          name={item.name}
          image={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(
            '00' +
            (index + 1)
          ).slice(-3)}.png`}
          key={index}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item, index}) => renderItem(item, index)}
          keyExtractor={item => item.name}
        />
      </View>
    </>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3EBF2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 30,
    marginTop: 25,
  },
});
