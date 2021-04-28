import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from '../screens/main/LandingScreen';
import DetailsPokemon from '../screens/main/DetailsPokemon';

import { Alert, Button } from 'react-native';

const Routes: FC = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="DetailsPokemon" component={DetailsPokemon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;


