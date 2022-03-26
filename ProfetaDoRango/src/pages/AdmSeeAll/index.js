import React, {useState, useEffect} from 'react';
import {FlatList, Text, View, SafeAreaView, StyleSheet } from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase({name: 'app_db.db', createFromLocation: 1});

const AdmSeeAll = () => {
  let [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM tbl_adm',
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
      <View style={{height: 10, width: '100%', backgroundColor: '#000'}} />
    );
  };

  let listItemView = (item) => {
    return (
      <View
        key={item.adm_id}
        style={styles.list}>
        <Text>Id: {item.adm_id}</Text>
        <Text>Name: {item.adm_name}</Text>
        <Text>Senha: {item.adm_password}</Text>
        <Text>e-mail: {item.ad_email}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.container}>
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
    },
    list: {
     flex:1,
    },
});

export default AdmSeeAll;