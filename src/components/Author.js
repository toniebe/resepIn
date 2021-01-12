import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import iconChef from '../assets/image/icon-chef.png'
import iconDate from '../assets/image/icon-date.png'
const Author = ({chef,tanggal}) => {
    return (
        <View>
            <View style={styles.authorContainer}>
                
                <View style={styles.author}>
                    <Image source={iconChef} style={styles.iconChef} />
                    <Text style={styles.fontChef}>{chef}</Text>
                </View>
                <View style={styles.author}>
                    <Image source={iconDate} style={styles.iconChef} />
                    <Text style={styles.fontChef}>{tanggal}</Text>
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
        marginRight:30
    },
    iconChef:{
        width:25,
        height:25
    },
    fontChef:{
        fontSize:15,
        marginLeft:10,
        color:'#707070'
    }
})
