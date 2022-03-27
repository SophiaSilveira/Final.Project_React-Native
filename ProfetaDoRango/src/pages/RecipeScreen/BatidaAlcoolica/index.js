import React, {useState, useEffect} from 'react';
import {FlatList, Text, View, SafeAreaView, StyleSheet} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';


const db = openDatabase({name: 'app_db.db', createFromLocation: 1});

const BatidaAlcoolica = () => {
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
        <Text>Receita</Text>
        <Text>Nome: {item.r_name}</Text>
        <Text>Tipo: {item.r_type}</Text>
        <Text>Sabor: {item.r_flavor}</Text>
        <Text>Igredientes:</Text>
        <Text>{item.r_ingredients}</Text>
        <Text>Modo de Preparo:</Text>
        <Text>{item.r_cook}</Text>
        <Text>{item.r_tips}</Text>
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
     backgroundColor: "pink",
    },
});

export default BatidaAlcoolica;