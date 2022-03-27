import React, {useState, useEffect} from 'react';
import {FlatList, Text, View, SafeAreaView, StyleSheet} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase({name: 'app_db.db', createFromLocation: 1});

const SuggestionsScreen = () => {
  let [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM tbl_suggestions',
      [],
      (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        setFlatListItems(temp);
      });
    });
  }, []);

  let listViewItemSeparator = () => {
    return (
      <View style={{height: 10, width: '100%', backgroundColor: '#808080'}} />
    );
  };

  let listItemView = (item) => {
    return (
      <View
        key={item.s_id}
        style={styles.list}>
        <Text>Id Sugestão: {item.s_id}</Text>
        <Text>Nome: {item.s_name}</Text>
        <Text>Tipo: {item.s_type}</Text>
        <Text>Sabor: {item.s_flavor}</Text>
        <Text>Igredientes:</Text>
        <Text>{item.s_ingredients}</Text>
        <Text>Modo de Preparo:</Text>
        <Text>{item.s_cook}</Text>
        <Text>{item.s_tips}</Text>
        <Text>Id usuário que enviou a sugestão: {item.user_id}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View>
          <FlatList
            data={flatListItems}
            ItemSeparatorComponent={listViewItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => listItemView(item)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    list: {
     backgroundColor: "pink",
    },
});

export default SuggestionsScreen;