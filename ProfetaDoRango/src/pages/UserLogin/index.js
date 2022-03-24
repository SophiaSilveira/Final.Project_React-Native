import React from 'react';
import {View,
        Text,
        StyleSheet,
        TouchableOpacity} from 'react-native';


function UserLogin({navigation}) {
  return (
    <View style = {styles.container}>
      <Text>User Login</Text>
      <TouchableOpacity
       onPress = { () =>
        navigation.navigate('Home')}>
        <Text>Ir Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress = { () =>
          navigation.navigate('AdmLogin')}>
           <Text>Ir AdmLogin</Text>
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

export default UserLogin;