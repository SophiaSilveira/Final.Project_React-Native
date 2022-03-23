import React from 'react';
import {View,
        Text,
        StyleSheet,
        TouchableOpacity} from 'react-native';


function AdmHome({navigation}) {
  return (
    <View style = {estilo.container}>
      <Text>AdmHome</Text>
      <TouchableOpacity
        onPress = { () =>
          navigation.navigate('Home')}>
           <Text>Ir  Home</Text>
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

export default AdmHome;