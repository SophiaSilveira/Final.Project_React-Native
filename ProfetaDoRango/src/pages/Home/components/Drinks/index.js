import React from 'react';
import {View,
        Text,
        StyleSheet,
        TouchableOpacity} from 'react-native';

function Drinks({navigation}) {
  return (
    <View style = {styles.container}>
      <Text>Drinks</Text>
      <TouchableOpacity
        onPress = { () =>
          navigation.navigate('BatidaAlcoolica')}>
          <Text>Ir Batida Alcoólica</Text>
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

export default Drinks;