import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cards = () => {
    return (
        <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Inspiration for your next trip</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Pressable style={{ marginTop: 10, margin: 10 }}>
                    <Image source={{ uri: "https://i.pinimg.com/originals/b7/5f/da/b75fdaff1a53ea1cd53a7d1ac8b38c75.jpg" }} style={{
                        width: 190,
                        height: 150,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    }} />
                    <View style={{ backgroundColor: "orange", padding: 10 }}>
                        <Text style={{ fontSize: 18, color: "white", marginBottom: 5, fontWeight: "bold" }}>
                            Madikeri
                        </Text>
                        <Text style={{ fontSize: 15, color: "white", marginBottom: 5, fontWeight: "bold" }}>
                            200km away
                        </Text>
                    </View>
                </Pressable>
                <Pressable style={{ marginTop: 10, margin: 10 }}>
                    <Image source={{ uri: "https://data.1freewallpapers.com/download/dream-house.jpg" }} style={{
                        width: 190,
                        height: 150,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    }} />
                    <View style={{ backgroundColor: "orange", padding: 10 }}>
                        <Text style={{ fontSize: 18, color: "white", marginBottom: 5, fontWeight: "bold" }}>
                            Coimbatore
                        </Text>
                        <Text style={{ fontSize: 15, color: "white", marginBottom: 5, fontWeight: "bold" }}>
                            250km away
                        </Text>
                    </View>
                </Pressable>
                <Pressable style={{ marginTop: 10, margin: 10 }}>
                    <Image source={{ uri: "https://images.pexels.com/photos/63324/california-road-highway-mountains-63324.jpeg?cs=srgb&dl=pexels-pixabay-63324.jpg&fm=jpg" }} style={{
                        width: 190,
                        height: 150,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    }} />
                    <View style={{ backgroundColor: "orange", padding: 10 }}>
                        <Text style={{ fontSize: 18, color: "white", marginBottom: 5, fontWeight: "bold" }}>
                            Trichy
                        </Text>
                        <Text style={{ fontSize: 15, color: "white", marginBottom: 5, fontWeight: "bold" }}>
                            300km away
                        </Text>
                    </View>
                </Pressable>
                <Pressable style={{ marginTop: 10, margin: 10 }}>
                    <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6JaRuZKF_iJQOmWs6yAozQHmpnVNV17YJe9WWa3PTW78SkMHkm5D3Rfs-_JSAmNwS5wE&usqp=CAU" }} style={{
                        width: 190,
                        height: 150,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    }} />
                    <View style={{ backgroundColor: "orange", padding: 10 }}>
                        <Text style={{ fontSize: 18, color: "white", marginBottom: 5, fontWeight: "bold" }}>
                            Madurai
                        </Text>
                        <Text style={{ fontSize: 15, color: "white", marginBottom: 5, fontWeight: "bold" }}>
                            390km away
                        </Text>
                    </View>
                </Pressable>
            </ScrollView>


        </View>
    )
}

export default Cards

const styles = StyleSheet.create({})