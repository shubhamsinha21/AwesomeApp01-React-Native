import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'

function ElevatedCards() {
  return (
   <View>
   <Text style={styles.heading}>Elevated Cards</Text>
   <ScrollView horizontal = {true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>more</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>😁</Text>
        </View>
   </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    heading:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
        color:'white'
    },
    container:{
        padding:8,
    },
    card:{
        width:100,
        height:100,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        margin:8
    },
    cardElevated:{
        backgroundColor:'orange',
        shadowOffset:{
            width:1,
            height:1
        }
    }
})
export default ElevatedCards;
