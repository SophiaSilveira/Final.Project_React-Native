import React from 'react';
import {View,
        Text,
        StyleSheet,
        TouchableOpacity} from 'react-native';


function SuggestionsRegister({navigation}) {
  return (
    <View style = {styles.container}>
      <Text>Suggestions Register</Text>
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

export default SuggestionsRegister;