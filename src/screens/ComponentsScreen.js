import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const name = "Deesha";
    return (
    <View> 
        <Text style={styles.textStyle_intro}>Getting started with React Native!</Text>
        <Text style={styles.textStyle_name}>My name is {name}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle_intro: { 
        fontSize: 45
    },
    textStyle_name: {
        fontSize: 20
    }
});

export default ComponentsScreen;