import React from 'react';
import {View,
        Text,
        StyleSheet,
        TouchableOpacity} from 'react-native';


function SplashScreen({navigation}) {
  return (
    <View style = {styles.container}>
      <Text>Splash Screen</Text>
      <TouchableOpacity
        onPress = { () =>
          navigation.navigate('UserOption')}>
           <Text>Ir UserOption</Text>
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

export default SplashScreen;