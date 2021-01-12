import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,StatusBar, Image, Dimensions,FlatList, ImageBackground,  ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native'
import iconBack from '../assets/image/icon-base-circle.png'
import arrow from '../assets/image/panah.png'
import CardReceipes from '../components/CardReceipes';
import axios from 'axios'
import IconDeserve from '../components/IconDeserve';
import Author from '../components/Author';
import WARNA_PRIMER from '../utils/constant'
import ReadMore from '@fawazahmed/react-native-read-more';
import Bahan from '../components/Bahan';
import LangkahMasak from '../components/LangkahMasak';

const {width,height} = Dimensions.get('window');
const DetailScreen = ({route,navigation}) => {
    const {key,image} = route.params;
    console.log(key)
    console.log(image)
    const [isLoading,setIsLoading] = useState(true)
    const [rekomendasi,setRekomendasi] = useState([])
    const [data,setData] = useState([])
    const [author,setAuthor] = useState({})
    const [bahan,setBahan] = useState([])
    const [langkah,setLangkah] = useState([])
    
    const getData = () => {
        axios.get(`https://masak-apa.tomorisakura.vercel.app/api/recipe/`+key)
        .then(function (response){
            setData(response.data.results)
            setAuthor(response.data.results.author)
            setBahan(response.data.results.ingredient)
            setLangkah(response.data.results.step)
            setIsLoading(false)
            console.log(data)
        })
    }

    const getRekomendasi = () => {
        axios.get('https://masak-apa.tomorisakura.vercel.app/api/recipes-length/?limit=5')
        .then(function (response){
            setRekomendasi(response.data.results)
            console.log(rekomendasi)
        })
    }

    useEffect(() =>{
        getData()
        getRekomendasi()
    },[])
    return (

        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar barStyle='dark-content' translucent backgroundColor="rgba(0,0,0,0)" />
            <View style={styles.contentContaier}>
                <ImageBackground source={{uri:image}} style={styles.imageContent} > 
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={iconBack} style={{width:40,height:40,marginTop:10,marginLeft:10}} />
                    </TouchableOpacity>
                </ImageBackground>    
                <View style={styles.iconContent}>
                    <IconDeserve waktu={data.times} porsi={data.servings} tingkat={data.dificulty} />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleFont}>{data.title}</Text>
                </View>
                <View style={styles.authorContainer}>
                    <Author tanggal={author.datePublished} chef={author.user} />
                </View>
                <View style={styles.descriptionContainer}>
                    <ReadMore numberOfLines={5} 
                    style={styles.textStyle} 
                    seeLessStyle={styles.seeMore} 
                    seeMoreStyle={styles.seeMore}
                    seeMoreText="Lihat Selengkapnya"
                    seeLessText="Sembunyikan"
                    >
                        {
                            data.desc
                        }
                    </ReadMore>
                </View>
                <View style={styles.bahanContainer}>
                    <Text style={styles.bahanJudul}>Bahan-bahan</Text>
                    {isLoading == true ?
                            (<ActivityIndicator size="large" color="#58d68d" />):
                            (<FlatList 
                                data={bahan}
                                renderItem={({item}) =>
                                <Bahan bahan={item}/>
                            }
                                keyExtractor={(item, index) => index.toString()}
                            />)
                        }
                </View>
                <View style={styles.langkahContainer}>
                    <Text style={styles.bahanJudul}>Langkah Memasak</Text>
                    {isLoading == true ?
                            (<ActivityIndicator size="large" color="#58d68d" />):
                            (<FlatList 
                                data={langkah}   
                                renderItem={({item}) =>
                                <LangkahMasak langkah={item} />
                            }
                                keyExtractor={(item, index) => index.toString()}
                            />)
                        }
                    
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
                        {isLoading == true ?
                            (<ActivityIndicator size="large" color="#58d68d" />):
                            (<FlatList 
                                data={rekomendasi}
                                contentContainerStyle={styles.list}
                                renderItem={({item}) =>
                                <TouchableOpacity onPress={() => navigation.navigate('Detail', {key: item.key, image:item.thumb}) }> 
                                    <CardReceipes image={item.thumb} judul={item.title} waktu={item.times} porsi={item.portion} tingkat={item.dificulty} />
                                </TouchableOpacity>
                            }
                            keyExtractor={(item, index) => index.toString()}
                            />)
                        }
                        
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    contentContaier:{
        marginTop:20
    },
    imageContent:{
        width:width,
        height:300,
    },
    iconContent:{
        marginTop:-40,
        backgroundColor:'white',
        marginHorizontal:30,
        borderWidth:1,
        borderColor:'#EEEEEE',
        borderRadius:10,
        paddingVertical:10
    },
    titleContainer:{
        marginHorizontal:10
    },
    titleFont:{
        fontSize:24,
        fontWeight:'bold',
    },
    authorContainer:{
        marginHorizontal:10,
        marginTop:5
    },
    descriptionContainer:{
        marginHorizontal:10,
        marginTop:15
    },
    indicator:{
        flex:1,
        backgroundColor:'white'
    },
    textStyle:{
        fontSize:14
    },
    seeMore:{
        color:'#53C480'
    },
    bahanContainer:{
        marginHorizontal:10,
        marginVertical:10
    },
    bahanJudul:{
        fontSize:18,
        fontWeight:'bold',
        color:'#595959',
    },
    langkahContainer:{
        marginHorizontal:10,
        marginVertical:10
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
