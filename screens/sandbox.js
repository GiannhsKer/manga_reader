import React from "react";
import { View, Text, StyleSheet } from "react-native";

// import data from './Data/Mangas.json'

const Sandbox = () => {

  const vols = Object.keys(data['One Piece']) 

  return (
  <View style={styles.container}>
      <View style={styles.itemslist}>
          { vols.map(vol => (
              <Text style = {styles.box}>{ vol }</Text>
          )) }
      </View>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
    },
    itemslist: {
        // flex:3,
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap:"wrap",
        padding: 10,
    },
    box: {
    //   flex: 1,
      marginTop: 20,
      fontSize: 20,
      backgroundColor: 'lightblue',
      padding: 10,
    }
});

export default Sandbox;