import { Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Search from '../data/Search';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



const ReserveScreen = ({ route, navigation }) => {

    const id = route.params.id;

    const FlexibleData = Search.find((serach) => serach.id === id);


    return (

        <>


            <ScrollView>
                <Image source={{ uri: FlexibleData.img }} style={{ width: "100%", height: 300 }} />
                <View style={{ padding: 10 }}>
                    <Text style={{ fontSize: 22, fontWeight: "800" }}>{FlexibleData.title}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>

                        <Ionicons name="star" size={24} color="#C71545" style={{ marginHorizontal: 3 }} />
                        <Text style={{ marginRight: 10, fontSize: 16 }}>{FlexibleData.review}</Text>

                        <Text style={{ color: "gray" }}>{FlexibleData.location}</Text>
                    </View>

                    <Text style={{ borderBottomColor: "#D8D8D8", borderBottomWidth: 2 }} />

                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                        <View>
                            <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>This is a rare find.</Text>
                            <Text style={{ marginTop: 5, fontSize: 15, width: "90%" }}>{FlexibleData.person}'s name on Airbnb is usually fully booked</Text>
                        </View>
                        <View>
                            <Ionicons name="diamond-outline" size={24} color="orange" />
                        </View>
                    </View>
                    <Text style={{ borderBottomColor: "#D8D8D8", borderBottomWidth: 2 }} />

                    <View style={{ marginTop: 10 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Hosted by {FlexibleData.person}</Text>
                            <Image source={{ uri: FlexibleData.image }} style={{ width: 50, height: 50, borderRadius: 50 }} />
                        </View>

                        <Text style={{ fontSize: 12, color: "violet" }}>{FlexibleData.description}</Text>
                    </View>

                    <Text style={{ borderBottomColor: "#D8D8D8", borderBottomWidth: 2 }} />

                    <View >
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                            <Ionicons name="home" size={24} color="black" />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 17, fontWeight: "bold" }}>Entire Home</Text>
                                <Text style={{ fontSize: 15, color: "gray" }}>You will have the treehouse to yourself</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                            <Ionicons name="happy" size={24} color="black" />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 17, fontWeight: "bold" }}>Enhanced Clean</Text>
                                <Text style={{ fontSize: 15, color: "gray" }}>You will have the treehouse to yourself</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                            <Ionicons name="location" size={24} color="black" />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 17, fontWeight: "bold" }}>Great Location</Text>
                                <Text style={{ fontSize: 15, color: "gray" }}>You will have the treehouse to yourself</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                            <Ionicons name="bag-remove" size={24} color="black" />
                            <Text style={{ fontSize: 15, color: "gray", marginLeft: 10 }}> Free Cancellation Available</Text>
                        </View>
                    </View>

                    <Text style={{ borderBottomColor: "#D8D8D8", borderBottomWidth: 2 }} />

                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>What this place Offers</Text>

                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, marginHorizontal: 20 }}>
                            <MaterialCommunityIcons name="silverware-fork-knife" size={24} color="black" />
                            <Text style={{ fontSize: 16, fontWeight: "500", marginLeft: 10 }}>Kitchen</Text>
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, marginHorizontal: 20 }}>
                            <Ionicons name="wifi" size={24} color="black" />
                            <Text style={{ fontSize: 16, fontWeight: "500", marginLeft: 10 }}>Wi-fi</Text>
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, marginHorizontal: 20 }}>
                            <AntDesign name="car" size={24} color="black" />
                            <Text style={{ fontSize: 16, fontWeight: "500", marginLeft: 10 }}>Free Parking Premises</Text>
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, marginHorizontal: 20 }}>
                            <MaterialIcons name="pets" size={24} color="black" />
                            <Text style={{ fontSize: 16, fontWeight: "500", marginLeft: 10 }}>Pets</Text>
                        </View>

                    </View>

                    <Text style={{ borderBottomColor: "#D8D8D8", borderBottomWidth: 2 }} />

                </View>

            </ScrollView >

            <View style={{ backgroundColor: "#C71545", padding: 20, flexDirection: "row", justifyContent: "space-between", elevation: 10, alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>{FlexibleData.total}</Text>
                <Pressable onPress={() => navigation.navigate("confirm", { id: id })} style={{ backgroundColor: "white", padding: 10, paddingHorizontal: 20, borderRadius: 10, elevation: 10 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        Reserve
                    </Text>
                </Pressable>
            </View>

        </>
    )
}

export default ReserveScreen

const styles = StyleSheet.create({})