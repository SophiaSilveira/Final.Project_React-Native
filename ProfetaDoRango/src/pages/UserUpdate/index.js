import React from 'react';
import {View,
        Text,
        StyleSheet,
        TouchableOpacity} from 'react-native';

function UserUpdate({navigation}) {
  return (
    <View style = {styles.container}>
      <Text>User Update</Text>
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

export default UserUpdate;