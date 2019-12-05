import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const credits = () => {
    const members=[
        {name: 'Khalil Alhabal'},
        {name: 'Tiffany Lynn Seeley'},
        {name: 'Ege Hoşgüngör'},
        {name: 'Nian Shao'},
        {name: 'Eve Li Bolan'},
        {name: 'Alexis Hughes'},
        {name: 'Issa Smith'},
        {name: 'Jeong Minoh'}
        
    ];
    return (
    <FlatList 
        keyExtractor={(members) => members.name}
        data = {members}
        renderItem ={({item}) => {
            return <Text style= {styles.textStyle}>{item.name}</Text>;            
        }}
    />
    );
}; 

const styles = StyleSheet.create({
    textStyle:{
        fontSize:15,
        marginVertical: 10
    }
});

export default credits;