import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { uuid } from 'uuidv4';
import { Text, StyleSheet, Button, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// import { scrap_it } from '../scrapper'
// import { onepiece } from '../Data_Retriever/Onepiece'

const Home = () => {
    //searchbar
    // state = {
    //     search: '',
    // };
    // updateSearch = (search) => {
    //     this.setState({ search });
    //   };
    
    // const { search } = this.state;
    // change color on click
    const [selectedId, setSelectedId] = useState(null);

    //Content list
    const array = ["one piece ", "beruseruku"]
    const mangas = [
        { id: uuid(), title: array[0], volumes: array[0] },
        { id: uuid(), title: array[1], volumes: array[1] }
    ]

    const Item = ({ item, onPress, style }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
            <Text style={{ fontSize: 20 }}>{item.title}</Text>
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
        
        <View style={styles.container}>
            <Text style={styles.text}>Manga Reader</Text>
            {/* <View > 
                /* <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                />
            </View> */}
            {/* <View style={{ marginVertical: 25 }}>
                <Button
                    title="search"
                    onPress={() => console.log(10)}
                />
            </View> */}
            <NavigationContainer>
                <SafeAreaView >
                    <FlatList
                        data={mangas}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        extractData={selectedId}
                    />
                </SafeAreaView>
            </NavigationContainer>
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
















