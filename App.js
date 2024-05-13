import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PesananBaru from './src/PesananBaru';// Pastikan path ini sesuai dengan lokasi file PesananBaru.js Anda
import HomeScreen from './src/HomeScreen'; // Ini adalah layar utama Anda
import RincianPesanan from './src/RincianPesanan';
import TambahItem from "./src/TambahItem";
import  BarCodeScanner from './src/BarcodeScanner';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PesananBaru" component={PesananBaru} />
        <Stack.Screen name="RincianPesanan" component={RincianPesanan} />
        <Stack.Screen name="TambahItem" component={TambahItem}/>
        <Stack.Screen name="BarcodeScanner" component={BarCodeScanner}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;