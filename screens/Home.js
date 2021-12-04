import React,{ useEffect, useState } from 'react';
import { ActivityIndicator, Text, StyleSheet, Pressable, View, ScrollView } from 'react-native';
import uuid from 'react-native-uuid';

const Home = ({ navigation }) => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();

  const fetchData = async (url) => {
    const response = await fetch(url);
    return response.json();
  };

  const getMangas = () => {
    try {
      fetchData("https://mangareader3.herokuapp.com").then((data) => {
        setData(data);
        setLoading(false);
      });
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    getMangas();
  }, []);

  return (
    <ScrollView style = {styles.container}>
      <Text style = {styles.title}>manga_reader</Text>
      <View style={styles.itemslist}>
        {isLoading ? <ActivityIndicator/> : (
          data.map( manga => (
            <Pressable key = {uuid.v4()} style = {styles.manga} onPress={() => navigation.navigate('Chapters',{ 'manga' : manga } )}>
              <Text style = {{fontSize:20, alignSelf:'flex-start'}} >{manga}</Text>
            </Pressable>
          ))
        )}
      </View>
    </ScrollView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: 'black',
    alignContent: 'center',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 35,
    marginTop: 50,
  },
  itemslist: {
    marginTop:50,
  },
  manga : {
    height:80,
    width:200,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    padding: 10,
    marginTop: 20,
    marginHorizontal:30,
    borderRadius: 10
  }
});

export default Home;