import React, { useState } from 'react';
// import { v4 as uuid_v4 } from 'uuid';
import { Text, StyleSheet, Button, View, FlatList, TouchableOpacity } from 'react-native';
import Chapters from './screens/Chapters.js'
import Sandbox from './screens/sandbox.js'
// import data from './Data/Mangas.json'

const App = () => {

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
            {/* <Text style = {styles.text}>Manga Reader</Text> */}
              {/* <View style = {styles.list}> */}
                    {/* <FlatList
                        data={Object.keys(data)}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        extractData={selectedId}
                  /> */}
              {/* </View> */}
              <Sandbox />
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        height: '100%',
        width: '100%',
        alignContent: 'center',
    },
    text: {
        textAlign: 'center',
        color: 'red',
        fontSize: 35,
        marginTop: 50,
    },
    list: {
      marginTop: 80,
      alignItems: 'center'
    },
    item: {
        alignSelf: 'center',
        backgroundColor: 'darkslateblue',
        padding: 15,
        marginTop: 20,
    }
});

export default App;