import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'

const EndScreen = ({ navigation }) => {


    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Success screen ",
            headerStyle: { backgroundColor: "#fd5c63" },
            headerTintColor: "#fff"
        })
    }, []);
    return (
        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            <Text style={{ color: "gray", fontSize: 18, fontWeight: "bold" }}>Wow ! You Registertion is Succesfull</Text>
            <Pressable style={{ backgroundColor: "#fd5c63", padding: 10, marginTop: 15, borderRadius: 10 }} onPress={() => navigation.navigate("Home")}>
                <Text style={{ color: "white", fontSize: 17 }}>Back to Home</Text>
            </Pressable>
        </View>
    )
}

export default EndScreen

const styles = StyleSheet.create({})