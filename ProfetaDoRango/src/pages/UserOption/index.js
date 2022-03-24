import React from 'react';
import {View,
        Text,
        StyleSheet,
        TouchableOpacity} from 'react-native';


function UserOption({navigation}) {
  return (
    <View style = {styles.container}>
      <Text>User Option</Text>
      <TouchableOpacity
       onPress = { () =>
        navigation.navigate('UserRegister')}>
        <Text>Ir User Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress = { () =>
          navigation.navigate('UserLogin')}>
           <Text>Ir User Login</Text>
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

export default UserOption;