import React from 'react';
import { Text, StyleSheet, Button, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

const Display = ({navigation}) => {

    return (
        
        <View style={styles.container}>
                <FlatList
                    data={mangas}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    extractData={selectedId}
                />
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
    item: {
        alignSelf: 'center',
        backgroundColor: 'darkslateblue',
        padding: 20,
        marginTop: "40%",
    },
    itemt: {
        color: 'white',
        fontSize: 20,
    }
});

export default Home;