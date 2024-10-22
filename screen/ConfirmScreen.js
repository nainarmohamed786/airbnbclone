import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import Search from '../data/Search';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

const ConfirmScreen = ({ navigation }) => {

    const route = useRoute();

    const [add, setAdd] = useState(1);

    const FlexibleData = Search.find((serach) => serach.id === route.params.id);

    console.log(FlexibleData)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Confirm Screen ",
            headerStyle: { backgroundColor: "#fd5c63" },
            headerTintColor: "#fff"
        })
    }, []);

    const price = FlexibleData.price;
    const serviceFee = 20;
    const taxes = 45;
    const res = price.replace(/\D/g, "");
    const price_with_days = res * 1;
    const totalPrice = (price_with_days + serviceFee + taxes) * add;
    console.log(totalPrice)

    return (
        <View style={{ padding: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={{ uri: FlexibleData.img }} style={{ width: 100, height: 100, borderRadius: 10, flex: 1.5 }} />
                <View style={{ marginLeft: 10, width: "100%", flex: 3 }}>
                    <Text style={{ color: "gray", fontSize: 14, marginTop: 10 }}>{FlexibleData.location}</Text>
                    <Text style={{ marginTop: 10, fontSize: 14, fontWeight: "bold" }}>{FlexibleData.title.substring(0, 30)}....</Text>
                    <Text style={{ marginTop: 10, fontSize: 14 }}>{FlexibleData.description}</Text>
                </View>
            </View>

            <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between" }}>
                <View>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>this is a rare find</Text>
                    <Text style={{ fontSize: 15, marginTop: 6 }}>{FlexibleData.person}'s on Airbnb is usually fully booked</Text>
                </View>
                <FontAwesome name="diamond" size={24} color="orange" />
            </View>

            <Text style={{ borderBottomColor: "gray", borderBottomWidth: 2 }} />
            <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10, }}>Your Trip</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                <View>

                    <View style={{ marginTop: 10, }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Guests</Text>
                        <Text style={{ fontSize: 16, color: "gray", marginTop: 4 }}>1 Guests</Text>
                    </View>

                </View>
                <View>
                    <View style={{ backgroundColor: "#fd5c63", flexDirection: "row", justifyContent: "center", alignItems: "center", width: 130, justifyContent: "space-between", padding: 5, paddingHorizontal: 20, borderRadius: 10 }}>
                        <Pressable onPress={() => setAdd(Math.max(1, add - 1))}>
                            <AntDesign name="minus" size={18} color="white" />

                        </Pressable>
                        <Text style={{ fontSize: 20, color: "white" }}>{add}</Text>
                        <Pressable onPress={() => setAdd(add + 1)}>
                            <AntDesign name="plus" size={18} color="white" />
                        </Pressable>
                    </View>
                </View>

            </View>

            <Text style={{ borderBottomColor: "gray", borderBottomWidth: 2 }} />

            <View>
                <Text style={{ fontSize: 17, color: "gray", marginTop: 10 }}>Price Details</Text>
                <View style={{ marginTop: 7, flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 14, fontWeight: "bold" }}>{FlexibleData.price} X 1 days</Text>
                    <Text style={{ fontWeight: "bold", fontSize: 15, color: "gray" }}>£{res * 1}</Text>
                </View>
                <View style={{ marginTop: 7, flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 14, fontWeight: "bold" }}>Service Fee</Text>
                    <Text style={{ fontWeight: "bold", fontSize: 15, color: "gray" }}>£20</Text>
                </View>
                <View style={{ marginTop: 7, flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 14, fontWeight: "bold" }}> Occupancy taxes and fee</Text>
                    <Text style={{ fontWeight: "bold", fontSize: 15, color: "gray" }}>£45</Text>
                </View>
                <View style={{ marginTop: 7, flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 14, fontWeight: "bold" }}> Total Price(Pounds)</Text>
                    <Text style={{ fontWeight: "bold", fontSize: 15, color: "gray" }}>{totalPrice}</Text>
                </View>

            </View>

            <Text style={{ borderBottomColor: "gray", borderBottomWidth: 2 }} />

            <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 18 }}>Cancellation Policy</Text>
                <Text style={{ fontSize: 16, color: "gray", marginTop: 7 }}>Free Cancellation for 48 hours, refund minus the service fee</Text>
                <Text style={{ fontSize: 16, color: "gray", marginTop: 7 }}>our policy does not cover policy disruption caused by COVID-19</Text>
            </View>

            <Text style={{ borderBottomColor: "gray", borderBottomWidth: 2 }} />

            <Pressable style={{ backgroundColor: "#fd5c63", marginTop: 20, width: 200, padding: 10, borderRadius: 10, marginLeft: "auto", marginRight: "auto" }} onPress={() => navigation.navigate("end")}>
                <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
                    Confirm and Pay
                </Text>
            </Pressable>

        </View>
    )
}

export default ConfirmScreen

const styles = StyleSheet.create({})