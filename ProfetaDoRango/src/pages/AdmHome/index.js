import React from 'react';
import {View,
        Text,
        StyleSheet,
        TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function AdmHome({navigation}) {
  return (
    <View style = {styles.container}>
    <View style={styles.appBar}>
        <Text style={styles.title}>Configurações do Administrador</Text>
    </View>
      <TouchableOpacity
        style={styles.configAdm}
        onPress = { () =>
          navigation.navigate('AdmRegister')}>
           <Text style={styles.text}>Registrar um Administrador</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.configAdmTwo}
        onPress = { () =>
          navigation.navigate('AdmSeeAll')}>
        <Text style={styles.text}>Visualizar Administradores Registrados</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.configAdmTre}
        onPress = { () =>
          navigation.navigate('RecipeRegister')}>
        <Text style={styles.text}>Cadastrar Nova Receita</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.admConfig}
        onPress = { () =>
          navigation.navigate('SuggestionsScreen')}>
        <Text style={styles.text}>Visualizar Sugestões</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.homeAdm}
        onPress = { () =>
          navigation.navigate('Home')}>
        <Icon name='home' size={50} color='#fff'/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffaa5a',
    },

    appBar:{
      backgroundColor: '#ff9939',
      marginBottom: 478,
      height: 90,
      width: '100%',
      alignItems: 'center',
      shadowColor: '#ffdcbb',
      shadowOffset: {width: 1, height: 5},
      shadowOpacity: 1,
      ShadowRadius: 6,
      elevation: 10
    },

    title: {
      color: '#fff',
      fontSize: 20,
      marginTop: 38,
    },

    configAdm: {
      marginTop: -450,
      marginBottom: 30,
      width: '90%',
      borderWidth: 3,
      borderRadius: 10,
      borderColor: '#ff9939',
      padding: 30,
      backgroundColor: '#fff'
    },

    configAdmTwo: {
      borderWidth: 3,
      borderRadius: 10,
      borderColor: '#ff9939',
      padding: 20,
      width: '90%',
      marginTop: -10,
      borderWidth: 2,
      backgroundColor: '#fff',
      marginBottom: 30,
    },

    configAdmTre: {
      borderWidth: 3,
      borderRadius: 10,
      borderColor: '#ff9939',
      padding: 30,
      width: '90%',
      marginTop: -10,
      backgroundColor: '#fff',
      marginBottom: 30,
    },

    admConfig: {
      borderWidth: 3,
      borderRadius: 10,
      borderColor: '#ff9939',
      padding: 30,
      width: '90%',
      marginTop: -10,
      backgroundColor: '#fff',
    },

    homeAdm: {
      borderWidth:1,
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:100,
      height:100,
      backgroundColor:'#111',
      borderRadius:50,
      marginTop: 15,
      marginBottom: 25,
    },

    text: {
      fontSize: 23,
    },
  });

export default AdmHome;