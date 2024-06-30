import { Text, StyleSheet } from 'react-native'
import React from 'react'


function ExerciseName ({nome}: string) {
    return (
        <Text style={style.headerText}>{nome}</Text>
    )
}
export default ExerciseName;

const style = StyleSheet.create({
    headerText:{
    fontSize: 20, 
    width: "100%",
    color: "white",
    textAlign: 'center',
    lineHeight: 35,
    paddingBottom:10,
    paddingHorizontal:'15%'
    }
})
