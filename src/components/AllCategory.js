import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const AllCategory = ({image, name}) => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.imgContainer}>
                    <Image source={image} style={styles.img} />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{name}</Text>
                </View>
            </View>
        </View>
    )
}

export default AllCategory

const styles = StyleSheet.create({
    box:{
        width: 158,
        height: 152,
        // borderWidth: 1,
        backgroundColor: '#F8F8F8',
        borderRadius: 16,
    },

    imgContainer: {
        flex: 2,
        // borderWidth:1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    img: {
        width: 64,
        height: 64,
    },

    titleContainer: {
        flex: 1,
        // borderWidth:1,
        alignItems: 'center',
    },

    title:{
        marginHorizontal: 12,
        // borderWidth:1,
        width: 134,
        height: 45,
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        textAlign: 'center',
    }
})
