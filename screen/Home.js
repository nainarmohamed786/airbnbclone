import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../component/Header'
import Explore from '../component/Explore'
import Cards from '../component/Cards'
import Experinece from '../component/Experinece'

const Home = () => {
    return (
        <ScrollView>
            <Header />
            <Cards />
            <Explore />
            <Experinece />
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({})