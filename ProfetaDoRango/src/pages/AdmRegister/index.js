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

const  AdmRegister = ({navigation}) => {
  let [admName, setAdmName] = useState('');
  let [admPassword, setAdmPassword] = useState('');
  let [admEmail, setAdmEmail] = useState('');

  let register_adm = () => {
    console.log(admName, admPassword, admEmail);

    if (!admName) {
      alert('Insira Nome');
      return;
    }
    if (!admPassword) {
      alert('Insira Senha');
      return;
    }
    if (!admEmail) {
      alert('Insira G-mail');
      return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO tbl_adm (adm_name, adm_password, ad_email) VALUES (?,?,?)',
        [admName, admPassword, admEmail],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sucesso!',
              'Você registrou um Adm.',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('AdmHome'),
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
      <View style={styles.container}>
        <View style={styles.logo}></View>
        <View style={{flex: 1}}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{flex: 1, justifyContent: 'space-between'}}>
              <Mytextinput
                placeholder="Digite seu Nome Completo"
                onChangeText={
                  (admName) => setAdmName(admName)
                }
                style={styles.padding}
              />
              <Mytextinput
                placeholder="Digite sua Senha"
                onChangeText={
                  (admPassword) => setAdmPassword(admPassword)
                }
                maxLength={10}
                style={styles.padding}
              />
              <Mytextinput
                placeholder="Digite seu E-mail"
                style={styles.padding}
                onChangeText={
                  (admEmail) => setAdmEmail(admEmail)
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
      alignItems: 'center',
      backgroundColor: '#ff9939',
    },

    logo: {
      backgroundColor: '#fff',
      width: 150,
      height: 150,
      borderRadius: 100,
      marginTop: 40,
      marginBottom: 20,
    },

    padding: {
      padding: 10,
      fontSize: 20,
    },
 });

export default AdmRegister;