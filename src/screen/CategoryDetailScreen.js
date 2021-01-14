import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, StatusBar,TextInput,ScrollView,TouchableOpacity,ActivityIndicator, FlatList, Image, Dimensions } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import CardReceipes from '../components/CardReceipes';
import arrow from '../assets/image/arrowBlack.png'
import axios from 'axios'

const numColumns = 2
const CategoryDetailScreen = ({route,navigation}) => {
    
    const {key,title} = route.params
    const [data,setData] = useState([])
    const [search,setSearch] = useState('')
    const [isLoading,setIsLoading] = useState(true)


    const getData = () => {
        axios.get(`https://masak-apa.tomorisakura.vercel.app/api/categorys/recipes/`+key)
        .then(function (response){
            setData(response.data.results)
            setIsLoading(false)
            console.log(response.data.results)
        })
        .catch(function (error) {
            console.log(error);
          });
    }

    useEffect(() =>{
        getData()
    },[])
    
    return (
        <>
            {
                isLoading == true ? (
                <View style={styles.indicatorContainer}>
                    <ActivityIndicator size="large" color="#58d68d" />
                </View>
                ) : (
            <View style={{backgroundColor:'white'}}>
                <View style={styles.listContainer}>
                    <FlatList 
                        data={data}
                        ListHeaderComponent={
                            <View style={styles.container}>
                                <StatusBar barStyle='dark-content'  translucent backgroundColor="rgba(0,0,0,0)" />
                                <View style={styles.headerContainer}>
                                    <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.goBack()}>
                                        <Image source={arrow} style={styles.imageHeader} />
                                    </TouchableOpacity>
                                    <Text style={styles.header}>{title}</Text>
                                </View>
                                <View style={styles.inputContainer}>
                                    <TextInput placeholder="Cari resep" style={styles.input} value={search} onChangeText={(value)=> setSearch(value)} />
                                    <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Search',{key:search})}>
                                        <Icon name="search" size={20} color={"#C4C4C4"} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }
                        ListHeaderComponentStyle={styles.containerHeader}
                        contentContainerStyle={styles.list}
                        renderItem={({item}) =>
                        <View style={styles.listContent}>
                            <TouchableOpacity onPress={() => navigation.navigate('Detail', {key: item.key, image:item.thumb}) }> 
                                <CardReceipes image={item.thumb} judul={item.key.replace(/-/g , " ")} waktu={item.times} porsi={item.portion} tingkat={item.dificulty} />
                            </TouchableOpacity>
                        </View>      
                        }
                        numColumns={numColumns}
                        
                    />
                </View>
        </View>
                )
            }
        </>    
    )
}


export default CategoryDetailScreen

const styles = StyleSheet.create({

    containerHeader:{
        width: '100%',
        // borderWidth: 1,
        marginBottom: 20,
    },

    headerContainer:{
        backgroundColor: 'white',
        // borderWidth: 1,
        width: '100%',
        overflow:'hidden',
        borderBottomWidth: 5,
        borderBottomColor: '#E5E5E5',
        flexDirection:'row',
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

    inputContainer:{
        marginHorizontal:30,
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
    listContainer:{
        marginTop:20,
        justifyContent: 'space-around',
    },
    list:{
        // flexWrap:'wrap',
        alignItems: 'center',
        // marginHorizontal:10,
        // borderWidth: 1
    },
    listContent:{
        marginVertical:8,
        marginHorizontal: 5,
        // borderWidth: 1,
        
    },
    indicatorContainer:{
        flex: 1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:30,
        borderWidth: 1
    }
    
})
