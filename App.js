import * as React from 'react';

import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PesananBaru from './src/PesananBaru';// Pastikan path ini sesuai dengan lokasi file PesananBaru.js Anda
import HomeScreen from './src/HomeScreen'; // Ini adalah layar utama Anda
import RincianPesanan from './src/RincianPesanan';
import TambahItem from "./src/TambahItem";
import  BarCodeScanner from './src/BarcodeScanner';
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './src/screens'
import { theme } from './src/core/theme';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <Provider theme={theme}> 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen"
      screenOptions={{
        headerShown: false,
      }}
      >
         <Stack.Screen 
         name="StartScreen"
          component={StartScreen} 
          />
          <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen}
           />
           <Stack.Screen 
           name="RegisterScreen" 
           component={RegisterScreen} 
           />
          <Stack.Screen 
          name="Dashboard" 
          component={Dashboard} 
          />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        <Stack.Screen
         name="Home" 
         component={HomeScreen} 
         />

        <Stack.Screen 
        name="PesananBaru"
         component={PesananBaru}
          />

        <Stack.Screen 
        name="RincianPesanan" 
        component={RincianPesanan}
         />

        <Stack.Screen
         name="TambahItem" 
         component={TambahItem}
         />

        <Stack.Screen
         name="BarcodeScanner" 
         component={BarCodeScanner}
         />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

