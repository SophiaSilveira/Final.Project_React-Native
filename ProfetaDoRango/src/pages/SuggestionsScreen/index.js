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
      <View style={{height: 15, width: '100%', backgroundColor: '#ff9939'}} />
    );
  };

  let listItemView = (item) => {
    return (
      <View
        key={item.s_id}
        style={styles.list}>
        <Text style={styles.text}>Id Sugestão: {item.s_id}</Text>
        <Text style={styles.text}>Nome: {item.s_name}</Text>
        <Text style={styles.text}>Tipo: {item.s_type}</Text>
        <Text style={styles.text}>Sabor: {item.s_flavor}</Text>
        <Text style={styles.text}>Ingredientes:</Text>
        <Text style={styles.text}>{item.s_ingredients}</Text>
        <Text style={styles.text}>Modo de Preparo:</Text>
        <Text style={styles.text}>{item.s_cook}</Text>
        <Text style={styles.text}>{item.s_tips}</Text>
        <Text style={styles.text}>Id usuário que enviou a sugestão: {item.user_id}</Text>
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
      width: '100%',
      backgroundColor: "#ff9939",
    },
    list: {
      backgroundColor: "#fff",
    },

    text: {
      flex: 1,
      textAlign: 'center',
      padding: 10,
      fontSize: 16,
      lineHeight: 20,
      color: '#000'
    },
});

export default SuggestionsScreen;