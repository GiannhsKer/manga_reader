import React from 'react';
import { Text, StyleSheet, Pressable, View, FlatList } from 'react-native';

import data from '../Data/Mangas.json'

const Home = ({ navigation }) => {

    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Manga Reader</Text>
                <View style = {styles.list}>
                    <FlatList
                        data={Object.keys(data)}
                        renderItem={({ item }) => (
                            <Pressable onPress={() => navigation.navigate('Chapters',item
                            )}>
                                <Text style={styles.item}>{item}</Text>
                            </Pressable>
                        )}
                    />
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: 'black',
        alignContent: 'center',
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 35,
        marginTop: 50,
    },
    list: {
      marginTop: 80,
      alignItems: 'center'
    },
    item: {
        alignSelf: 'center',
        backgroundColor: 'lightblue',
        padding: 15,
        marginTop: 20,
        fontSize: 20,
    }
});

export default Home;