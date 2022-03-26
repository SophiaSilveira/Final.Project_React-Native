import React from 'react';
import {View,
        Text,
        StyleSheet,
        TouchableOpacity,
        StatusBar} from 'react-native';


function UserOption({navigation}) {
  return (
    <View style = {styles.container}>
    <StatusBar hidden />
      <View style={styles.logo}></View>
      <Text style={styles.presentation}>O Profeta do Rango é o aplicativo culinário para você, indeciso ou não, chefe de cozinha iniciante ou profissional a decidir seu prato(rango) do dia ou simplesmente aprender a cozinhar aquele prato pro seu/sua crush ou pra matar aquela vontade. De um jeito simples.</Text>
      <TouchableOpacity
      style = {styles.buttonOne}
       onPress = { () =>
        navigation.navigate('UserRegister')}>
        <Text style={styles.text}>Ir User Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style = {styles.button}
        onPress = { () =>
          navigation.navigate('UserLogin')}>
           <Text style={styles.text}>Ir User Login</Text>
      </TouchableOpacity>
    </View>
  );

};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ff9939',
    },

    logo: {
      marginBottom: 50,
      backgroundColor: '#fff',
      width: 190,
      height: 190,
      borderRadius: 100,
      paddingRight: 7,
    },

    presentation: {
      color: '#fff',
      fontSize: 16,
      justifyContent: 'space-around',
      width: 400,
      textAlign: 'center',
      fontWeight: 'bold'
    },

    buttonOne: {
      marginTop: 40,
      marginBottom: 30,
      backgroundColor: '#fff',
      padding: 20,
      width: 300,
      borderRadius: 15,
    },

    button: {
      marginTop: 10,
      marginBottom: 20,
      backgroundColor: '#fff',
      padding: 20,
      width: 300,
      borderRadius: 15,
    },

    text: {
      textAlign: 'center'
    },
  });

export default UserOption;