import React, {Component} from 'react';
import {Button} from 'react-native-elements';
import {
    Text, 
    View, 
    StyleSheet, 
    AppRegistry,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import MapView, {
  MAP_TYPES, 
  ProviderPropType
} from 'react-native-maps';
//import Constants from 'expo-constants'

const {width, height} = Dimensions.get('window')
const SCREEN_WIDTH = width
const SCREEN_HEIGHT = height
const ASPECT_RATIO = width / height
const LATTITUDE_DELTA = 0.01
const LONGITUDE_DELTA =  LATTITUDE_DELTA * ASPECT_RATIO

export default class App extends Component {

    constructor(props){
        super(props)

        this.state = {
            initialPosition: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0,
            },
            markerPosition: {
                latitude: 0,
                longitude: 0,
            },
        }
    }

    watchID: ?number = null

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)

            var initialRegion = {
                latitude: lat,
                longitude: long,
                latitudeDelta: LATTITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }

            this.setState({initialPosition: initialRegion})
            this.setState({markerPosition: initialRegion})
        },
        (error) => alert(JSON.stringify(error)),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})

        this.watchID = navigator.geolocation.watchPosition((position) => {
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)
            var lastRegion = {
                latitude: lat,
                longitude: long,
                longitudeDelta: LONGITUDE_DELTA,
                latitudeDelta: LATTITUDE_DELTA,
            }

            this.setState({initialPosition: lastRegion})
            this.setState({markerPosition: lastRegion})
        })
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID)
    }

    render(){
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={this.state.initialPosition}>
                    <MapView.Marker
                        coordinate={this.state.markerPosition}>
                        <View style={styles.radius}>
                            <View style={styles.marker}>
                            </View>
                        </View>
                    </MapView.Marker>
                </MapView>
                <View style={[styles.bubble, styles.latlng]}>
                  <Text style={styles.centeredText}>
                    {this.state.initialPosition.latitude.toPrecision(7)},
                    {this.state.initialPosition.longitude.toPrecision(7)},
                    Current Location
                  </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    radius: {
        height: 30,
        width: 30,
        borderRadius: 50 / 2,
        overflow: 'hidden',
        backgroundColor: 'rgba(0,122,255,1.0)',
        borderWidth: 1,
        borderColor: 'rgba(0,112, 255,1.0)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    marker: {
        height: 10,
        width: 10,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 20 /2,
        overflow: 'hidden',
        backgroundColor: '#007AFF',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    map: {
        left:0,
        right:0,
        top:0,
        bottom: 0,
        position: 'absolute',
    },
    btn: {
        flexDirection: 'row',
    },
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    latlng: {
        width: 200,
        alignItems: 'stretch',
    },
    centeredText: { 
        textAlign: 'center' 
    },
});