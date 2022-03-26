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
  let [inputAdmName, setInputAdmName] = useState('');
  let [inputAdmPassword, setInputAdmPassword] = useState('');
  let [admName, setAdmName] = useState('');
  let [admPassword, setAdmPassword] = useState('');

  let updateAllStates = (name, password) => {
    setAdmName(name);
    setAdmPassword(password);
  };

  let searchUser = () => {
    console.log(inputAdmName, inputAdmPassword);
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM tbl_adm where (adm_name, adm_password) = (?,?)',
        [inputAdmName, inputAdmPassword],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            updateAllStates(res.adm_name, res.adm_password);
            navigation.navigate('AdmHome');
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
                  (inputAdmName) => setInputAdmName(inputAdmName)
                }
              />
              <Mytextinput
                placeholder="Coloque sua Senha"
                style={styles.padding}
                onChangeText={
                  (inputAdmPassword) => setInputAdmPassword(inputAdmPassword)
                  }
               />
              <Mybutton
                title="Entrar"
                customClick={searchUser}
              />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff9939',
      alignItems: 'center'
    },

    logo: {
      backgroundColor: '#fff',
      width: 150,
      height: 150,
      borderRadius: 100,
      marginTop: 40,
      marginBottom: 40,
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