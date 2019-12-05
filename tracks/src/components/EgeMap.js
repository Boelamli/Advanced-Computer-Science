import React, {useContext} from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, View, Dimensions, ActivityIndicator, Text} from 'react-native';
import trackerApi from "../api/tracker";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            // list: [{
            //     "AVG_Price": 485000,
            //     "Latitude": 50.769929,
            //     "Longitude": 0.254227,
            //     "Postcode": "BN20 8EP",
            //     "_id": "5dddbd709f268bac4efd408c",
            // },
            //     {
            //         "AVG_Price": 717000,
            //         "Latitude": 50.757016,
            //         "Longitude": 0.266637,
            //         "Postcode": "BN20 7QN",
            //         "_id": "5dddbd709f268bac4efd403d",
            //     }],
            mapLoaded: false,
            userRegion: {
                latitude: 50.860,
                longitude: -0.0899,
                longitudeDelta: 0.01,
                latitudeDelta: 0.04,
            }
        };

    };

    updateState = (values) => {
        this.setState(values);
    }


    componentDidMount() {
        //this.setState({mapLoaded: true});
        trackerApi.get('/locationData2').then(response => {
            //console.log(response);
            this.setState({mapLoaded: true});
            this.setState({
                list: response.data
            });
        });
    }

    onRegionChangeComplete = (userRegion) => {
        this.setState({userRegion}); //It caused a delay and bugginess in map.
        console.log(userRegion);
        //Make the fetch request here! Post your location and get some points from Database.
    };

    render() {
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
                    initialRegion={this.state.userRegion}
                    //region={this.state.userRegion}
                    style={styles.mapStyle}
                    onRegionChangeComplete={this.onRegionChangeComplete} //Whenever user stop to change region, sync with setState()
                >
                    {this.state.list.map(list => (
                        <MapView.Marker
                            coordinate={{'latitude': list.Latitude, 'longitude': list.Longitude}}
                            key={list._id}
                            title={" " + list.AVG_Price}
                            onCalloutPress={this.markerClick}>
                            <MapView.Callout>
                                <View style={styles.calloutText}>
                                    <Text> Average Price here is {list.AVG_Price}</Text>
                                </View>
                            </MapView.Callout>

                        </MapView.Marker>
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