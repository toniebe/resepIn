import React from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'

import AllCategory from '../components/AllCategory'

const CategoryScreen = () => {
    return (
        <ScrollView>
            <StatusBar barStyle='light-content'  translucent backgroundColor="rgba(0,0,0,0)" />
            <View >
                <AllCategory />
            </View>
        </ScrollView>
    )
}

export default CategoryScreen

const styles = StyleSheet.create({})
