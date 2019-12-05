import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen =() => {
    const greetings = 'You can call me Hoşgüngör';
    const goodbye = <Text>Hadi sie</Text>;
return (
    <View>
        <Text style ={styles.textStyle}>Getting Start with React Native</Text>
        <Text style ={styles.anotherTextStyle}>{greetings}</Text>
    </View>
);
};

const styles = StyleSheet.create({
textStyle:{
    fontSize: 45

},
anotherTextStyle:{
    fontSize:20
}
});

export default ComponentsScreen;