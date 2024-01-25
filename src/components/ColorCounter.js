import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onInc, onDec }) => {
    return (
        <View>
            <Text style={styles.textStyle}>{color}</Text>
            <Button onPress={() => onInc()} title={`Increase ${color}`}/>
            <Button onPress={() => onDec} title={`Decrease ${color}`}/>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
    }
});

export default ColorCounter;