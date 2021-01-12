import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Ellipse from '../assets/image/Ellipse.png'

const Bahan = ({bahan}) => {
    return (
        <View style={styles.container}>
            <View style={styles.bahanContainer}>
                <Image source={Ellipse} style={styles.bullet} />
                <Text style={styles.font}>{bahan}</Text>
            </View>
        </View>
    )
}

export default Bahan

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:5
    },
    bahanContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    bullet:{
        width:8,
        height:8
    },
    font:{
        fontSize:14,
        color:'#707070',
        marginLeft:5
    }
})
