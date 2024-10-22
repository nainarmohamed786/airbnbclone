import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const PlaceExplain = ({ item }) => {

    const navigation = useNavigation();

    return (
        <View style={{ margin: 10, marginTop: 10 }}>
            <Pressable style={({ pressed }) => pressed && styles.pressed} android_ripple={{ color: "white" }} onPress={() => navigation.navigate("Reserve", { id: item.id })} >
                <Image source={{ uri: item.img }} style={{ width: "100%", height: 300, borderRadius: 10 }} />

                <View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
                        <Text style={{ fontSize: 15 }}>{item.location}</Text>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{item.price}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 3 }}>
                        <Text style={{ fontSize: 15, color: "silver" }}>{item.distance} km</Text>
                        <Text>dec 12-16 </Text>
                    </View>
                </View>
            </Pressable>

        </View>
    )
}

export default PlaceExplain

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.87
    }
})