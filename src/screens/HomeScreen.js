import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {

  return (
  <View>
    <Text style={styles.text}>React</Text>

    <Button 
      color="#f194ff" 
      title="Go to Components Demo" 
      onPress={() => navigation.navigate('Components') } 
    />
    
    <TouchableOpacity 
      style={styles.buttonText}
      onPress={() => navigation.navigate('List')} >
        <Text style={styles.buttonText}>Go to List Demo</Text>
    </TouchableOpacity>

    <Button 
      color="#f194ff" 
      title="Go to Image Demo" 
      onPress={() => navigation.navigate('Images') } 
    />

<Button 
      color="#f194ff" 
      title="Go to Counter Demo" 
      onPress={() => navigation.navigate('Counter') } 
    />

  </View>
  );
};
  
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  buttonText: {
    fontSize: 20,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 2,
    margin:10,
    borderRadius: 20,
  }
});

export default HomeScreen;
