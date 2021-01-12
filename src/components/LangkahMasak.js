import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LangkahMasak = ({langkah}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.font}>{langkah}</Text>
        </View>
    )
}

export default LangkahMasak

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginVertical:5
    },
    font:{
        color:'#707070',
        fontSize:14,
        textAlign:'justify'
    }
})
