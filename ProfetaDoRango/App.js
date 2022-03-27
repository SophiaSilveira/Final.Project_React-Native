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
import AdmSeeAll from './src/pages/AdmSeeAll';

import Home from './src/pages/Home';
import Childish from './src/pages/Home/components/Childish';
import Drinks from './src/pages/Home/components/Drinks';
import Snacks from './src/pages/Home/components/Snacks';

import RecipeRegister from './src/pages/RecipeRegister';
import BatidaAlcoolica from './src/pages/RecipeScreen/BatidaAlcoolica';
import Panquecas from './src/pages/RecipeScreen/Panquecas';
import Pizza from './src/pages/RecipeScreen/Pizza';

import SplashScreen from './src/pages/SplashScreen';

import SuggestionsRegister from './src/pages/SuggestionsRegister';
import SuggestionsScreen from './src/pages/SuggestionsScreen';

import UserLogin from './src/pages/UserLogin';
import UserOption from './src/pages/UserOption';
import UserRegister from './src/pages/UserRegister';
import UserUpdate from './src/pages/UserUpdate';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"SplashScreen"}>
        <Stack.Screen name="AdmHome" component={AdmHome} />
        <Stack.Screen name="AdmLogin" component={AdmLogin} />
        <Stack.Screen name="AdmRegister" component={AdmRegister} />
        <Stack.Screen name="AdmSeeAll" component={AdmSeeAll} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Childish" component={Childish} />
        <Stack.Screen name="Drinks" component={Drinks} />
        <Stack.Screen name="Snacks" component={Snacks} />
        <Stack.Screen name="RecipeRegister" component={RecipeRegister} />
        <Stack.Screen name="BatidaAlcoolica" component={BatidaAlcoolica} />
        <Stack.Screen name="Panquecas" component={Panquecas} />
        <Stack.Screen name="Pizza" component={Pizza} />
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

