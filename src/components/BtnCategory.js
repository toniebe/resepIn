import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const BtnCategory = ({image,name}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imagecontainer}>
                <Image source={image} style={styles.img}/>
            </View>
            <View style={styles.titlecontainer}>
                <Text style={styles.title}>{name}</Text>
            </View>
        </View>
    )
}

export default BtnCategory

const styles = StyleSheet.create({
    container:{
        // borderWidth: 1,
    },

    imagecontainer:{
        height: 72,
        width: 72,
        // borderWidth: 1,
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
    },

    img:{
        height: 36,
        width: 35.93,
    },

    titlecontainer:{
        height: 33,
        width: 72,
        // borderWidth: 1,
        marginTop: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title:{
        height: 35,
        width: 72,
        textAlign: 'center',
        fontSize: 10,
        lineHeight: 14,
        // fontFamily: "berkshireswash-regular"
    }


})
