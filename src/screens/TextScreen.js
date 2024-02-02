import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
        <Text>Enter Name: </Text>
            <TextInput style={styles.input} 
                autoCapitalize="none" 
                autoCorrect={false}
                value={name}
                onChangeText={(newVal) => setName(newVal)}
            />
        <Text>My name is {name}</Text>
        <Text>Enter Password: </Text>
            <TextInput style={styles.input} 
                autoCapitalize="none" 
                autoCorrect={false}
                value={password}
                onChangeText={(newVal) => setPassword(newVal)}
            />
            {password.length < 5 ? <Text>Password must be more than 5 characters</Text> : null}

        </View> 
    )
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        padding:10,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;