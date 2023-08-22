import React from 'react'
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View } from 'react-native'
import { Feather } from '@expo/vector-icons';
import IconText from '../components/IconText';

const City = () => {
  const {
    container,
    cityName,
    cityText,
    countryName,
    imageLayout,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout
  } = styles


  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city.jpg')}
        style={imageLayout}     
      >
        <Text style={[cityText, cityName]}>New York</Text>
        <Text style={[cityText, countryName]}>USA</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText 
            iconName={'user'}
            iconColor={'white'}
            bodyText={'30,000'}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText 
          iconName={'sunrise'} 
          iconColor={'white'}
          bodyText={'10:46:58am'}
          bodyTextStyles={riseSetText}
          />
          <IconText 
          iconName={'sunset'} 
          iconColor={'white'}
          bodyText={'18:26:58pm'}
          bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  imageLayout: {
    flex: 1
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'white'
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  riseSetText: {
    fontSize: 20,
    color: 'white'
  }
})

export default City