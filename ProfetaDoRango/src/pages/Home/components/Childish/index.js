import React from 'react';
import {View,
        Text,
        StyleSheet,
        TouchableOpacity,
        Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Childish({navigation}) {
  return (
    <View style = {styles.container}>
      <View style={styles.appBar}>
            <Text style={styles.title}>RECEITA</Text>
      </View>
     <View style={styles.options}>
        <TouchableOpacity
          style={styles.box}
          onPress = { () =>
            navigation.navigate('Childish')}>
             <Text>INFANTIL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress = { () =>
            navigation.navigate('Drinks')}>
              <Text>BEBIDAS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress = { () =>
            navigation.navigate('Snacks')}>
              <Text>LANCHES</Text>
        </TouchableOpacity>
     </View>
     <View style={styles.revenue}>
        <View style={styles.image}>
          <View style={styles.imageBox}>
              <Image
                  style={styles.img}
                  source={{uri: 'https://mesaesabor.com.br/wp-content/uploads/2021/07/56-Receita-de-Panqueca-Colorida-com-Molho-Branco-Vegana.png'}}
              />
          </View>
          <TouchableOpacity
              onPress = { () =>
              navigation.navigate('Panquecas')}>
              <Text style={styles.text}>Receita de Panquecas coloridas</Text>
          </TouchableOpacity>
        </View>
     </View>
     <View style={styles.menu}>
        <TouchableOpacity
          onPress = { () =>
            navigation.navigate('UserUpdate')}>
            <Icon name='update' size={45} color='#fff'/>
        </TouchableOpacity>
        <TouchableOpacity
           onPress = { () =>
           navigation.navigate('SuggestionsRegister')}>
           <Icon name='message' size={45} color='#fff'/>
        </TouchableOpacity>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      backgroundColor: '#ffb875',
    },

    appBar: {
      height: 90,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: '#ff9939',
    },

    title: {
      color: '#fff',
      fontSize: 30,
    },

    options: {
      backgroundColor: '#efefef',
      flexDirection: 'row',
      width: '100%',
      height: 40,
      justifyContent: 'space-between',
    },

    flexOne: {
      marginLeft: 20,
      marginRight: 20,
    },

    box: {
      height: '100%',
      width: '33.3%',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1.5,
      borderColor: '#bebebe',
      borderBottomWidth: 2,
    },

    revenue: {
      width: '100%',
      height: 500,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },

    image: {
      width: '95%',
      height: 150,
      backgroundColor: '#efefef',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {width: -2, height: 3},
      shadowOpacity: 0.8,
      ShadowRadius: 6,
      elevation: 10,
      borderWidth: 1,
      borderColor: '#c1c1c1',
      marginTop: '3%',
    },

    imageBox: {
      backgroundColor: '#fff',
      width: 150,
      height: 150,
      marginLeft: 0,
      marginRight: 30,
      borderRadius: 10,
    },

    img: {
      width: '100%',
      height:'100%',
      borderBottomLeftRadius: 10,
      borderTopLeftRadius: 10,
    },

    text: {
      marginLeft: -15,
      fontSize: 15,
    },

    menu: {
      flexDirection: 'row',
      width: '100%',
      height: 55,
      backgroundColor: '#111',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
    },
  });

export default Childish;