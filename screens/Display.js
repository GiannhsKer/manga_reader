import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Image, FlatList, View } from 'react-native';

const Display = ({route}) => {

    const pages = route.params

    return (
        <ScrollView style={styles.container}>
            {pages.map(page=>(
                <Image style={styles.page} source={{uri: page}}></Image>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'black',
    },
    page:{
        flex:1,
        height:500,
        resizeMode: 'contain',
    }
});

export default Display;