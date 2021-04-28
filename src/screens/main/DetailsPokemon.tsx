import React, {FC, useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from 'react-native-elements';
import {Divider} from 'react-native-elements';
import {Image} from 'react-native-elements/dist/image/Image';
import { ScrollView } from 'react-native-gesture-handler';
import PokemonCard from '../../components/PokemonCard';

import {getpokemonDetails} from '../../utils/api';

const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

const DetailsPokemon: FC = props => {
  const {id} = props.route.params;

  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getpokemonDetails(id).then(response => {
      console.log(JSON.stringify(response.data));

      setData(response.data);
    });
  }, []);

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
  const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(
    '00' + id
  ).slice(-3)}.png`;

  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          source={{uri: image}}
          style={{
            height: Deviceheight / 2.5,
            width: Deviceheight / 3,
            marginHorizontal: 25,
          }}
        />
        <Text style={styles.title}>{data.name}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>id:</Text>
          <Text style={styles.text}>{data.id}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>height:</Text>
          <Text style={styles.text}>{data.height}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>weight:</Text>
          <Text style={styles.text}>{data.weight}</Text>
        </View>

        <Divider style={styles.divider} />
        <Text style={styles.title2}>Type</Text>

        {data?.types?.map((item: any) => {
          return (
            <>
              <Text style={styles.text}>{item.type.name}</Text>
            </>
          );
        })}

        <Divider style={styles.divider} />
        <Text style={styles.title2}>Moves</Text>

        {data?.moves?.slice(0,7).map((item: any) => {
          return (
            <>
              <Text style={styles.text}>{item.move.name}</Text>
            </>
          );
        })}
      </View>
      </ScrollView>
    </>
  );
};

export default DetailsPokemon;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3EBF2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginVertical: 15,
  },
  text: {
    fontSize: 18,
    margin: 5,
    fontWeight: '700',
  },
  title2: {
    fontSize: 25,
    marginVertical: 10,
    fontWeight: '700',
  },
  divider: {
    backgroundColor: '#b2b2b2',
    height: 1,
    width: Devicewidth,
    marginVertical: 5,
  },
});
