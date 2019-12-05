import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = props => {
  return (
  <View>
      <Text style={styles.text}>Welcome to the Good Place</Text>
      <Button 
        onPress= {() => props.navigation.navigate('Navigation')} 
        title= "Navigation" 
        />
        
      <Button 
        onPress= {() => props.navigation.navigate('Credits')} 
        title= "About Us" 
        />
      
      
        
  </View> 
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25
  }
});

export default HomeScreen;
