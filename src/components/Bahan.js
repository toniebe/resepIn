import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Ellipse from '../assets/image/Ellipse.png'

const Bahan = ({bahan}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source={Ellipse} style={styles.bullet} />
                {/* <View style={styles.circle}></View> */}
            </View>
            <View style={styles.fontContainer}>
                <Text style={styles.font}>{bahan}</Text>
            </View>
        </View>
    )
}

export default Bahan

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom: 8,
        flexDirection:'row',
    },
    imgContainer:{
        // borderWidth: 1,
        justifyContent: 'center',
    },

    // circle:{
    //     width: 8,
    //     height: 8,
    //     borderRadius: 8/2,
    //     // borderWidth: 1,
    //     backgroundColor: '#53C480',
    //     marginBottom
    // },

    bullet:{
        width:8,
        height:8
    },

    fontContainer:{
        // borderWidth: 1,
        justifyContent: 'flex-start',
        marginLeft:12,
    },

    font:{
        fontSize:14,
        color:'#707070',
        lineHeight: 19,
    }
})
