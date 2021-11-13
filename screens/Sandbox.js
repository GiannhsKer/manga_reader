import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

const Sandbox = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();

  const fetchData = async (url) => {
    const response = await fetch(url);
    return response.json();
  };

  const getMangas = () => {
    try {
      fetchData("http://localhost:5000/").then((data) => {
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
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <Text>{Object.keys(data)},{Object.values(data)}</Text>
      )}
    </View>
  );
};

export default Sandbox