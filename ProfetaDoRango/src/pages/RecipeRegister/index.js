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
  Image
} from 'react-native';
import Mytextinput from '../../components/Mytextinput';
import Mybutton from './../../components/Mybutton';
import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase({name: 'app_db.db', createFromLocation: 1});

const RecipeRegister = ({navigation}) => {
  let [rName, setRName] = useState('');
  let [rType, setRType] = useState('');
  let [rFlavor, setRFlavor] = useState('');
  let [rIngredients, setRIngredients] = useState('');
  let [rCook, setRCook] = useState('');
  let [rTips, setRTips] = useState('');
  let [admId, setAdmId] = useState('');

  let register_recipe = () => {
    console.log(rName, rType, rFlavor, rIngredients, rCook, rTips, admId);

    if (!rName) {
      alert('Insira o Nome');
      return;
    }
    if (!rType) {
      alert('Insira o Tipo');
      return;
    }
    if (!rFlavor) {
      alert('Insira o Sabor');
      return;
    }
    if (!rIngredients) {
      alert('Insira os ingredientes');
      return;
    }
    if (!rCook) {
      alert('Insira o modo de preparo');
      return;
    }
    if (!rTips) {
      alert('Insira as dicas');
      return;
    }
    if (!admId) {
      alert('Insira o Id');
      return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO tbl_recipe (r_name, r_type, r_flavor, r_ingredients, r_cook, r_tips, adm_id) VALUES (?,?,?,?,?,?,?)',
        [rName, rType, rFlavor, rIngredients, rCook, rTips, admId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sucesso!',
              'Você registrou uma receita.',
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
        <View style={{flex: 1}}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{flex: 1, justifyContent: 'space-between'}}>
              <Mytextinput
                placeholder="Digite o nome da receita: "
                onChangeText={
                  (rName) => setRName(rName)
                }
                style={styles.padding}
              />
              <Mytextinput
                placeholder="Digite o tipo da receita"
                onChangeText={
                  (rType) => setRType(rType)
                }
                maxLength={10}
                style={styles.padding}
              />
              <Mytextinput
                placeholder="Digite o sabor da receita"
                style={styles.padding}
                onChangeText={
                  (rFlavor) => setRFlavor(rFlavor)
                }
              />
              <Mytextinput
                placeholder="Digite os igredientes da receita "
                style={styles.padding}
                onChangeText={
                  (rIngredients) => setRIngredients(rIngredients)
                }
                maxLength={225}
                numberOfLines={5}
                multiline={true}
              />
              <Mytextinput
                placeholder="Digite o modo de preparo da receita "
                style={styles.padding}
                onChangeText={
                  (rCook) => setRCook(rCook)
                }
                maxLength={225}
                numberOfLines={5}
                multiline={true}
              />
              <Mytextinput
                placeholder="Digite as dicas para a receita "
                style={styles.padding}
                onChangeText={
                  (rTips) => setRTips(rTips)
                }
               maxLength={225}
               numberOfLines={5}
               multiline={true}
              />
              <Mytextinput
                placeholder="Digite seu id"
                style={styles.padding}
                onChangeText={
                  (admId) => setAdmId(admId)
                }
              />
              <TouchableOpacity
                onPress = { () =>
                  navigation.navigate('AdmSeeAll')}>
                    <Text style={styles.text}>Clique aqui para saber seu Id</Text>
              </TouchableOpacity>
              <Mybutton title="Registrar" customClick={register_recipe} />
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

    img: {
      width: 200,
      height: 240,
    },

    padding: {
      padding: 10,
      fontSize: 20,
    },

    text: {
      color: '#fff',
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10,
      marginBottom: -150,
    },

 });

export default RecipeRegister;