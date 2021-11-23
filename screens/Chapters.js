import React from 'react';
import { Text, StyleSheet, View, Pressable, ScrollView } from 'react-native';
import uuid from 'react-native-uuid';


const Chapters = ({navigation, route}) => {

    var chapters_boxes = []
    
    for(var i = 0; i <= route.params.chapters; i++){
        chapters_boxes.push(i)
    }

    return (
        <ScrollView style={styles.container}>
            <Text style = {styles.title}>manga_reader</Text>
            <Text style = {styles.manga_title}> {route.params.title}</Text>
            <View style={styles.itemslist}>
                {chapters_boxes.map(chapter =>(
                    <Pressable key = {uuid.v4()} onPress = {() => navigation.navigate('Display',{ 'title' : route.params.title, 'chapter' : chapter })}>
                        <Text style={styles.volume}>{chapter}</Text>
                    </Pressable>
                ))}
            </View>
        </ScrollView>
    );
}

// alignText not working on android
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'black',
    },
    title: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 35,
        marginTop: 50,
    },
    manga_title:{
        alignSelf: 'center',
        color: 'red',
        fontSize: 20,
        marginTop: 20,
    },
    itemslist: {
        marginTop:50,
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        flexWrap:"wrap-reverse",
    },
    volume: {
        width:70,
        marginTop: 20,
        fontSize: 20,
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 10

    }
});

export default Chapters;