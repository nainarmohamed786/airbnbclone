import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Search from '../data/Search'
import PlaceExplain from '../component/PlaceExplain';

const SearchScreen = ({ navigation }) => {


    const data = Search;


    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Explore Airbnb Hotels",
            headerStyle: { backgroundColor: "#fd5c63" },
            headerTintColor: "#fff"
        })
    }, [])

    return (

        <FlatList data={data} keyExtractor={(item) => item.id} renderItem={({ item }) => (
            <PlaceExplain item={item} />
        )} />

    )
}

export default SearchScreen

const styles = StyleSheet.create({})