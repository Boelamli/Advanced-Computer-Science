import React, {useContext} from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, View, Dimensions, ActivityIndicator, Text} from 'react-native';

import {Context as LocationContext} from "../context/LocationContext";

export default class App extends React.Component {
    state = {
        mapLoaded: false,
        region: {
            latitude: 50.860,
            longitude: -0.0899,
            longitudeDelta: 0.01,
            latitudeDelta: 0.04,
        }
    }

    componentDidMount() {
        this.setState({mapLoaded: true});
    }

    onRegionChangeComplete = (region) => {
        this.setState({region});
       // console.log(region);
        //Make the fetch request here! Post your location and get some points from Database.
    }

    render() {
        const markers = [];
        if (!this.state.mapLoaded) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#0000ff"/>
                    <Text>Loading...</Text>
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <MapView
                    region={this.state.region}
                    style={styles.mapStyle}
                    onRegionChangeComplete={this.onRegionChangeComplete} //Whenever user stop to change region, sync with setState()

                >
                    {markers.map(markers => (
                        <MapView.Marker
                            coordinate={{'latitude': markers.Latitude, 'longitude': markers.Longitude}}
                        />
                    ))}
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});