import React from 'react';
import { Header } from 'react-native';

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
      <Stack.Navigator initialRouteName={"UserOption"}>
        <Stack.Screen name="UserOption"
                      component={UserOption}
                      options={{headerShown: false}}/>

        <Stack.Screen name="AdmHome"
                      component={AdmHome}
                      options={{headerShown: false}} />
        <Stack.Screen name="AdmLogin"
                      component={AdmLogin}
                      options={{
                        title: 'Login do Adm',
                        headerStyle: {
                          backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                      }}/>
        <Stack.Screen name="AdmRegister"
                      component={AdmRegister}
                      options={{
                        title: 'Registrar Adm',
                        headerStyle: {
                          backgroundColor: '#efefef',
                        },
                        headerTintColor: '#f4511e',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                      }}/>
        <Stack.Screen name="AdmSeeAll"
                      component={AdmSeeAll}
                      options={{
                        title: 'Ver todos os Adm',
                        headerStyle: {
                          backgroundColor: '#efefef',
                          },
                        headerTintColor: '#f4511e',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                      }}/>
        <Stack.Screen name="Home"
                      component={Home}
                      options={{headerShown: false}} />
        <Stack.Screen name="Childish"
                      component={Childish}
                      options={{headerShown: false}}/>
        <Stack.Screen name="Drinks"
                      component={Drinks}
                      options={{headerShown: false}}/>
        <Stack.Screen name="Snacks"
                      component={Snacks}
                      options={{headerShown: false}}/>

        <Stack.Screen name="RecipeRegister"
                      component={RecipeRegister}
                      options={{
                        title: 'Registrar Receita',
                        headerStyle: {
                          backgroundColor: '#efefef',
                        },
                        headerTintColor: '#f4511e',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                      }}/>
        <Stack.Screen name="BatidaAlcoolica"
                      component={BatidaAlcoolica}
                      options={{headerShown: false}}/>
        <Stack.Screen name="Panquecas"
                      component={Panquecas}
                      options={{headerShown: false}}/>
        <Stack.Screen name="Pizza"
                      component={Pizza}
                      options={{headerShown: false}}/>

        <Stack.Screen name="SuggestionsRegister"
                      component={SuggestionsRegister}
                      options={{
                        title: 'Enviar sugestão',
                        headerStyle: {
                          backgroundColor: '#efefef',
                        },
                        headerTintColor: '#f4511e',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                      }}/>
        <Stack.Screen name="SuggestionsScreen"
                      component={SuggestionsScreen}
                      options={{
                        title: 'Tela de sugestões',
                        headerStyle: {
                          backgroundColor: '#efefef',
                        },
                        headerTintColor: '#f4511e',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                      }}/>

        <Stack.Screen name="UserLogin"
                      component={UserLogin}
                      options={{
                        title: 'Login do Usuário',
                         headerStyle: {
                           backgroundColor: '#f4511e',
                            },
                           headerTintColor: '#fff',
                           headerTitleStyle: {
                             fontWeight: 'bold',
                           },
                      }}/>
        <Stack.Screen name="UserRegister"
                      component={UserRegister}
                      options={{
                        title: 'Registrar Usuário',
                         headerStyle: {
                           backgroundColor: '#f4511e',
                            },
                           headerTintColor: '#fff',
                           headerTitleStyle: {
                             fontWeight: 'bold',
                           },
                      }}/>
        <Stack.Screen name="UserUpdate"
                      component={UserUpdate}
                      options={{
                        title: 'Vizualizar e Atualizar Perfil',
                         headerStyle: {
                           backgroundColor: '#efefef',
                            },
                           headerTintColor: '#f4511e',
                           headerTitleStyle: {
                             fontWeight: 'bold',
                           },
                      }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};