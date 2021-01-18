import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import iconChef from '../assets/image/icon-chef.png'
import iconDate from '../assets/image/icon-date.png'
const Author = ({chef,tanggal}) => {
    return (
        <View>
            <View style={styles.authorContainer}>
                
                <View style={styles.author}>
                    <View style={styles.imageContainer}>
                        <Image source={iconChef} style={styles.iconChef} />
                    </View>
                    <View style={styles.fontContainer}>
                        <Text style={styles.fontChef}>{chef}</Text>
                    </View>
                </View>
                <View style={styles.author}>
                    <View style={styles.imageContainer}>
                        <Image source={iconDate} style={styles.iconChef} />
                    </View>
                    <View style={styles.fontContainer}>
                        <Text style={styles.fontChef}>{tanggal}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Author

const styles = StyleSheet.create({
    authorContainer:{
        flexDirection:'row'
    },
    author:{
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        marginRight:24,
    },
    iconChef:{
        width:14.61,
        height:14.61
    },
    fontChef:{
        fontSize:12,
        lineHeight: 16,
        fontStyle: 'normal',
        fontWeight: 'normal',
        marginLeft:10,
        color:'#707070'
    },

    imageContainer: {
        // borderWidth:1,
        justifyContent: 'center',
    },

    fontContainer: {
        // borderWidth: 1,
        justifyContent: 'center',
    }
})
