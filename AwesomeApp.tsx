import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import FlatCards from './components/FlatCards'

function AwesomeApp () {

    return (
        <SafeAreaView>
            <ScrollView>
             <View>
                <FlatCards/>
                <ElevatedCards/>
                <FancyCard/>
                <FancyCard/>

             </View>
            </ScrollView>
      </SafeAreaView>
    )
  }


export default AwesomeApp
