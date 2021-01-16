import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LangkahMasak = ({number,langkah}) => {
    return (
        <View style={styles.container}>
            <View style={{}}>
                <Text style={styles.number}>{number}</Text>
            </View>
            <View style={{marginLeft: 8,}}>
                <Text style={styles.font}>{langkah}</Text>
            </View>
            
        </View>
    )
}

export default LangkahMasak

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom: 8,
        flexDirection: 'row',
    },

    number:{
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 18,
        color: '#53C480'
    },

    font:{
        color:'#707070',
        fontSize:14,
        textAlign:'justify',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight:19,
    }
})
