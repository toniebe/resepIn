import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import arrow from '../assets/image/arrowBlack.png'
import empty from '../assets/image/empty.png'

const ErrorScreen = ({route,navigation}) => {
    const {key} = route.params
    return (
        <View style={{backgroundColor:'white',flex:1}}>
            <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.replace('Dashboard')}>
                        <Image source={arrow} style={styles.imageHeader} />
                    </TouchableOpacity>
                    <Text style={styles.header}>{key}</Text>
            </View>
            <View style={styles.emptyContainer}>
                {/* <Image source={empty} style={styles.imageEmpty} /> */}
                <Text>Server Error</Text>
            </View>
        </View>
    )
}

export default ErrorScreen

const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor: 'white',
        // borderWidth: 1,
        width: '100%',
        overflow:'hidden',
        borderBottomWidth: 5,
        borderBottomColor: '#E5E5E5',
        flexDirection:'row',
        marginTop:20
    },

    header:{
        // borderWidth: 1,

        height: 30,
        fontSize: 24, 
        lineHeight: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        marginLeft: 24,
        // borderWidth: 1,
        
    },

    imageContainer:{
        marginTop:10,
        marginLeft:10,
        
    },

    imageHeader:{
        width:30,
        height:20,
        marginVertical: 10,
        borderWidth: 1,
    },
    emptyContainer:{
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    imageEmpty:{
        width:300,
        height:300
    }

})
