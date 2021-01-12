import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import timeIcon from '../assets/image/clock.png'
import deserve from '../assets/image/serving-dish.png'
import level from '../assets/image/coverage-level.png'

const IconDeserve = ({waktu,porsi,tingkat}) => {
    return (
        <View style={styles.iconContainer}>
                <View style={styles.icon}>
                    <Image source={timeIcon} style={styles.imgIcon} />
                    <Text style={styles.fontIcon}>{waktu}</Text>
                </View>
                <View style={styles.icon}>
                    <Image source={deserve} style={styles.imgIcon} />
                    <Text style={styles.fontIcon}>{porsi}</Text>
                </View>
                <View style={styles.icon}>
                    <Image source={level} style={styles.imgIcon} />
                    <Text style={styles.fontIcon}>{tingkat}</Text>
                </View>
        </View>
    )
}

export default IconDeserve

const styles = StyleSheet.create({
    iconContainer:{
        marginVertical:10,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    icon:{
        marginTop:10,
        alignItems:'center'
    },
    imgIcon:{
        width:20,
        height:20
    },
    fontIcon:{
        fontSize:14,
        color:'#AAAAAA',
        textAlign:'center'
    }
})
