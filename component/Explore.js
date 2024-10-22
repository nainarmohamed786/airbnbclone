import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Explore = () => {

    const [places, setPlaces] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            await fetch("https://www.jsonkeeper.com/b/4G1G")
                .then((resposnse) => resposnse.json())
                .then((data) => setPlaces(data));
        };
        fetchData();
    }, []);


    return (
        <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>Explore More</Text>

            <FlatList
                numColumns={2}
                data={places}
                scrollEnabled={false}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flexDirection: "row", margin: 7, marginTop: 20 }}>
                            <Image source={{ uri: item.img }} style={{ height: 70, width: 50 }} />
                            <View style={{ backgroundColor: "black", width: 100, paddingLeft: 10, height: 70, justifyContent: "center" }}>
                                <Text style={{ color: "white" }}>{item.location}</Text>
                                <Text style={{ color: "white" }}>{item.distance}</Text>
                            </View>

                        </View>
                    )
                }}
            />
        </View>
    )
}

export default Explore

const styles = StyleSheet.create({})