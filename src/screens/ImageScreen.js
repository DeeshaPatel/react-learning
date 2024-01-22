import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Cat" imageSource={require('../../assets/cat.jpeg')}/>
            <ImageDetail title="Cow" imageSource={require('../../assets/cow.jpeg')}/>
            <ImageDetail title="Dog" imageSource={require('../../assets/dog.jpeg')}/>
            <ImageDetail title="Camel" imageSource={require('../../assets/camel.jpeg')}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;