import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const credits = () => {
    const members=[
        {name: 'Ege Hoşgüngör'},
        {name: 'Khalil Alhabal'},
        {name: 'Nian Shao'},
        {name: 'Tiffany Lynn Seeley'},
        {name: 'Eve Li Bolan'},
        {name: 'Issa Smith'},
    ];
    return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Credits Screen
        </Text>
        <FlatList 
            keyExtractor={(members) => members.name}
            data = {members}
            renderItem ={({item}) => {
                return <Text style= {styles.names}>{item.name}</Text>;            
            }}
        />
    </View> 
    );
}; 

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#00CED1',
    },
    title: {
        color: '#00008B',
        fontSize: 25,
        margin: 24,
        fontWeight: 'bold',
        textAlign: 'center',
  },
    names:{
        fontSize: 25,
        color: '#ffffff',
        padding: 10,
        margin: 5,
        textAlign: 'center',
    }
});

export default credits;
