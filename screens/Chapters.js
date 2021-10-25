import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Pressable } from 'react-native';

// local json for testing
import data from '../Data/Mangas.json'

const Chapters = ({navigation, route}) => {

    const vols = Object.keys(data[route.params]) 

    return (
        <View style={styles.container}>
            <Text style = {styles.title}>manga_reader</Text>
            <Text style = {styles.manga_title}> {route.params}</Text>
            <View style={styles.itemslist}>
                { vols.map(vol => (
                    <TouchableOpacity>
                        <Pressable onPress={() => navigation.navigate('Display',data[route.params][vol])}>
                            <Text style = {styles.item}>{ vol }</Text>
                        </Pressable>
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
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        flexWrap:"wrap-reverse",
    },
    item: {
      marginTop: 20,
      fontSize: 20,
      backgroundColor: 'lightblue',
      padding: 10,
    }
});

export default Chapters;