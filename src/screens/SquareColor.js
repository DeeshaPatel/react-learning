import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareColor = () => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    const COLOR_VALUE = 15;

    const verifyValue = (color, change) => {
        // color = red, blue, green
        // change = +15, -15
        switch(color) {
            case 'red': 
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            default:
                return;
        }
        
    }

    return (
        <View>
            <Text>Square Color Screen</Text>
            <ColorCounter 
                onInc={() => verifyValue('red', COLOR_VALUE)} 
                onDec={() => verifyValue('red', -1 * COLOR_VALUE)} 
                color="Red"
            />
            <ColorCounter 
                onInc={() => verifyValue('green', COLOR_VALUE)}
                onDec={() => verifyValue('green', -1 * COLOR_VALUE)} 
                color="Green"
            />
            <ColorCounter
                onInc={() => verifyValue('blue', COLOR_VALUE)}
                onDec={() => verifyValue('blue', -1 * COLOR_VALUE)} 
                color="Blue"
            />
            <View 
                style={{ 
                    height: 100, 
                    width: 100, 
                    backgroundColor:`rgb(${red},${green},${blue})` 
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create();

export default SquareColor;