import React, {useState, useEffect} from 'react';
import {FlatList, Text, View, SafeAreaView, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import Icon from 'react-native-vector-icons/AntDesign';

const db = openDatabase({name: 'app_db.db', createFromLocation: 1});

const Pizza = () => {
  let [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM tbl_recipe where r_id = 2',
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
        <Image source={{uri: 'https://http2.mlstatic.com/D_NQ_NP_650614-MLB26232401836_102017-O.jpg'}}
         style={styles.img}/>
        <View style={styles.box}>
        <Text style={styles.title}>Receita</Text>
        <Text style={styles.title}>Nome: {item.r_name}</Text>
        <Text style={styles.title}>Tipo: {item.r_type}</Text>
        <Text style={styles.title}>Sabor: {item.r_flavor}</Text>
        <Text style={styles.title}>Igredientes:</Text>
        <Text style={styles.title}>{item.r_ingredients}</Text>
        <Text style={styles.title}>Modo de Preparo:</Text>
        <Text style={styles.text}>{item.r_cook}</Text>
        <Text style={styles.text}>{item.r_tips}</Text>
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
     backgroundColor: "#ff9939",
     alignItems: 'center'
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
      alignItems: 'center',
      backgroundColor: '#efefef',
      shadowColor: '#000',
      shadowOffset: {width: -2, height: 3},
      shadowOpacity: 0.8,
      ShadowRadius: 6,
      elevation: 10,
    },

    title: {
      padding: 8,
      fontSize: 16,
      color: '#585858',
      width: '100%',
      textAlign: 'center',
    },

    text: {
      fontSize: 16,
      textAlign: 'center',
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
});

export default Pizza;