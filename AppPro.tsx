import React from "react";
import { Text ,View, StyleSheet, useColorScheme} from 'react-native'
function AppPro() {
    const isColorMode = useColorScheme() === 'dark'
return (
    <View style={styles.container}>
        <Text style={isColorMode ? styles.whiteText : styles.darkText}>My name is Hero</Text>
    </View>
)
}
    const styles = StyleSheet.create(
        {
            container:{
                alignItems:'center',
                flex:1
            },
            whiteText:{
                color:'white'
            },
            darkText:{
                color:'black'
            }
        }
    )
export default AppPro;