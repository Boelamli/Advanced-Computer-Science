import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Slider from "react-native-slider";
import MapView, { Marker, ProviderPropType } from 'react-native-maps';
//added below import instead of using const require
import UK_DATA from '../Data/pp-complete-append-lat-long-notComplete-slim.json'

const { width, height } = Dimensions.get('window');
//changed from this to Data directory below
//also switched to using import statement instead - test out!
//const UK_DATA = require('../Data/pp-complete-append-lat-long-notComplete-slim.json');
const ASPECT_RATIO = width / height;
const LATITUDE = 50.82360;
const LONGITUDE = -0.13836;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//testing code below; not functional atm
function heatColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

class DataMarkers extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [
      ],
      priceMarkers: [],
      dummyMarkers: [
        {
          coordinate: {
            latitude: 50.8169,
            longitude: -0.1367,
          },
          title: "btn pier",
          price: 80000,
        },
        {
          coordinate: {
            latitude: 50.8289,
            longitude: -0.1410,
          },
          title: "btn station",
          price: 500000,
        },
        {
          coordinate: {
            latitude: 50.8351,
            longitude: -0.1710,
          },
          title: "hove station",
          price: 100000,
        },
      ],
      data: [
        {
          id: UK_DATA.FIELD1,
          Price: UK_DATA.Price,
          Transfer_Date: UK_DATA.Transfer_Date,
          Postcode: UK_DATA.Postcode,
          Property_Type: UK_DATA.Property_Type,
          Old_New: UK_DATA.Old_New,
          Town_City: UK_DATA.Town_City,
          Concat_PAON_Street_Postcode: UK_DATA.Concat_PAON_Street_Postcode,
          coordinate: {
            latitude: UK_DATA.address_lat,
            longitude: UK_DATA.address_long,
          }
        }
      ],
      lth: UK_DATA.length,
      sliderValue: 0,
      testData: [],
      //sliderComplete: 0,
    };
  }

  onMapPress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,
          color: randomColor(),
        },
      ],
    });

    for (var i = UK_DATA.length - 1; i >= 0; i--) {
      this.setState({
        testData: [
          ...this.state.testData,
          {
            coordinate: {
              lat: UK_DATA[i].address_lat,
              lng: UK_DATA[i].address_long,
            },
            key: UK_DATA[i].FIELD1,
            price: UK_DATA[i].Price,
          }
        ]
      })
    }
  }

  updateMarkers() {
    const dummyMarkers = this.state.dummyMarkers; 
    const sliderValue = this.state.sliderValue;
    const newMarkers = [];
    
    for (var i; i < dummyMarkers.length; i++){
      if (dummyMarkers[i].price < sliderValue+10000){
        newMarkers.push(dummyMarkers[i])
      };
    }
    this.setState({
      priceMarkers: [
        ...this.state.priceMarkers, 
        {
          newMarkers
        }
      ]
    });
  }

  render() {
    return (
      <View style={styles.container}>
        
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={this.state.region}
          onPress={e => this.onMapPress(e)}
        >
          {this.state.markers.map(marker => (
            <Marker
              key={marker.key}
              coordinate={marker.coordinate}
              pinColor={marker.color}
            />
          ))}
          {UK_DATA.map((someMarker, index) => (
            <Marker
              key={someMarker.FIELD1}
              coordinate={this.state.dummyMarkers.coordinate}
              //pinColor={someMarker.color}
            >
              <View style={styles.priceMarkers}>
                <Text>{someMarker.Price}</Text>
              </View>
            </Marker>
          ))}
        </MapView>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.setState({ markers: [] })}
            style={styles.bubble}
          >
            <Text>tap map to insert marker</Text>
            <Text>tap here to erase</Text>
            <Text>{this.state.dummyMarkers[0].price}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sliderContainer}>
          <Slider
            value={this.state.sliderValue}
            onValueChange={sliderValue => this.setState({ sliderValue })}
            minimumValue={0}
            maximumValue={1000000}
            minimumTrackTintColor='#FF4500'
            maximumTrackTintColor='#00CED1'
            thumbTintColor='#FF7F50'
            step={1000}
            //>onSlidingComplete={() => this.updateMarkers()}
          />
          <TouchableOpacity
            style={styles.bubble}
            //onPress={() => this.updateMarkers()}
          >
            <Text>Price: {this.state.sliderValue}</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

DataMarkers.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
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
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  priceMarkers: {
    height: 30,
    width: 100,
    borderWidth: 2,
    borderColor: '#FF4500',
    borderRadius: 10/2,
    overflow: 'hidden',
    backgroundColor: '#FF7F50',
  },
  pinStyle: {
    fontColor: '#F0FFFF',
    alignItems: 'center',
  },
  sliderContainer: {
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
  }
});

export default DataMarkers;