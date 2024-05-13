import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold} from '@expo-google-fonts/inter'


import { Routes } from './routes';


export default function App() {
  


  return (
    <>
      <Routes/>
      <StatusBar barStyle='light-content' backgroundColor='transparent'  translucent/>
    </>
  );
}

