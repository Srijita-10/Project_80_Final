import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  ImageBackgrounda,
  ImageBackground,
} from 'react-native';
import { WebView } from 'react-native-webview';

export default class StarMapScreen extends Component {
  constructor() {
    super();
    this.state = {
      longitude: '',
      latitude: '',
    };
  }
  render() {
    const { longitude, latitude } = this.state;
    const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`;
    return (
      <View style={ styles.container }>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/stars.gif')}
          style={styles.backgroundImage}>
          <View style={{ flex: 0.3, marginTop: 20, alignItems: 'center' }}>
            <Text style={styles.titleText}>Star Map</Text>
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter your longitude"
              placeholderTextColor="white"
              onChangeText={(text) => {
                this.setState({
                  longitude: text,
                });
              }}
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter your latitude"
              placeholderTextColor="white"
              onChangeText={(text) => {
                this.setState({
                  latitude: text,
                });
              }}
            />
          </View>
        </ImageBackground>
        <WebView
          scalesPageToFit={true}
          source={{ uri: path }}
          style={{ marginTop: 20, marginBottom: 20 }}
        />
      </View>
      /*<NavigationContainer>
      <Switch.Navigator initialRouteName="StarMap" screenOptions={{
        headerShown: false
      }}>
        <Switch.Screen name="StarMap" component={StarMapScreen} />
        <Switch.Screen name="Home" component={HomeScreen} />
      </Switch.Navigator>
    </NavigationContainer>*/
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#361485'
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
    alignContent: 'center',
  },
  inputStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    textAlign: 'center',
    color: 'white',
    width: 200, 
  },
});
   