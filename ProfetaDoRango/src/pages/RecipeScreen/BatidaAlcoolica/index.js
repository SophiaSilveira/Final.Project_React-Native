import React, {useState, useEffect} from 'react';
import {FlatList,
        Text,
        View,
        SafeAreaView,
        StyleSheet,
        TouchableOpacity,
        Image} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import Icon from 'react-native-vector-icons/AntDesign';

const db = openDatabase({name: 'app_db.db', createFromLocation: 2});

const BatidaAlcoolica = ({navigation}) => {
  let [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM tbl_recipe where r_id = 1',
      [],
      (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        setFlatListItems(temp);
      });
    });
  }, []);


  let listItemView = (item) => {
    return (
      <View
        key={item.r_id}
        style={styles.list}>
        <Image source={{uri: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-batida-de-abacaxi-1.jpg'}}
        style={styles.img}/>
        <View style={styles.box}>
          <View style={styles.margin}>
            <Text style={styles.titleF}>Receita:</Text>
            <Text style={styles.title}>Nome: {item.r_name}</Text>
            <Text style={styles.title}>Tipo: {item.r_type}</Text>
            <Text style={styles.title}>Sabor: {item.r_flavor}</Text>
            <Text style={styles.title}>Ingredientes:</Text>
            <Text style={styles.title}>{item.r_ingredients}</Text>
            <Text style={styles.title}>Modo de Preparo:</Text>
            <Text style={styles.text}>{item.r_cook}</Text>
            <Text style={styles.text}>{item.r_tips}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.home}
          onPress = { () =>
            navigation.navigate('Home')}>
            <Icon name='home' size={50} color='#fff'/>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <FlatList
            data={flatListItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => listItemView(item)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    list: {
     backgroundColor: '#ff9939',
     alignItems: 'center',
    },

    img: {
      marginTop: 10,
      height: 250,
      width: '95%',
      borderRadius: 20,
    },

    box: {
      marginTop: 10,
      borderRadius: 20,
      width: '95%',
      height: 1020,
      backgroundColor: '#efefef',
      shadowColor: '#000',
      shadowOffset: {width: -2, height: 3},
      shadowOpacity: 0.8,
      ShadowRadius: 6,
      elevation: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },

    titleF: {
     fontSize: 22,
     color: '#ffaa5a',
     fontWeight: 'bold',
    },

    title: {
      padding: 10,
      fontSize: 18,
      color: '#585858',
      width: '100%',
    },

    text: {
      fontSize: 18,
      padding: 10,
      color: '#585858',
      fontWeight: 'normal',
    },

    home: {
      borderWidth:1,
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:100,
      height:100,
      backgroundColor:'#111',
      borderRadius:50,
      marginTop: 10,
      marginBottom: 10,
    },

    margin: {
      width: '80%',
      height: '98%',
    },
});

export default BatidaAlcoolica;