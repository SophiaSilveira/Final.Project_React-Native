import React from 'react';
import {View,
        Text,
        StyleSheet,
        TouchableOpacity} from 'react-native';

function Childish({navigation}) {
  return (
    <View style = {styles.container}>
      <Text>Childish</Text>
      <TouchableOpacity
        onPress = { () =>
          navigation.navigate('Panquecas')}>
          <Text>Ir Panquecas</Text>
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

export default Childish;