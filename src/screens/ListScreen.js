import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { BounceIn } from "react-native-reanimated";

const ListScreen = () => {
    const friends = [
        {name: 'Deesha', age: '25'}, 
        {name: 'Mina', age: '30'}, 
        {name: 'Maryam', age: '40'}, 
        {name: 'Hezal', age: '9'},
        {name: 'Manvit', age: '5'},
        {name: 'Hiyan', age: '5'},
        {name: 'Deesha_p', age: '25'}, 
        {name: 'Mina_p', age: '30'}, 
        {name: 'Maryam_p', age: '40'}, 
        {name: 'Hezal_p', age: '9'},
        {name: 'Manvit_p', age: '5'},
        {name: 'Hiyan_p', age: '5'}
    ];

    return (
        <FlatList 
        // horizontal
        // showsHorizontalScrollIndicator = {false}
        keyExtractor={friend => friend.name}
        data={friends} 
        renderItem={({item}) => {
            return <Text style={styles.textStyle}>{item.name} {item.age}</Text>
        }}
        />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;