import React,{useEffect} from 'react'
import { StyleSheet, Text, View, Image, Dimensions,StatusBar } from 'react-native'
import ResepIn from '../assets/Splash.png'
import {WARNA_PRIMER} from '../utils/constant'

const {widht,height} = Dimensions.get('window');
const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(()=>{
            navigation.replace('Dashboard')
        },3000)
    },[navigation])
    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' translucent backgroundColor="rgba(0,0,0,0)" />
            <Image source={ResepIn} style={styles.image} />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:WARNA_PRIMER,
    },
    image:{
        width:widht,
        height:height,
    }
})
