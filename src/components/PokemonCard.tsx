import React, {FC, useEffect} from 'react';
import {StyleSheet, Text, View, Dimensions,Image} from 'react-native';
import {Card} from 'react-native-elements';


const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

interface PokemonCardProps {
  name: string;
  image: string;
}
const PokemonCard: FC<PokemonCardProps> = ({name, image}) => {
  return (
    <Card containerStyle={styles.container}>
      <View style={{flexDirection:"row",alignItems:"center"}}>
      <Image source={{uri: image}} style={{height:100,width:100,marginHorizontal:25}}/>
      <Text style={[styles.textBold, {marginBottom: 10}]}>{name}</Text>
      </View>
     
    </Card>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    width: Devicewidth / 1.05,
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
