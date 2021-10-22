import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';

// local json για testing
import data from '../Data/Mangas.json'

const Chapters = ({route}) => {

    const vols = Object.keys(data[route.params]) 

    return (
        <View style={styles.container}>
            <Text style = {styles.title}>manga_reader</Text>
            <Text style = {styles.manga_title}> {route.params}</Text>
            <View style={styles.itemslist}>
                { vols.map(vol => (
                    <TouchableOpacity>
                        <Text style = {styles.box}>{ vol }</Text>
                    </TouchableOpacity>
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