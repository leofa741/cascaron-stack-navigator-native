import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { homeScreen } from '../screens/homeScreen';

const Stack = createStackNavigator();

export const Navigator=()=> {
  return (
    <Stack.Navigator 
    screenOptions={{
        headerShown:false
    }}
     >
      <Stack.Screen name="Home" component={homeScreen} />
     
    </Stack.Navigator>
  );
}