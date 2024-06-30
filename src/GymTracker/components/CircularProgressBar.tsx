import { Text, StyleSheet, View } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

interface PropsCounter {
  tempo: number
  handleEndTimer: Function

}

function CircularProgressBar ({tempo, handleEndTimer} : PropsCounter) {
 //Timing 
 const WaitTime = tempo
 const [timeLeft, setTimeLeft] = useState(WaitTime);
 const [fill, setFill] = useState(100);

 useEffect(() => {
   if (timeLeft > 0) {
     const interval = setInterval(() => {
       setTimeLeft((prev) => prev - 1);
       setFill((prevFill) => prevFill - (100 / WaitTime));
     }, 1000);

     
     return () => clearInterval(interval);
   } else {
    handleEndTimer()
   }
 }, [timeLeft]);
 const formatTime = (seconds: number) => {
   const mins = Math.floor(seconds / 60);
   const secs = seconds % 60;
   return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
 };

 function TimeView() {
 
   return <Text style={{fontSize:50, textAlign:'center',color:'white', paddingVertical:'37.5%'}}>{formatTime(timeLeft)}</Text>
 
 }

 return ( 
    <View className='w-full h-full items-center justify-center'>
    <AnimatedCircularProgress
      size={300}
      width={10}
      backgroundWidth={2.5}
      rotation={0}
      duration={timeLeft}
      prefill={100}
      fill={fill}
      tintColor="rgb(109 40 217)"
      backgroundColor="white"
      lineCap='round'
      >
        {TimeView}
      </AnimatedCircularProgress>
      </View>
 )
}
export default CircularProgressBar;


