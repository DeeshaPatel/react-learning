import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {

    const [counter, setCounter] = useState(0);

    const increseCounter = () => {
        setCounter(counter + 1);
    }
    const decreseCounter = () => {
        setCounter(counter + 1);
    }

    return (
        <View>
            <Button title="Increse" onPress={increseCounter}/>
            <Button title="Decrease" onPress={decreseCounter}/>
            <Text>Current Count: {counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default CounterScreen;