import React from 'react';
import {View,
        Text,
        StyleSheet,
        TouchableOpacity} from 'react-native';

function Snacks({navigation}) {
  return (
    <View style = {styles.container}>
      <Text>Snacks</Text>
      <TouchableOpacity
        onPress = { () =>
          navigation.navigate('Pizza')}>
          <Text>Ir Pizza</Text>
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

export default Snacks;