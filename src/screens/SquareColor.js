import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

// Adding reducer for commented code

// const SquareColor = () => {
//     const [red, setRed] = useState(0);
//     const [blue, setBlue] = useState(0);
//     const [green, setGreen] = useState(0);

//     const COLOR_VALUE = 15;

//     const verifyValue = (color, change) => {
//         // color = red, blue, green
//         // change = +15, -15
//         switch(color) {
//             case 'red': 
//                 red + change > 255 || red + change < 0 ? null : setRed(red + change);
//                 return;
//             case 'blue':
//                 blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
//                 return;
//             case 'green':
//                 green + change > 255 || green + change < 0 ? null : setGreen(green + change);
//                 return;
//             default:
//                 return;
//         }
        
//     }

//     return (
//         <View>
//             <Text>Square Color Screen</Text>
//             <ColorCounter 
//                 onInc={() => verifyValue('red', COLOR_VALUE)} 
//                 onDec={() => verifyValue('red', -1 * COLOR_VALUE)} 
//                 color="Red"
//             />
//             <ColorCounter 
//                 onInc={() => verifyValue('green', COLOR_VALUE)}
//                 onDec={() => verifyValue('green', -1 * COLOR_VALUE)} 
//                 color="Green"
//             />
//             <ColorCounter
//                 onInc={() => verifyValue('blue', COLOR_VALUE)}
//                 onDec={() => verifyValue('blue', -1 * COLOR_VALUE)} 
//                 color="Blue"
//             />
//             <View 
//                 style={{ 
//                     height: 100, 
//                     width: 100, 
//                     backgroundColor:`rgb(${red},${green},${blue})` 
//                 }}
//             />
//         </View>
//     )
// };

const reducer = (state, action) => {
    // state === {red: num, green: num, blue: num}
    // action === {colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}

    // Community conventional names
    // colorToChange === type
    // amount === payload


    switch(action.type) {
        case 'change_red':
            // ...state is a copy of exisiting state object so the value will be {red: 0, green:0, blue:0} initially
            return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : { ...state, red: state.red + action.payload };
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : { ...state, green: state.green + action.payload };
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : { ...state, blue: state.blue + action.payload };
        default:
            return state;
    }
}
const COLOR_VALUE = 15;

const SquareColor = () => {

    const [state, runMyReducer] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const {red, green, blue } = state;

    return (
        <View>
            <ColorCounter 
                onInc={() => runMyReducer({ type: 'change_red', payload:  COLOR_VALUE})}
                onDec={() => runMyReducer({ type: 'change_red', payload:  -1 * COLOR_VALUE})}
                color = "red" 
            />
            <ColorCounter 
                onInc={() => runMyReducer({ type: 'change_blue', payload:  COLOR_VALUE})}
                onDec={() => runMyReducer({ type: 'change_blue', payload:  -1 * COLOR_VALUE})}
                color = "blue" 
            />
            <ColorCounter 
                onInc={() => runMyReducer({ type: 'change_green', payload:  COLOR_VALUE})}
                onDec={() => runMyReducer({ type: 'change_green', payload:  -1 * COLOR_VALUE})}
                color = "green" 
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