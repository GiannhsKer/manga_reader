import React, {useState, useEffect} from 'react';
import { ActivityIndicator, StyleSheet, ScrollView, Image, Text } from 'react-native';

const Display = ({route}) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();
  
    const fetchData = async (url) => {
      const response = await fetch(url);
      return response.json();
    };
  
    const getMangas = () => {
      try {
        fetchData(`http://localhost:5000/${route.params.title}/${route.params.chapter}`).then((data) => {
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
        <ScrollView style={styles.container}>
            {isLoading ? <ActivityIndicator/> : (
                data.map(page=>(
                    <Image style={styles.page} source={{uri: page}}></Image>
                ))
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'black',
    },
    page:{
        marginTop: 40,
        height:500,
        resizeMode:'contain',
    }
});

export default Display;