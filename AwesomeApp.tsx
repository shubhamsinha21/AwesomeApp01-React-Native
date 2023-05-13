import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import FlatCards from './components/FlatCards'

function AwesomeApp () {

    return (
        <SafeAreaView>
            <ScrollView>
             <View>
                <FlatCards/>
             </View>
            </ScrollView>
      </SafeAreaView>
    )
  }


export default AwesomeApp
