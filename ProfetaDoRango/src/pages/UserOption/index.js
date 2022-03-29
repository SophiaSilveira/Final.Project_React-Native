import React, {useState, useEffect} from 'react';
import {View,
        Text,
        StyleSheet,
        TouchableOpacity,
        StatusBar,
        Image,
        Animated,
        LogBox} from 'react-native';

function UserOption({navigation}) {
  const [largura,setLargura] =useState(new Animated.Value (1080));
  const [altura,setAltura] =useState(new Animated.Value (1920));

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, [])

  Animated.sequence([
    Animated.timing(
      largura,
      {
        toValue: 0,
        duration: 2000
      }
    ),
    Animated.timing(
      altura,
      {
        toValue: 0,
        duration: 1500
      }
    )
  ]).start();

  return (
    <View style = {styles.container}>
    <StatusBar hidden />
      <Animated.View
        style ={{
          width: largura,
          height: altura,
          backgroundColor: '#FAB36D'}}/>
       <View><Image source={require('../../img/Logo.png')} style={styles.img}/></View>
      <Text style={styles.tittle}> O PROFETA DO RANGO </Text>
      <Text style={styles.presentation}>O Profeta do Rango é o aplicativo culinário para você,
                                        indeciso ou não, chefe de cozinha iniciante ou
                                        profissional a decidir seu prato(rango) do dia ou
                                        simplesmente aprender a cozinhar aquele prato pro
                                        seu/sua crush ou pra matar aquela vontade. </Text>
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

    img: {
      width: 200,
      height: 340,
      marginBottom: -70,
    },

    tittle: {
      fontSize: 20,
      color: '#fff',
      fontWeight: 'bold',
      marginBottom: 10,
    },

    presentation: {
      color: '#fff',
      fontSize: 18,
      justifyContent: 'space-around',
      width: 400,
      textAlign: 'center',
      fontWeight: 'bold',
    },

    buttonOne: {
      marginTop: 30,
      marginBottom: 20,
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