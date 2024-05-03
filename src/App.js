import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PesananBaru from './PesananBaru';// Pastikan path ini sesuai dengan lokasi file PesananBaru.js Anda
import HomeScreen from './HomeScreen'; // Ini adalah layar utama Anda
import RincianPesanan from './RincianPesanan';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PesananBaru" component={PesananBaru} />
        <Stack.Screen name="RincianPesanan" component={RincianPesanan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;