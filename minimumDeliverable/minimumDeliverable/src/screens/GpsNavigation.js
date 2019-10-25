import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapView from 'react-native-maps';

export default class App extends Component {
  state = {
    location: null,
    errorMessage: null,
  };
  
  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
        loaded: true
      });
    } else {
      // only check the location if it has been granted
      // you also may want to wrap this in a try/catch as async functions can throw
      let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
      this.setState({ location, loaded: true, errorMessage: null });
    }
  };

  render () {
    // check to see if we have loaded
    if (this.state.loaded) {
      // if we have an error message show it
      if (this.state.errorMessage) {
        return (
          <View style={styles.container}>
            <Text>{JSON.stringify(this.state.errorMessage)}</Text>
          </View>
        );
      } else if (this.state.location) {
        // if we have a location show it
        return (
          <MapView
            style={{ flex: 1 }}
            region={{
              latitude: this.state.location.coords.latitude,
              longitude: this.state.location.coords.longitude,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1
            }}
          />
        );
      }
    } else {
      // if we haven't loaded show a waiting placeholder
      return (
        <View style={styles.container}>
          <Text>Waiting...</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#8cf2ff'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center'
  },

});