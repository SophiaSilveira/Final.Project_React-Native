import React, {useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Mytextinput from '../../components/Mytextinput';
import Mybutton from '../../components/Mybutton';
import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase({name: 'app_db.db', createFromLocation: 1});

const AdmLogin = ({navigation}) => {
  let [inputUserName, setInputUserName] = useState('');
  let [inputUserPassword, setInputUserPassword] = useState('');
  let [userName, setUserName] = useState('');
  let [userPassword, setUserPassword] = useState('');

  let updateAllStates = (name, password) => {
    setUserName(name);
    setUserPassword(password);
  };

  let searchUser = () => {
    console.log(inputUserName, inputUserPassword);
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM tbl_user where (user_name, user_password) = (?,?)',
        [inputUserName, inputUserPassword],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            updateAllStates(res.user_name, res.user_password);
            navigation.navigate('Home');
          } else {
            alert('No user found');
            updateAllStates('', '', '');
          }
        },
      );
    });
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      <View style={styles.logo}></View>
        <View style={styles.container}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={styles.keyboard}>
              <Mytextinput
                placeholder="Coloque seu Nome Completo"
                style={styles.padding}
                onChangeText={
                  (inputUserName) => setInputUserName(inputUserName)
                }
              />
              <Mytextinput
                placeholder="Coloque sua Senha"
                style={styles.padding}
                onChangeText={
                  (inputUserPassword) => setInputUserPassword(inputUserPassword)
                  }
               />
              <Mybutton
                title="Entrar"
                customClick={searchUser}
              />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
        <TouchableOpacity
          onPress = { () =>
          navigation.navigate('AdmLogin')}>
            <Text>Ir AdmLogin</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff9939',
      alignItems: 'center',
    },

    logo: {
      flex: 1,
      backgroundColor: '#fff',
      width: 50,
      borderRadius: 100,
      marginTop: 20,
      marginBottom: 0,

    },

    keyboard:{
      flex: 1,
      justifyContent: 'space-between',
    },

    padding: {
      padding: 10,
      fontSize: 20,
    },

});

export default AdmLogin;