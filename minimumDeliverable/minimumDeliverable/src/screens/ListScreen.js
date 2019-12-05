import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
    const friends=[
        {name: 'Friend1',age: '30' },
        {name: 'Friend2',age: '23' },
        {name: 'Friend3',age: '26' },
        {name: 'Friend4',age: '25' },
        {name: 'Friend5',age: '24' }
        
    ];
    return (
    <FlatList 
        //horizontal //bunu yazıp bırakmak dataları yanyana koy=true demek oluyor.
        //showsHorizontalScrollIndicator = {false} //altta scroll barı görmemeni saglıyor
        keyExtractor={(friends) => friends.name}
        data = {friends}
        renderItem ={({item}) => {
            return <Text style= {styles.textStyle}>{item.name + ' Age: ' + item.age}</Text>;            
        }}
    />
    );
}; 

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 25
    }
});

export default ListScreen;