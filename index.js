import React from 'react';
import { ScrollView,View,Text, AppRegistry } from 'react-native';
import Login from './screens/Login';
import Home from './screens/Home';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App(){
  return (
    <NavigationContainer>
    
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home"component={Home}/>
      
      
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}






AppRegistry.registerComponent('task5', () => App);