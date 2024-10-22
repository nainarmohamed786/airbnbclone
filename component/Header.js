import { ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'

const Header = () => {

    const navigation = useNavigation();
    return (
        <View>
            <ImageBackground
                source={{ uri: "https://wallpapersmug.com/download/1280x900/3126d4/outing-campfire-tent-night.jpg" }}
                style={{
                    height: 450,
                    width: "100%",
                }}
            >
                <View style={{ padding: 5, backgroundColor: "white", width: 220, marginTop: 50, borderRadius: 30, marginLeft: "auto", marginRight: "auto", flexDirection: "row", alignItems: "center" }}>
                    <Ionicons name="search" size={24} color="#C71545" />
                    <TextInput placeholder='Where do you to go' style={{ marginHorizontal: 10, fontSize: 16, color: "black" }} />
                </View>

                <Pressable onPress={() => navigation.navigate("search")} style={{ backgroundColor: "white", padding: 10, marginBottom: "auto", marginTop: "auto", width: 150, borderRadius: 10, marginLeft: "auto", marginRight: "auto" }}>
                    <Text style={{ color: "#C71545", textAlign: "center", fontSize: 16, fontWeight: "bold" }}>I'm Flexible</Text>
                </Pressable>

                <View style={{ marginLeft: "auto", marginRight: "auto", marginBottom: 20 }}>
                    <Text style={{ color: "white", textAlign: "center", fontSize: 20, fontWeight: "bold" }}>Not Sure Where to Go?</Text>
                    <Text style={{ color: "white", textAlign: "center", fontSize: 20, fontWeight: "bold" }}>Perfect</Text>
                </View>

            </ImageBackground>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})