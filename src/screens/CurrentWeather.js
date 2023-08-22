import React from "react"
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    temperature,
    feels,
    hiLowWrapper,
    hiLow,
    bodyWrapper,
    description,
    message
  } = styles

  return (
    <SafeAreaView style={wrapper}>
    <View style={container}>
      <Feather name="sun" size={100} color="black" />
      <Text style={temperature}>6</Text>
      <Text style={feels}>Feels like 5</Text>
      <RowText 
        messageOne={'High: 8'}
        messageTwo={'Low: 6'}
        containerStyles={hiLowWrapper}
        messageOneStyles={hiLow}
        messageTwoStyles={hiLow}
      />
    </View>
    <RowText 
        messageOne={"It's sunny"}
        messageTwo={"It's perfect t-shirt weather"}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    {/* <View style={bodyWrapper}>
      <Text style={description}>It's sunny</Text>
      <Text style={message}>It's perfect t-shirt weather</Text>        
    </View> */}

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  temperature: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  hiLow: {
    color: 'black',
    fontSize: 20
  },
  hiLowWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
});

export default CurrentWeather