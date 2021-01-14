import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import timeIcon from '../assets/image/clock.png'
import deserve from '../assets/image/serving-dish.png'
import level from '../assets/image/coverage-level.png'

const {width,height} = Dimensions.get('window')
const CardReceipes = ({judul,waktu,porsi,tingkat,image}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri: image}} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{judul}</Text>
            </View>
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
        </View>
    )
}

export default CardReceipes

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height: 220,
        backgroundColor:'white',
        borderWidth:1,
        borderRadius:16,
        borderColor:'#eeeeee',
        marginRight:12,
    },
    image:{
        width:'100%',
        height:116,
        borderTopLeftRadius:16,
        borderTopRightRadius:16
    },
    textContainer:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:8,
        // borderWidth: 1,
        // backgroundColor:'yellow',
    },

    text:{
        fontSize:14,
        fontWeight:'400',
        textAlign:'center',
        width: 124,
        height: 38,
        fontStyle: 'normal',
        lineHeight: 16,
        marginHorizontal: 12,
        // borderWidth: 1,
    },

    iconContainer:{
        marginVertical:12,
        marginHorizontal: 12,
        flexDirection:'row',
        justifyContent: 'space-evenly',
        // borderWidth: 1,
    },
    icon:{
        // marginTop:10,
        alignItems:'center',
        // borderWidth: 1,
    },
    imgIcon:{
        width:15,
        height:15,
        marginBottom: 4,
    },

    fontIcon:{
        fontSize:6,
        color:'#AAAAAA',
        textAlign:'center',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 6,
        width: 35,
        height: 18,
        // paddingVertical: 5,
        paddingHorizontal: 5,
        // borderWidth:1,
        
    },

    fontIcon1:{
        fontSize:6,
        color:'#AAAAAA',
        textAlign:'center',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 7,
        width: 30,
        height: 18,
        // paddingVertical: 5,
        paddingHorizontal: 7,
        // borderWidth:1,
        
    },

    fontIcon2:{
        fontSize:6,
        color:'#AAAAAA',
        textAlign:'center',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 8,
        width: 35,
        height: 23,
        // paddingVertical: 5,
        paddingHorizontal: 5,
        // borderWidth:1,
        
    }
})
