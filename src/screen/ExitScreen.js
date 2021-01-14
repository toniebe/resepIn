import React,{useState,useEffect} from 'react'
import { Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    BackHandler,
    StatusBar,
    TouchableOpacity
} from 'react-native'
import { color } from 'react-native-reanimated';

const ExitScreen = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    
    useEffect(() =>{
        setModalVisible(true)
    },[])


    return (
        <View style={styles.centeredView}>
            <StatusBar barStyle='dark-content'  translucent backgroundColor="rgba(0,0,0,0)" />
          <View style={styles.modalView}>
            <Text style={styles.fontKeluar}>Keluar</Text>
            <Text style={styles.modalText}>Apakah kamu yakin akan keluar dari aplikasi ResepIn?</Text>
            <View style={styles.modalContainer}>    
                <TouchableOpacity
                style={styles.buttonTidak}
                onPress={() => {
                    navigation.goBack();
                }}
                >
                <Text style={styles.fontTidak}>Tidak</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.buttonYa}
                onPress={() => {
                    BackHandler.exitApp();
                }}
                >
                <Text style={styles.textStyle}>Ya, Keluar</Text>
                </TouchableOpacity>
            </View>
          </View>
    </View>
    )
}

export default ExitScreen

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 5,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      buttonTidak: {
        backgroundColor: "white",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal:40,
        elevation: 4,
        marginHorizontal:5
      },
      buttonYa:{
        backgroundColor: "#53C480",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal:20,
        elevation: 4,
        marginHorizontal:5
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        color:'#707070',
        fontSize:16
      },
      modalContainer:{
          flexDirection:'row',
          justifyContent:'space-around',
      },
      fontTidak:{
        fontSize:14,
        color:'black',
        fontWeight:'bold'
      },
      fontKeluar:{
          fontSize:20,
          fontWeight:'bold'
      }
})
