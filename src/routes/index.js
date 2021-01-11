import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen'
import CategoryScreen from '../screen/CategoryScreen'
import ExitScreen from '../screen/ExitScreen'
import SplahScreen from '../screen/SplashScreen'



import iconExit from '../assets/image/icon-exit.png'
import iconHome from '../assets/image/home.png'
import iconCategory from '../assets/image/icon-category.png'


import {WARNA_PRIMER} from '../utils/constant'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const IconBottom = (props) => {
    const {color, focused} = props.data
    let colorSelected = focused ? WARNA_PRIMER : 'grey'
    return(
      <View>
        <Image source={props.image} style={{width: 25, height: 25, tintColor: colorSelected }} />
      </View>
    )
  }


const Dashboard = () => {
    return(
        <Tab.Navigator tabBarOptions={{
            keyboardHidesTabBar: true,
            
          }}>
            <Tab.Screen 
              name="Home" 
              component={HomeScreen}
              options={{
                tabBarLabel: () => {return <Text style={{fontSize:10}}>Beranda</Text>},
                tabBarIcon: (props) => {return <IconBottom data={props} image={iconHome}/>},
              }}
            />
            <Tab.Screen 
              name="Category" 
              component={CategoryScreen}
              options={{
                tabBarLabel: () => {return <Text style={{fontSize:10}}>Kategori</Text>},
                tabBarIcon: (props) => {return <IconBottom data={props} image={iconCategory}/>},
              }}
            />
            <Tab.Screen 
              name="Exit" 
              component={ExitScreen}
              options={{
                tabBarLabel: () => {return <Text style={{fontSize:10}}>Keluar</Text>},
                tabBarIcon: (props) => {return <IconBottom data={props} image={iconExit}/>},
              }}
            />
        </Tab.Navigator>
    )
    
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplahScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
