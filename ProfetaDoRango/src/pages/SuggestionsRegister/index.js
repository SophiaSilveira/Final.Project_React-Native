import React, {useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Mytextinput from '../../components/Mytextinput';
import Mybutton from './../../components/Mybutton';
import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase({name: 'app_db.db', createFromLocation: 1});

const  SuggestionsRegister = ({navigation}) => {
  let [sName, setSName] = useState('');
  let [sType, setSType] = useState('');
  let [sFlavor, setSFlavor] = useState('');
  let [sIngredients, setSIngredients] = useState('');
  let [sCook, setSCook] = useState('');
  let [sTips, setSTips] = useState('');
  let [userId, setUserId] = useState('');

  let register_suggestions = () => {
    console.log(sName, sType, sFlavor, sIngredients, sCook, sTips, userId);

    if (!sName) {
      alert('Insira o Nome');
      return;
    }
    if (!sType) {
      alert('Insira o Tipo');
      return;
    }
    if (!sFlavor) {
      alert('Insira o Sabor');
      return;
    }
    if (!sIngredients) {
      alert('Insira os ingredientes');
      return;
    }
    if (!sCook) {
      alert('Insira o modo de preparo');
      return;
    }
    if (!sTips) {
      alert('Insira as dicas');
      return;
    }
    if (!userId) {
      alert('Insira o Id do usuário');
      return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO tbl_suggestions (s_name, s_type, s_flavor, s_ingredients, s_cook, s_tips, user_id) VALUES (?,?,?,?,?,?,?)',
        [sName, sType, sFlavor, sIngredients, sCook, sTips, userId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sucesso!',
              'Você registrou uma receita.',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('Home'),
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
                placeholder="Digite o nome da receita: "
                onChangeText={
                  (sName) => setSName(sName)
                }
                style={styles.padding}
              />
              <Mytextinput
                placeholder="Digite o tipo da receita"
                onChangeText={
                  (sType) => setSType(sType)
                }
                maxLength={10}
                style={styles.padding}
              />
              <Mytextinput
                placeholder="Digite o sabor da receita"
                style={styles.padding}
                onChangeText={
                  (sFlavor) => setSFlavor(sFlavor)
                }
              />
              <Mytextinput
                placeholder="Digite os igredientes da receita "
                style={styles.padding}
                onChangeText={
                  (sIngredients) => setSIngredients(sIngredients)
                }
                maxLength={225}
                numberOfLines={5}
                multiline={true}
              />
              <Mytextinput
                placeholder="Digite o modo de preparo da receita "
                style={styles.padding}
                onChangeText={
                  (sCook) => setSCook(sCook)
                }
                maxLength={225}
                numberOfLines={5}
                multiline={true}
              />
              <Mytextinput
                placeholder="Digite as dicas para a receita "
                style={styles.padding}
                onChangeText={
                  (sTips) => setSTips(sTips)
                }
               maxLength={225}
               numberOfLines={5}
               multiline={true}
              />
              <Mytextinput
                placeholder="Digite seu id"
                style={styles.padding}
                onChangeText={
                  (userId) => setUserId(userId)
                }
              />
              <TouchableOpacity
                onPress = { () =>
                  navigation.navigate('UserUpdate')}>
                    <Text>Clique aqui para saber seu Id</Text>
              </TouchableOpacity>
              <Mybutton title="Registrar" customClick={register_suggestions} />
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

export default SuggestionsRegister;