import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

 function FancyCard() {
  return (
   <View>
    <Text style={styles.headingText}>Trending Places</Text>
        <View style={[styles.card, styles.cardElevated]}>
           <Image 
           source={ {
            uri: 'https://i.redd.it/rbh1d1982u631.jpg',
                   } }
            style={styles.cardImage}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Udaipur</Text>
                <Text style={styles.cardLabel}>Situated in Mewar</Text>
                <Text style={styles.cardDescription}>Udaipur, is the city founded by Udai-Singh II of Mewar when mughals invaded Chittor.</Text>
                <Text style={styles.cardFooter}>Visit Here</Text>
                
            </View>
        </View>
   </View>
  )
}
const styles = StyleSheet.create( {
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
        color:'white'
    },
    cardImage:{
        height:200,
        marginBottom:8,
        borderTopRightRadius:6
    },
    card:{
       marginVertical:12,
       marginHorizontal:16,
        width:360,
        height:360,
        borderRadius:6,

    },
    cardBody:{
        flex:1,
        flexGrow:1,
        margin:8
    },
    cardElevated:{
        backgroundColor:'#ffffff',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardTitle:{
        color:'white',
        fontWeight:'bold',
        fontSize:18,
        marginBottom:4
    },
    cardLabel:{
        color:'orange',
        fontSize:16,
        marginBottom:4
    },
    cardDescription:{
        color:'pink',
        fontSize:14,
        marginBottom:12,
        flexShrink:1
    },
    cardFooter:{
        color:'white'
    }


})
export default FancyCard;
