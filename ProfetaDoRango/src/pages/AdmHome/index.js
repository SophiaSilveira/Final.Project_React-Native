import React from 'react';
import {View,
        Text,
        StyleSheet,
        TouchableOpacity} from 'react-native';


function AdmHome({navigation}) {
  return (
    <View style = {styles.container}>
      <Text>AdmHome</Text>
      <TouchableOpacity
        onPress = { () =>
          navigation.navigate('AdmRegister')}>
           <Text>Ir AdmRegister</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress = { () =>
          navigation.navigate('AdmUpdate')}>
        <Text>Ir AdmUpdate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress = { () =>
          navigation.navigate('RecipeRegister')}>
        <Text>Ir Recipe Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress = { () =>
          navigation.navigate('SuggestionsScreen')}>
        <Text>Ir Suggestions Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress = { () =>
          navigation.navigate('Home')}>
        <Text>Ir Home</Text>
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

export default AdmHome;