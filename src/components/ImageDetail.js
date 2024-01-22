import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = (props) => {
    return (
        <View style={styles.defaultLayout}>
            <Image style={styles.image} source={props.imageSource}/>
            <Text>{props.title}</Text>
        </View>
    
    )
};

const styles = StyleSheet.create({
    defaultLayout: {
        padding: 10,
    },
    image: {
        height: 100,
        width:130,
        resizeMode: "stretch",
    }
});

export default ImageDetail; 