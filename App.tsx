import React from "react";
import { SafeAreaView, Text, View, Button, Alert} from 'react-native'
function App () {
  return(
<SafeAreaView>
  <View>
    <Text> Hello World !</Text>
    <Text>Hello World !</Text> 
    <Text> Hello World !  </Text>
  </View>
  <Button title ="Click Here" color={'green'} onPress={()=> {
    Alert.alert("Submitted")
  }} />
</SafeAreaView>
  )
}
export default App;