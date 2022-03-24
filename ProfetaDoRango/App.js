import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AdmHome from './src/pages/AdmHome';
import AdmLogin from './src/pages/AdmLogin';
import AdmRegister from './src/pages/AdmRegister';
import AdmUpdate from './src/pages/AdmUpdate';
import Home from './src/pages/Home';
import RecipeRegister from './src/pages/RecipeRegister';
import RecipeScreen from './src/pages/RecipeScreen';
import SplashScreen from './src/pages/SplashScreen';
import SuggestionsRegister from './src/pages/SuggestionsRegister';
import SuggestionsScreen from './src/pages/SuggestionsScreen';
import UserLogin from './src/pages/UserLogin';
import UserOption from './src/pages/UserOption';
import UserRegister from './src/pages/UserRegister';
import UserUpdate from './src/pages/UserUpdate';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"SplashScreen"}>
        <Stack.Screen name="AdmHome" component={AdmHome} />
        <Stack.Screen name="AdmLogin" component={AdmLogin} />
        <Stack.Screen name="AdmRegister" component={AdmRegister} />
        <Stack.Screen name="AdmUpdate" component={AdmUpdate} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RecipeRegister" component={RecipeRegister} />
        <Stack.Screen name="RecipeScreen" component={RecipeScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SuggestionsRegister" component={SuggestionsRegister} />
        <Stack.Screen name="SuggestionsScreen" component={SuggestionsScreen} />
        <Stack.Screen name="UserLogin" component={UserLogin} />
        <Stack.Screen name="UserOption" component={UserOption} />
        <Stack.Screen name="UserRegister" component={UserRegister} />
        <Stack.Screen name="UserUpdate" component={UserUpdate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;