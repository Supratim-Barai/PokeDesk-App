import React, {FC, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import PokemonCard from '../../components/PokemonCard';
import {DATA} from '../../utils/tempData';

//https://pokeapi.co/api/v2/pokemon?limit=150

const LandingScreen: FC = () => {
  const renderItem = ({item}: any) => (
    <View style={{marginVertical: 7, marginTop: 15}}>
      <TouchableOpacity>
        <PokemonCard name={item.name} key={item.name} />
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={renderItem}
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
