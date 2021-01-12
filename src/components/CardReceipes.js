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
                    <Text style={styles.fontIcon}>{porsi}</Text>
                </View>
                <View style={styles.icon}>
                    <Image source={level} style={styles.imgIcon} />
                    <Text style={styles.fontIcon}>{tingkat}</Text>
                </View>

            </View>
        </View>
    )
}

export default CardReceipes

const styles = StyleSheet.create({
    container:{
        width:150,
        backgroundColor:'white',
        borderWidth:1,
        borderRadius:16,
        borderColor:'#eeeeee',
        marginRight:10,
    },
    image:{
        width:150,
        height:100,
        borderTopLeftRadius:16,
        borderTopRightRadius:16
    },
    textContainer:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        // backgroundColor:'yellow',
    },
    text:{
        fontSize:16,
        // fontWeight:'bold',
        textAlign:'center'
    },
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
        fontSize:10,
        color:'#AAAAAA',
        textAlign:'center'
    }
})
