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
const DetailScreen2 = ({route,navigation}) => {
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

    const _renderBahan = ({item}) => {
        return(
            <View style={styles.listBahan}>
                <Bahan bahan={item} />
            </View>
        )
    }

    const _renderLangkah = ({item}) => {
        return(
            <View style={styles.listLangkah}>
                <LangkahMasak number={item.substring(0,1)} langkah={item.substring(2)} />
            </View>
        )
    }

    const _renderRekomendasi = ({item}) => {
        return(
            <View style={styles.listRekomendasi}>
                <TouchableOpacity onPress={ () => navigation.navigate('Detail', {key: item.key, image: item.thumb})}>
                    <CardReceipes image={item.thumb} judul={item.key.replace(/-/g, " ")} waktu={item.times} porsi={item.portion} tingkat={item.dificulty} />
                </TouchableOpacity>
            </View>
        )
    }

    const RenderHeaderBahan = () => {
        return(
            <View>
                <ImageBackground source={{uri:image}} style={styles.image}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={iconBack} style={styles.iconBack}/>
                    </TouchableOpacity>
                </ImageBackground>
                <View style={styles.iconInfoContainer}>
                    <View style={styles.iconInfo}>
                        <IconDeserve waktu={data.times} porsi={data.servings} tingkat={data.dificulty} />
                    </View>
                </View>
                <View style={styles.titleContainer}> 
                    <Text style={styles.title}>{data.title}</Text>
                </View>
                <View style={styles.authorContainer}>
                    <Author tanggal={author.datePublished} chef={author.user} />
                </View>
                <View style={styles.descContainer}>
                    <ReadMore numberOfLines={6} style={styles.desc} 
                        seeLessStyle={styles.seeLess} 
                        seeMoreStyle={styles.seeMore}
                        seeMoreText="Lihat Selengkapnya"
                        seeLessText="Sembunyikan"
                        >
                            {
                                data.desc
                            }
                    </ReadMore>
                </View>
            </View>
        )
    }

    const RenderHeaderRekomendasi =() => {
        return (
            <View style={styles.rekomendasiContainer}>
                <View style={styles.textRekomendasiContainer}> 
                    <Text style={styles.textRekomendasi}>Resep Rekomedasi</Text>
                </View>
                <View style={styles.seeAllContainer}> 
                    <TouchableOpacity style={styles.BtnseeAll} onPress={() => navigation.navigate('Recomendation')}>
                        <View style={styles.textSeeAllContainer}>
                            <Text style={styles.textSeeAll}>Lihat Semua</Text>
                        </View>
                        <View style={styles.arrowContainer}>
                            <Image source={arrow} style={styles.imgArrow}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    useEffect(() =>{
        getData()
        getRekomendasi()
    },[])
    return (
        <>
        {
            isLoading == true ? (
                <View style={styles.indicatorContainer}>
                    <ActivityIndicator size="large" color="#58d68d" />
                </View>
            ) : (
                <View style={styles.container}>
                    <FlatList 
                        data={bahan}
                        ListHeaderComponent={
                            <View>
                                <RenderHeaderBahan />
                                <View style={styles.BahanContainer}>
                                    <Text style={styles.textBahan}>Bahan-bahan</Text>
                                </View>
                            </View>
                        }
                        ListHeaderComponentStyle={styles.header}
                        renderItem={_renderBahan}
                        contentContainerStyle={styles.contianerList}
                        ListFooterComponent={
                            <FlatList 
                                ListHeaderComponent={
                                    <View style={styles.langkahContainer}>
                                        <Text style={styles.textBahan}>Langkah Memasak</Text>
                                    </View>
                                }
                                data={langkah}
                                renderItem={_renderLangkah}
                                keyExtractor={(item, index) => index.toString()}
                                ListFooterComponent={
                                    <View style={styles.listRekomendasiContainer}> 
                                        <View> 
                                            <RenderHeaderRekomendasi/>
                                        </View>
                                        <FlatList 
                                            data={rekomendasi}
                                            horizontal
                                            renderItem={_renderRekomendasi}
                                            showsHorizontalScrollIndicator={false}
                                        />
                                    </View>
                                }
                            />
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            )
        }
        </>
        
    )
}

export default DetailScreen2

const styles = StyleSheet.create({
    container:{
        // borderWidth: 1,
       marginTop: 25,
       backgroundColor: 'white',
    },

    header:{
        // borderWidth: 1,
    },

    image:{
        width: width,
        height: 260,
    },

    iconBack:{
        marginTop: 12,
        marginLeft: 10,
        height: 32,
        width: 32,
    },

    iconInfoContainer:{
        marginHorizontal: 16,
        marginTop: -45,
    },

    iconInfo:{
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#EEEEEE',
    },

    titleContainer:{
        // borderWidth: 1,
        marginHorizontal: 16,
        // top: -45,
        marginTop: 16,
    },

    title:{
        fontSize: 24,
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 26,
    },

    authorContainer:{
        // borderWidth: 1,
        marginHorizontal: 16,
        // top: -45,
        marginTop: 12,
    },

    descContainer: {
        marginTop: 16,
        marginHorizontal: 16,
    },

    desc:{
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 19,
    },

    seeMore:{
        // borderWidth:1, 
        width: '100%',
        color: '#53C480',
        textAlign: 'center',
    },

    seeLess: {
        borderWidth:1, 
        width: '100%',
        color: '#53C480',
        textAlign: 'center',
    },

    BahanContainer:{
        marginHorizontal: 16,
        marginTop: 17,
        marginBottom: 8,
    },

    listBahan:{
        marginHorizontal: 16,
    },

    listLangkah:{
        marginHorizontal: 16,
    },

    langkahContainer:{
        marginHorizontal: 16,
        marginTop: 17,
        marginBottom: 8,
    },

    textBahan:{
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 18,
        color: '#595959',
    },

    listRekomendasiContainer:{
        // borderWidth: 1,
        marginHorizontal: 16,
        marginTop: 24,
        marginBottom: 20,
    },

    rekomendasiContainer:{
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginHorizontal: 16,
        marginBottom: 20,
    },

    textRekomendasiContainer:{
        // borderWidth: 1,
    },

    textRekomendasi:{
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 20,
        lineHeight: 20,
        color: '#0A191E',
    },

    seeAllContainer:{
        // borderWidth: 1,
        justifyContent: 'center',
    },

    textSeeAllContainer:{
        // borderWidth: 1,
        marginRight: 6,
    },

    textSeeAll:{
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 10,
        lineHeight: 14,
        color: '#53C480'
    },

    BtnseeAll:{
        flexDirection: 'row',
    },

    arrowContainer:{
        // borderWidth: 1,
        justifyContent: 'center',
    },

    imgArrow:{
        width: 8,
        height: 7,
    },

    listRekomendasi:{
        // borderWidth: 1,
        marginRight: 12,
    }
})
