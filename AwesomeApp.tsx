import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import FlatCards from './components/FlatCards'
import ActionCard from './components/ActionCard'

function AwesomeApp () {

    return (
        <SafeAreaView>
            <ScrollView>
             <View>
                <FlatCards/>
                <ElevatedCards/>
                <FancyCard/>
                <ActionCard/>

             </View>
            </ScrollView>
      </SafeAreaView>
    )
  }


export default AwesomeApp
