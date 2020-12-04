import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import io from "socket.io-client";


const App = () => {

  // Use "ipconfig getifaddr en0" to find IP Address
  const localPort = "3001"
  const ipAddress = "192.168.1.125"
useEffect(function() {
  io(`http://${ipAddress}:${localPort}`)
}, [])


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
