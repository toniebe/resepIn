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
                    <Text style={styles.fontIcon1}>{porsi}</Text>
                </View>
                <View style={styles.icon}>
                    <Image source={level} style={styles.imgIcon} />
                    <Text style={styles.fontIcon2}>{tingkat}</Text>
                </View>
        </View>
    )
}

export default IconDeserve

const styles = StyleSheet.create({
    iconContainer:{
        marginVertical:12,
        // borderWidth: 1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        // height: 95,
        // width: 328,
    },
    icon:{
        marginTop:10,
        alignItems:'center'
    },
    imgIcon:{
        width:20,
        height:20,
        marginBottom: 8,
    },
    fontIcon:{
        fontSize:12,
        color:'#AAAAAA',
        textAlign:'center',
        height: 24,
        width: 45,
        lineHeight: 12,
        // borderWidth: 1,
        fontWeight: 'normal',
        fontStyle: 'normal',
    },
    fontIcon1:{
        fontSize:12,
        color:'#AAAAAA',
        textAlign:'center',
        height: 30,
        width: 45,
        lineHeight: 12,
        // borderWidth: 1,
        fontWeight: 'normal',
        fontStyle: 'normal',
        paddingHorizontal: 5,
    },
    fontIcon2:{
        fontSize:12,
        color:'#AAAAAA',
        textAlign:'center',
        height: 30,
        width: 45,
        lineHeight: 12,
        // borderWidth: 1,
        fontWeight: 'normal',
        fontStyle: 'normal',
    },
})
