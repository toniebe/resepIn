import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, StatusBar,TextInput,ScrollView,TouchableOpacity, FlatList } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import CardReceipes from '../components/CardReceipes';
import axios from 'axios'

const CategoryDetailScreen = ({route,navigation}) => {
    
    const {key,title} = route.params
    const [data,setData] = useState([])
    
    const getData = () => {
        axios.get(`https://masak-apa.tomorisakura.vercel.app/api/categorys/recipes/`+key)
        .then(function (response){
            setData(response.data.results)
            console.log(response.data.results)
        })
    }

    useEffect(() =>{
        getData()
    },[])
    
    return (
        <ScrollView style={{backgroundColor:'white'}}>
            <StatusBar barStyle='dark-content'  translucent backgroundColor="rgba(0,0,0,0)" />
            <View style={styles.headerContainer}>
                <Text style={styles.header}>{title}</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Cari resep" style={styles.input} />
                <TouchableOpacity style={styles.icon}>
                    <Icon name="search" size={20} color={"#C4C4C4"} />
                </TouchableOpacity>
            </View>
            <View style={styles.listContainer}>
                <FlatList 
                    data={data}
                    contentContainerStyle={styles.list}
                    renderItem={({item}) =>
                    <View style={styles.listContent}>
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', {key: item.key, image:item.thumb}) }> 
                            <CardReceipes image={item.thumb} judul={item.title} waktu={item.times} porsi={item.portion} tingkat={item.dificulty} />
                        </TouchableOpacity>
                    </View>      
                            }
                />
            </View>
        </ScrollView>
    )
}

CategoryDetailScreen.navigationOptions = ({navigation}) => {
    console.log(navigation);
}

export default CategoryDetailScreen

const styles = StyleSheet.create({
    headerContainer:{
        flex: 1,
        backgroundColor: 'white',
        // borderWidth: 1,
        width: '100%',
        marginTop: 35,
        overflow:'hidden',
        borderBottomWidth: 5,
        borderBottomColor: '#E5E5E5',
        
    },

    header:{
        // borderWidth: 1,

        height: 30,
        fontSize: 24, 
        lineHeight: 24,
        fontWeight: 'bold',
        marginVertical: 10,
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
    listContainer:{
        marginHorizontal:10,
        marginTop:20,
    },
    list:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        marginHorizontal:10,
    },
    listContent:{
        marginVertical:5,
        // marginHorizontal:10
    }
})
