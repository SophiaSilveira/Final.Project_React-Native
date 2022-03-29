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
        <Text style={styles.title}>Id Sugestão: {item.s_id}</Text>
        <Text style={styles.title}>Nome: {item.s_name}</Text>
        <Text style={styles.title}>Tipo: {item.s_type}</Text>
        <Text style={styles.title}>Sabor: {item.s_flavor}</Text>
        <Text style={styles.title}>Ingredientes:</Text>
        <Text style={styles.text}>{item.s_ingredients}</Text>
        <Text style={styles.title}>Modo de Preparo:</Text>
        <Text style={styles.text}>{item.s_cook}</Text>
        <Text style={styles.tips}>{item.s_tips}</Text>
        <Text style={styles.title}>Id do usuário que enviou a sugestão: {item.user_id}</Text>
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
      backgroundColor: "#ff9939",
    },
    list: {
      width: '90%',
      backgroundColor: "#fff",
      marginLeft: 20,
      marginTop: 20,
      marginBottom: 20,
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: {width: 4, height: 4},
      shadowOpacity: 1,
      ShadowRadius: 6,
      elevation: 9,
    },

    title:{
      flex: 1,
      padding: 8,
      fontSize: 17,
      color: '#585858',
      lineHeight: 25,
      marginLeft: 6,
      fontWeight: 'bold',
    },

    text: {
      flex: 1,
      textAlign: 'center',
      padding: 10,
      fontSize: 16,
      lineHeight: 25,
      color: '#585858',
    },

    tips:{
     fontSize: 17,
     flex: 1,
     textAlign: 'center',
     padding: 10,
     lineHeight: 25,
     color: '#585858',
    },
});

export default SuggestionsScreen;