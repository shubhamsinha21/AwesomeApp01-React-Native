import React from 'react'
import {ScrollView, StyleSheet, Text, View , Image} from 'react-native'

function ContactList () {
  const contacts = [
    {
        uid:1,
        name:'Anurag',
        status:'Developer',
        imageUrl:'https://cdn.pixabay.com/photo/2017/06/26/13/03/webdesigner-2443766_1280.jpg'
    },
    {
        uid:2,
        name:'Vaibhav',
        status:'Analyst',
        imageUrl:'https://cdn.pixabay.com/photo/2019/07/12/18/48/code-4333398_1280.jpg'
    },
    {
        uid:3,
        name:'Kartik',
        status:'Manager',
        imageUrl:'https://cdn.pixabay.com/photo/2017/09/21/19/06/woman-2773007_1280.jpg'
    },
  ]
    return (
      <View>
        <Text style={styles.headingText}> Contact List </Text>
        <ScrollView style={styles.Container} 
        scrollEnabled={false}>
        {/* call them as item.uid, etc or destructure then for simplicity */}
          {contacts.map(({uid, name, status, imageUrl})=> {
            return(
               <View key={uid} style={styles.userCard}>
                <Image source ={{
                    uri:imageUrl
                }} 
                style={styles.userImage}
                />
               <View>
               <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
               </View>
               </View>
            )
          })}
        </ScrollView>
      </View>
    )
  }

  const styles= StyleSheet.create({
    headingText:{
        fontSize:18,
        fontWeight:'bold',
        paddingHorizontal:8,
        marginBottom:14,
        color:"white"
    },
    Container:{
        paddingHorizontal:16
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        marginBottom:4,
        backgroundColor: '#8d3DAF',
        borderRadius:10
    },
    userImage:{
        width:100,
        height:100,
        borderRadius: 100/2
    },
    userName:{
        fontSize:16,
        fontWeight:'600',
        color:'white'
    },
    userStatus:{
        fontSize:12,
        color:'white'
    }

  })

export default ContactList;
