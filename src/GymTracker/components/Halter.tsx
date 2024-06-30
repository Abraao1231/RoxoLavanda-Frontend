import { Text, View, Animated, ViewStyle } from 'react-native'
import React from 'react'
import { Barbell } from 'phosphor-react-native';
import { useEffect, useRef, PropsWithChildren,  } from 'react';
import colors from 'tailwindcss/colors';
import PulseLoader from 'react-native-pulse-loader';

const Pulse = require('react-native-pulse').default;

interface propsTreinando {
  seriesRestantes : number,
  numeroRep: number,
  intervalo: number,
  nome: string
}

function Halter (props: propsTreinando) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return {minito:mins, secs: secs}
  };
  const  tempo = formatTime(props.intervalo)
  
  return (

    <View className='justify-center items-center h-full'>

      <Text  className='pb-10 text-white text-3xl font-bold'>{props.nome}</Text>
      
      <View className='relative h-64 w-6h-64  justify-center items-center'>
      <Pulse color={colors.violet[600]} numPulses={5} diameter={250} speed={10} duration={1000} />
          <Barbell className="absolute" size={100} color='white'/>

      </View>
            
        
       

      

      
      <Text  className=' text-white text-2xl pt-10 font-bold'>Series restantes: {props.seriesRestantes}</Text>
      <Text className='text-white text-2xl pt-2 font-bold'>Número de repetições: {props.numeroRep}</Text>
      {/* <View className='w-3/4 pt-2'>
        <Text className='text-white text-xl text-center'>Tempo de descanso: {tempo.minito == 0 ? "" : `${tempo.minito} minutos`} {tempo.secs > 0 && tempo.minito > 0 ? `e ${tempo.secs} segundos`: ''}{tempo.secs > 0 && tempo.minito == 0 ? `${tempo.secs} segundos`: ''}  </Text>
      </View> */}

    </View>
  )
}
export default Halter;