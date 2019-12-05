import React, {useContext} from 'react';
import {StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import {ListItem, Button} from 'react-native-elements';
import {Context as TrackContext} from '../context/TrackContext';
import EgeMap from "../components/EgeMap";
import { FontAwesome } from '@expo/vector-icons';

const MapScreen = ({navigation}) => {
    const {state, showAllData} = useContext(TrackContext);


    return (
        <>
            <EgeMap/>
            <Button
                title='Try me!'
                onPress={showAllData}
            />
        </>
    );
};

MapScreen.navigationOptions = {
    title: 'Map',
    tabBarIcon: <FontAwesome name="map" size={20} />
};

const styles = StyleSheet.create({});

export default MapScreen;
