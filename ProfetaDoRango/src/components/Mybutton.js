import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Mybutton = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.customClick}>
      <Text style={styles.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#fdeca6',
    color: '#ffffff',
    padding: 10,
    marginTop: 50,
    marginLeft: 60,
    marginRight: 60,
    borderRadius: 15
  },
  text: {
    color: '#585858',
    fontSize: 20
  },
});

export default Mybutton;