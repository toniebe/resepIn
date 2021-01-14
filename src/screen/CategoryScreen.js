import React, {useState, useEffect} from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

import AllCategory from '../components/AllCategory'

import Icon from "react-native-vector-icons/Ionicons";

import ResepAyam from '../assets/image/ResepAyam.png'
import ResepDaging from '../assets/image/ResepDaging.png'
import ResepSayuran from '../assets/image/ResepSayuran.png'
import MenuMakanSiang from '../assets/image/MenuMakanSiang.png'
import MenuMakanMalam from '../assets/image/MenuMakanMalam.png'
import MasakanTradisional from '../assets/image/MasakanTradisional.png'
import MasakanHariRaya  from '../assets/image/MasakanHariRaya.png'
import ResepSeafood from '../assets/image/ResepSeafood.png'
import Sarapan from '../assets/image/Sarapan.png'
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';

const CategoryScreen = ({navigation}) => {

    // const[data, setData] = useState([]);
    
    
    // const getData = () => {
    //     axios.get('https://masak-apa.tomorisakura.vercel.app/api/categorys/recipes')
    //     .then(function(response){
    //         setData(response.data.results)
    //         // console.log(response.data.results)
    //     })
    // }

    // const dataList = [
    //     '../assets/image/MasakanHariRaya.png',
    //     '../assets/image/MasakanTradisional.png',
    //     '../assets/image/MenuMakanMalam.png',
    //     '../assets/image/MenuMakanSiang.png',
    //     '../assets/image/ResepAyam.png',
    //     '../assets/image/ResepDaging.png',
    //     '../assets/image/ResepSayuran.png',
    //     '../assets/image/ResepSeafood.png',
    //     '../assets/image/Sarapan.png'

    
    // ]

    // console.log(dataList)

    // useEffect(() =>{
    //     getData()
    // },[])

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: 'white',}}>
            <StatusBar barStyle='dark-content'  translucent backgroundColor="rgba(0,0,0,0)" />
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Kategori</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Cari resep" style={styles.input} />
                <TouchableOpacity style={styles.icon}>
                    <Icon name="search" size={20} color={"#C4C4C4"} />
                </TouchableOpacity>
            </View>
            <View style={styles.containerCategory} >
                {/* <FlatList 
                        data={data}
                        extraData={dataList}
                        contentContainerStyle={styles.list}
                        renderItem={({item,index}) => 
                        <TouchableOpacity >
                            <AllCategory image={require(dataList)} name={item.category}/>
                        </TouchableOpacity> 
                    }
                /> */}

                <View style={styles.category}>
                    <TouchableOpacity onPress={()=>navigation.navigate('CategoryDetail',{key:'resep-ayam',title:'Resep Ayam'})}>
                        <AllCategory image={ResepAyam} name="Resep Ayam"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('CategoryDetail',{key:'resep-daging',title:'Resep Daging'})}>
                        <AllCategory image={ResepDaging} name="Resep Daging"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.category}>
                    <TouchableOpacity onPress={()=>navigation.navigate('CategoryDetail',{key:'resep-sayuran',title:'Resep Sayuran'})}>
                        <AllCategory image={ResepSayuran} name="Resep Sayuran"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('CategoryDetail',{key:'resep-seafood',title:'Resep Seafood'})}>
                        <AllCategory image={ResepSeafood} name="Resep Seafood"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.category}>
                    <TouchableOpacity onPress={()=>navigation.navigate('CategoryDetail',{key:'sarapan',title:'Sarapan'})}>
                        <AllCategory image={Sarapan} name="Sarapan"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('CategoryDetail',{key:'makan-siang',title:'Menu Makan Siang'})}>
                        <AllCategory image={MenuMakanSiang} name="Menu Makan Siang"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.category}>
                    <TouchableOpacity onPress={()=>navigation.navigate('CategoryDetail',{key:'makan-malam',title:'Menu Makan Malam'})}>
                        <AllCategory image={MenuMakanMalam} name="Menu Makan Malam"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('CategoryDetail',{key:'masakan-tradisional',title:'Masakan Tradisional'})} >
                        <AllCategory image={MasakanTradisional} name="Masakan Tradisional"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.category}>
                    <TouchableOpacity onPress={()=>navigation.navigate('CategoryDetail',{key:'masakan-hari-raya',title:'Masakan Hari Raya'})}>
                        <AllCategory image={MasakanHariRaya} name="Masakan Hari Raya"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AllCategory  />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default CategoryScreen

const styles = StyleSheet.create({
    headerContainer:{
        flex: 1,
        backgroundColor: 'white',
        // borderWidth: 1,
        width: '100%',
        marginTop: 24,
        overflow:'hidden',
        borderBottomWidth: 5,
        borderBottomColor: '#E5E5E5',
        
    },

    header:{
        // borderWidth: 1,

        height: 30,
        width: 105,
        fontSize: 24, 
        lineHeight: 24,
        fontWeight: 'bold',
        marginVertical: 16,
        marginLeft: 24,
        
    },

    inputContainer:{
        marginHorizontal:25,
        // borderWidth: 1,
        marginTop: 16,
        height: 40,
    },

    input:{
        borderWidth:1,
        borderColor:'#EEEEEE',
        borderRadius:10,
      
        paddingLeft:20,
        fontSize:14,
        backgroundColor:'white'


    },
    icon:{
        position:'absolute',
        height: 20,
        width: 20,
        right:15,
        top: 10,
        // borderWidth: 1,
    },

    containerCategory:{
        // borderWidth: 1,
        marginTop: 20,
        marginHorizontal: 16,
    },

    // list:{
    //     flexDirection: 'row',
    // }

    category: {
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 20,
    },
})
