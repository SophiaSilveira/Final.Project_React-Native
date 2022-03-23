import React from 'react';
import {View,
        Text,
        StyleSheet,
        TouchableOpacity} from 'react-native';


function AdmLogin({navigation}) {
  return (
    <View style = {styles.container}>
      <Text>AdmLogin</Text>
      <TouchableOpacity
        onPress = { () =>
          navigation.navigate('AdmHome')}>
           <Text>Ir AdmHome</Text>
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

export default AdmLogin;