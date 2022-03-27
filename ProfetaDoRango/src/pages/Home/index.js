import React from 'react';
import {View,
        Text,
        StyleSheet,
        TouchableOpacity} from 'react-native';


function Home({navigation}) {

  return (
    <View style = {styles.container}>
      <Text>Home</Text>
      <TouchableOpacity
        onPress = { () =>
          navigation.navigate('Childish')}>
           <Text>Ir Childish</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress = { () =>
          navigation.navigate('Drinks')}>
            <Text>Ir Drinks</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress = { () =>
          navigation.navigate('Snacks')}>
            <Text>Ir Snacks</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress = { () =>
          navigation.navigate('BatidaAlcoolica')}>
          <Text>Ir Batida Alcoólica</Text>
      </TouchableOpacity>
      <TouchableOpacity
         onPress = { () =>
         navigation.navigate('Panquecas')}>
         <Text>Ir Panquecas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress = { () =>
          navigation.navigate('Pizza')}>
          <Text>Ir Pizza</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress = { () =>
          navigation.navigate('SuggestionsRegister')}>
        <Text>Ir Suggestions Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
       onPress = { () =>
        navigation.navigate('UserUpdate')}>
         <Text>Ir User Update</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Home;