

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;