import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, ImageBackground,StatusBar, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import ibHome from '../assets/ibHome.png'
import Icon from "react-native-vector-icons/Ionicons";

const {width,height} = Dimensions.get('window');
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' translucent backgroundColor="rgba(0,0,0,0)" />
            <ImageBackground source={ibHome} style={styles.imageBackground}> 
                <View style={styles.containerText}>
                    <Text style={styles.text}>Mau masak apa</Text>
                    <Text style={styles.text}>hari ini?</Text>
                </View>
            </ImageBackground>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Cari resep" style={styles.input} />
                <TouchableOpacity style={styles.icon}>
                    <Icon name="search" size={24} color={"#C4C4C4"} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    containerText:{
        flex:1,
        justifyContent:'center',
        marginHorizontal:20
        // backgroundColor:'yellow'
    },
    imageBackground:{
        width:width,
        height:150,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    text:{
        color:'white',
        fontSize:25,
        fontWeight:'bold'
    },
    inputContainer:{
        marginHorizontal:18,
        marginTop:-20,
        elevation:4
    },
    input:{
        borderWidth:1,
        borderColor:'#EEEEEE',
        borderRadius:10,
      
        paddingLeft:20,
        fontSize:18,
        backgroundColor:'white'

    },
    icon:{
        position:'absolute',
        top:10,
        right:25
    }
    
})
