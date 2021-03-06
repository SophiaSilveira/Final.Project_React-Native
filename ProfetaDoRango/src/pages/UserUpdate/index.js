import React, {useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
  StyleSheet
} from 'react-native';

import Mytextinput from '../../components/Mytextinput';
import Mybutton from '../../components/Mybutton';
import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase({name: 'app_db.db', createFromLocation: 1});

const UserUpdate = ({navigation}) => {
 let [inputUserName, setInputUserName] = useState('');
  let [userName, setUserName] = useState('');
  let [userId, setUserId] = useState('');
  let [userEmail, setUserEmail] = useState('');

  let updateAllStates = (name, id, email) => {
    setUserName(name);
    setUserId(id);
    setUserEmail(email);
  };

  let searchUser = () => {
    console.log(inputUserName);
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM tbl_user where user_name = ?',
        [inputUserName],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            updateAllStates(res.user_name, res.user_id, res.user_email);
          } else {
            alert('No user found');
            updateAllStates('', '', '');
          }
        },
      );
    });
  };

  let updateUser = () => {
    console.log(inputUserName, userName, userId, userEmail);

    if (!inputUserName) {
      alert('Preencha com o nome');
      return;
    }
    if (!userName) {
      alert('Preencha com o nome');
      return;
    }
    if (!userId) {
      alert('Somente caracteres numericos em ID');
      return;
    }
    if (!userEmail) {
      alert('Preencha com o G-mail');
      return;
    }

    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE tbl_user set user_name=?, user_id=?, user_email=? where user_name=?',
        [userName, userId, userEmail, inputUserName],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sucesso!',
              'Voc?? atualizou seus dados.',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('Home'),
                },
              ],
              {cancelable: false},
            );
          } else alert('Atualiza????o falhou');
        },
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flex}>
        <View style={styles.flex}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={styles.input}>
              <Mytextinput
                placeholder="Nome do usu??rio"
                style={styles.fontSize}
                onChangeText={
                  (inputUserName) => setInputUserName(inputUserName)
                }
              />
              <Mybutton
                title="Procurar usu??rio"
                customClick={searchUser}
              />
              <Mytextinput
                placeholder="Nome Completo"
                value={userName}
                style={styles.fontSize}
                onChangeText={
                  (userName) => setUserName(userName)
                }
              />
              <Mytextinput
                placeholder="ID"
                value={'' + userId}
                style={styles.fontSize}
                onChangeText={
                  (userId) => setUserId(userId)
                }
                maxLength={10}
                 keyboardType="numeric"
              />
              <Mytextinput
                value={userEmail}
                placeholder="E-mail"
                style={styles.fontSize}
                onChangeText={
                  (userEmail) => setUserEmail(userEmail)
                }
              />
              <Mybutton
                title="Atualizar informa????es"
                customClick={updateUser}
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
    },

    fontSize: {
      fontSize: 20,
      padding: 10,
    },

    flex: {
     flex: 1,
    },

    input: {
     flex: 1,
     justifyContent: 'space-between',
    },
  });

export default UserUpdate;