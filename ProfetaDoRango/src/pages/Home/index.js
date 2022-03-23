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
          navigation.navigate('RecipeScreen')}>
           <Text>Ir Recipe Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress = { () =>
          navigation.navigate('SuggestionsRegister')}>
        <Text>Ir Suggestions Register</Text>
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