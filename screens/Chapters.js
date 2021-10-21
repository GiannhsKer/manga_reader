import React, { useState } from 'react';
// import { v4 as uuid_v4 } from 'uuid';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';

import data from '/home/yanes/Documents/manga_reader/Data/Mangas.json'

const Chapters = ({route}) => {

    const vols = Object.keys(data[route.params]) 

    return (
        <View style={styles.container}>
            <Text style = {styles.title}>Manga Reader</Text>
            <Text style = {styles.manga_title}> {route.params}</Text>
            <View style={styles.itemslist}>
                { vols.map(vol => (
                    <Text style = {styles.box}>{ vol }</Text>
                )) }
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        height:"100",
        width: "100",
        backgroundColor: 'black',
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 35,
        marginTop: 50,
    },
    manga_title:{
        textAlign: 'flex-start',
        marginLeft: 30,
        color: 'red',
        fontSize: 35,
        marginTop: 50,
    },
    itemslist: {
        // marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap:"wrap",
        padding: 10,
    },
    box: {
      marginTop: 20,
      fontSize: 20,
      backgroundColor: 'lightblue',
      padding: 10,
    }
});

export default Chapters;