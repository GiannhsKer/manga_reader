import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Display = () => {

    const pages = "https://i.ibb.co/J7mMmbR/one-piece-1003-1.jpg"

    return (
        
        <View style={styles.container}>
            <Image
                style={styles.page}
                source={{uri:pages}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'black',
    },
    page:{
        marginTop: 100,
        marginBottom: 100,
        flex:1
    }
});

export default Display;