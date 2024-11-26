import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/GeoWaste.png')} style = {{width: 300, height: 300}}/>
      <Text style={styles.text}>GeoWaste</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },

  text: {
    fontSize: 30,
    color: '#a4ff80',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },


});

