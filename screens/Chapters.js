import React, { useState } from 'react';
// import { v4 as uuid_v4 } from 'uuid';
import { Text, StyleSheet, Button, View, FlatList, TouchableOpacity } from 'react-native';

import data from '/home/yanes/Documents/manga_reader/Data/Mangas.json'

const Chapters = () => {

    const [selectedId, setSelectedId] = useState(null);

    
    const Item = ({ item, onPress, style }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
            <Text style={{ fontSize: 20 }}>{item}</Text>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "firebrick" : "darkslateblue";
        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                style={{ backgroundColor }}
            />
        );
    };

    return (
        
        <View style = {styles.container}>
            <Text style = {styles.text}>Manga Reader</Text>
              <View style = {{  justifyContent: 'space-around',alignItems: 'flex-start'}}>
                    <FlatList
                        data={Object.keys(data['One Piece'])}
                        renderItem={renderItem}
                        keyExtractor={item => item}
                        extractData={selectedId}
                        style = {styles.list}
                  />
              </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
    },
    text: {
        flex:1,
        textAlign: 'center',
        color: 'red',
        fontSize: 35,
        marginTop: 50,
    },
    list: {
        flex:2,
      marginTop: 80,
      flexDirection: 'row',
      flexWrap:"wrap",
    //   padding: 10,
    },
    item: {
        backgroundColor: 'darkslateblue',
        // padding: 15,
        marginTop: 20,
    }
});

export default Chapters;