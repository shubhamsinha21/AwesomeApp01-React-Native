import React from 'react'
import {StyleSheet, Text, View, Linking, Image, TouchableOpacity} from 'react-native'

function ActionCard() {
    function openWebsite (websiteLink:string) {
        Linking.openURL(websiteLink)
    }
  return (
    <View>
    <Text style={styles.headerText}>Blog Card</Text>
    <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Story of Mewar</Text>
        </View>
        <Image source = {{
            uri:'https://th.bing.com/th/id/OIP.otr8nDgqnBfvqdjz5KMJpQHaE8?pid=ImgDet&rs=1'
        }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>Mewar or Mewad is a region in the south-central part of Rajasthan state of India. It includes the present-day districts of Bhilwara, Chittorgarh.
            Mewar produced a series of remarkable rulers. To name a few - Bappa Rawal, Khuman II, Jaitra Singh, Hammir Singh, Kumbha, Sanga, Pratap, Amar Singh and many more.
            ternal Mewar is conceptualized to provide the Heritage, Tradition and Culture of Mewar. The House of Mewar is the oldest serving dynasty in the World.
            </Text>
        </View>
        <View style={styles.FooterContainer}>
           <TouchableOpacity 
           onPress={()=> openWebsite('https://www.udaipurian.com')}
           >
            <Text style={styles.readMore}>Read More</Text>
           </TouchableOpacity>
           <TouchableOpacity 
           onPress={()=> openWebsite('https://www.udaipurian.com')}
           >
            <Text style={styles.readMore}>Follow</Text>
           </TouchableOpacity>
        </View>
    </View>
    </View>

  )
}

const styles = StyleSheet.create({
    headerText:{
        fontSize:18,
        fontWeight:'bold',
        paddingHorizontal:8,
        marginBottom:4,
        color:"white"
    },
    headerContainer:{
        height:50,
        justifyContent:'center',
        alignItems:'center'
    },
    cardImage:{
        height:200,
    },
    card:{
        width:350,
        height:380,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16
    },
    cardElevated:{
        backgroundColor:'#E07C24',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
       shadowColor:'#333',
       shadowOpacity:0.4
    },
    bodyContainer:{ 
        padding:10
    },
    FooterContainer:{
        padding:8,
        flexDirection:'row',
        justifyContent:'space-evenly'

    },
    readMore:{
    fontSize:16,
    color:'black',
    backgroundColor:'white',
    paddingHorizontal:20,
    paddingVertical:6,
    borderRadius:6
    }
    

})
export default ActionCard
