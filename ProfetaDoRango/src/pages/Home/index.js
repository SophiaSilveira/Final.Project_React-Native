import React from 'react';
import {View,
        Text,
        StyleSheet,
        TouchableOpacity} from 'react-native';


function Home({navigation}) {


  return (
    <View style = {estilo.container}>
      <Text>Home</Text>
      <TouchableOpacity
        onPress = { () =>
          navigation.navigate('AdmHome')}>
           <Text>Ir Adm Home</Text>
      </TouchableOpacity>
    </View>
  );

};

const estilo = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Home;