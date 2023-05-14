import React from "react";
import {StyleSheet, Text, View } from "react-native";
function FlatCards() {
    return(
        <View>
            <Text style={styles.heading}> Flat Cards</Text>
            <View style={styles.container}>
                    {/* more tan one style can be achieved using an array */}
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Blue</Text>
                </View>
                
            </View>
        </View>
    )
}
const styles = StyleSheet.create( {
    heading : {
        fontSize:18,
        fontWeight:'bold',
        paddingHorizontal:8,
        color:'white'
    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:8
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8
    },
    cardOne:{
        backgroundColor:'red'
    },
    cardTwo:{
        backgroundColor:'green'
    },
    cardThree:{
        backgroundColor:'blue'
    }
})
export default FlatCards;