import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
    // state === {count: 0} 
    // action === { type: 'inc' || 'dec', payload: 1}

    switch(action.type) {
        case 'inc':
            return {...state, count: state.count + action.payload};
        case 'dec':
            return {...state, count: state.count - action.payload};
        default:
            return state;

    }
}

const CounterScreen = () => {

    // const [counter, setCounter] = useState(0);
    // use of reducer for practice. 
    const [state, dispatch] = useReducer(reducer, {count: 0});

    // const increseCounter = () => {
    //     setCounter(counter + 1);
    // }
    // const decreseCounter = () => {
    //     setCounter(counter + 1);
    // }

    return (
        <View>
            {/* <Button title="Increse" onPress={increseCounter}/>
            <Button title="Decrease" onPress={decreseCounter}/> */}
            <Button title="Increse" 
                onPress={() => {
                    dispatch({ type: 'inc', payload: 1})
                }}
             />
            <Button title="Decrease" 
                 onPress={() => {
                    dispatch({ type: 'dec', payload: 1})
                }}
            />
            <Text>Current Count: {state.count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default CounterScreen;