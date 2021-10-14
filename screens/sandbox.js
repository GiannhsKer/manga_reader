import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import data from '/home/yanes/Documents/manga_reader/Data/Mangas.json'

const Sandbox = () => {

  const vols = Object.keys(data['One Piece']) 

  return (
  <View style={styles.container}>
      <View style = {{flex:1}}>
        <Text style = {styles.title}> Title </Text>
      </View>
      <View style={styles.itemslist}>
          { vols.map(vol => (
                  <Text style = {styles.box}>{ vol }</Text>
          )) }
      </View>  
  </View>
  // <View style={styles.container}>
  //   <Text style = {styles.title}> Title </Text>
  //   <FlatList
  //     columnWrapperStyle= {{flexWrap: "wrap"}}
  //     numColumns = {6}
  //     data={vols}
  //     renderItem={({item}) => (
  //       <Text style={styles.box}>{item}</Text>
  //     )}
  //   />
  // </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
    },
    title: {
      fontSize:30,
      marginTop:30, 
      alignSelf:'center'
    },
    itemslist: {
        // flex:3,
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'flex-start',
        flexWrap:"wrap",
        padding: 10,
    },
    box: {
    //   flex: 1,
      marginTop: 20,
      fontSize: 20,
      backgroundColor: 'skyblue',
      padding: 10,
    }
});

export default Sandbox;