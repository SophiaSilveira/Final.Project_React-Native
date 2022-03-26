import React, {useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native';
import Mytextinput from '../../components/Mytextinput';
import Mybutton from './../../components/Mybutton';
import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase({name: 'app_db.db', createFromLocation: 1});

const  UserRegister = ({navigation}) => {
  let [userName, setUserName] = useState('');
  let [userPassword, setUserPassword] = useState('');
  let [userEmail, setUserEmail] = useState('');

  let register_adm = () => {
    console.log(userName, userPassword, userEmail);

    if (!userName) {
      alert('Insira seu Nome');
      return;
    }
    if (!userPassword) {
      alert('Insira sua Senha');
      return;
    }
    if (!userEmail) {
      alert('Insira seu G-mail');
      return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO tbl_user (user_name, user_password, user_email) VALUES (?,?,?)',
        [userName, userPassword, userEmail],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sucesso!',
              'Você se registrou.',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('UserOption'),
                },
              ],
              {cancelable: false},
            );
          } else alert('Registro falhou');
        },
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{flex: 1, justifyContent: 'space-between'}}>
              <Mytextinput
                placeholder="Nome"
                onChangeText={
                  (userName) => setUserName(userName)
                }
                style={{padding: 10}}
              />
              <Mytextinput
                placeholder="Senha"
                onChangeText={
                  (userPassword) => setUserPassword(userPassword)
                }
                maxLength={10}
                style={{padding: 10}}
              />
              <Mytextinput
                placeholder="G-mail"
                onChangeText={
                  (userEmail) => setUserEmail(userEmail)
                }
              />
              <Mybutton title="Registrar" customClick={register_adm} />
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
    },
 });

export default UserRegister;