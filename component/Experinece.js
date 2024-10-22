import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Experinece = () => {
    return (
        <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                Discover Airbnb Experiences
            </Text>

            <ImageBackground
                style={{
                    width: 335,
                    height: 450,
                    resizeMode: "contain",
                    marginRight: 20,
                    marginTop: 20
                }}
                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcIhhZoVAOPiN5Mggdz1NdjW-5nvZvTzFog&usqp=CAU" }}
            >
                <View style={{ padding: 20 }}>
                    <Text style={{
                        fontSize: 30,
                        color: "white",
                        fontWeight: "bold",
                        width: 260,
                    }}>
                        Things to do on your Trip
                    </Text>

                    <Pressable style={{ marginTop: 40, backgroundColor: "white", padding: 20, width: 150, borderRadius: 10 }}>
                        <Text style={{ color: "black", fontSize: 17, fontWeight: "bold", textAlign: "center" }}>Explore More</Text>
                    </Pressable>
                </View>


            </ImageBackground>
        </View>
    )
}

export default Experinece

const styles = StyleSheet.create({})