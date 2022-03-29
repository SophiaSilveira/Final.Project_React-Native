import React, {useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
  StyleSheet,
  Image
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
      <View style={{flex: 1, backgroundColor: '#ff9939', alignItems: 'center'}}>
        <View><Image source={require('C:/Users/leona/Documents/GitHub/Final.Project_React-Native/ProfetaDoRango/src/Assests/img/Logo.png')} style={styles.img}/></View>
        <View style={{flex: 1}}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{flex: 1, justifyContent: 'space-between'}}>
              <Mytextinput
                placeholder="Digite seu Nome Completo"
                style={styles.padding}
                onChangeText={
                  (userName) => setUserName(userName)
                }
              />
              <Mytextinput
                placeholder="Digite sua Senha"
                style={styles.padding}
                onChangeText={
                  (userPassword) => setUserPassword(userPassword)
                }
              />
              <Mytextinput
                placeholder="Digite seu E-mail"
                style={styles.padding}
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

    img: {
      width: 200,
      height: 340,
      marginBottom: -100,
    },

    padding: {
      padding: 10,
      fontSize: 20,
    },
 });

export default UserRegister;