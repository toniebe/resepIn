import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, Dimensions, Image, ImageBackground,StatusBar, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import ibHome from '../assets/image/ibHome.png'
import Icon from "react-native-vector-icons/Ionicons";

import BtnCategtory from '../components/BtnCategory'

import semua from '../assets/image/Semua.png'
import ResepAyam from '../assets/image/ResepAyam.png'
import ResepDaging from '../assets/image/ResepDaging.png'
import ResepSayuran from '../assets/image/ResepSayuran.png'
import MenuMakanSiang from '../assets/image/MenuMakanSiang.png'
import MenuMakanMalam from '../assets/image/MenuMakanMalam.png'
import MasakanTradisional from '../assets/image/MasakanTradisional.png'
import MasakanHariRaya  from '../assets/image/MasakanHariRaya.png'
import arrow from '../assets/image/panah.png'
import CardReceipes from '../components/CardReceipes';
import axios from 'axios'

const {width,height} = Dimensions.get('window');
const HomeScreen = () => {
    const [data,setData] = useState([]);
    
    const getData = () => {
        axios.get('https://masak-apa.tomorisakura.vercel.app/api/recipes-length/?limit=5')
        .then(function (response){
            setData(response.data.results)
            console.log(response.data.results)
        })
    }

    useEffect(() =>{
        getData()
    },[])
    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle='light-content' translucent backgroundColor="rgba(0,0,0,0)" />
            <ImageBackground source={ibHome} style={styles.imageBackground}> 
                <View style={styles.containerText}>
                    <Text style={styles.text}>Mau masak apa hari ini?</Text>
                </View>
            </ImageBackground>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Cari resep" style={styles.input} />
                <TouchableOpacity style={styles.icon}>
                    <Icon name="search" size={24} color={"#C4C4C4"} />
                </TouchableOpacity>
            </View>
            <View style={styles.categorycontainer}>
                <View style={styles.category}>
                    <TouchableOpacity>
                        <BtnCategtory image={semua} name="Semua"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <BtnCategtory image={ResepAyam} name="Resep Ayam"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <BtnCategtory image={ResepDaging} name="Resep Daging"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <BtnCategtory image={ResepSayuran} name="Resep Sayuran"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.category}>
                    <TouchableOpacity>
                        <BtnCategtory image={MenuMakanSiang} name="Menu Makan Siang"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <BtnCategtory image={MenuMakanMalam} name="Menu Makan Malam"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <BtnCategtory image={MasakanTradisional} name="Masakan Tradisional"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <BtnCategtory image={MasakanHariRaya} name="Masakan Hari Raya"/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.listcontainer}>
                    <View style={styles.titlelist}>
                        <Text style={styles.title}>Rekomendasi</Text>
                        <TouchableOpacity style={styles.btnSeeall}>
                            <Text style={styles.seeall}>Lihat Semua</Text>
                            <Image source={arrow} style={styles.imgArrow}/>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style = {styles.listfood} >
                        <FlatList 
                            data={data}
                            contentContainerStyle={styles.list}
                            renderItem={({item}) =>
                            <TouchableOpacity> 
                                <CardReceipes image={item.thumb} judul={item.title} waktu={item.times} porsi={item.portion} tingkat={item.dificulty} />
                            </TouchableOpacity>
                        }
                        />
                    </ScrollView>
                </View>
        </ScrollView>
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
        fontSize:28,
        lineHeight: 30,
        height: 70,
        width: 220,
        fontWeight:'bold',
        fontStyle:'normal',
        // borderWidth: 1,
    },
    inputContainer:{
        marginHorizontal:18,
        marginTop:-25,
        // elevation:2,
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
    },
    
    categorycontainer:{
        flex: 1,
        // borderWidth: 1,
        marginHorizontal: 16,
        marginTop: 20,
    },

    category:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    listcontainer:{
        marginTop: 24,
        // borderWidth: 1,
        marginHorizontal: 16,
    },
    titlelist:{
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    title:{
       fontWeight: '400',
       fontSize: 20, 
       lineHeight: 20,
       width: 140,
       height: 20,
    //    borderWidth: 1,
    },

    btnSeeall:{
        flexDirection: 'row',
        alignItems: 'center',
    },

    seeall:{
      fontWeight: '600', 
      fontSize: 10,
      lineHeight: 14,
      textAlign: 'left',
      color:  '#53C480',
    //   borderWidth: 1,
      width:65,
      height: 14,
    },

    imgArrow:{
        marginTop: 3,
        width: 10,
        height: 7,
    },

    listfood:{
        marginTop:10
    },
    list:{
        flexDirection:'row',
    }

    
})
