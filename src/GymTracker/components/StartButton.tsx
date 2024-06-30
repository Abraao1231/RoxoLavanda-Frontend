import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import CircularProgressBar from './CircularProgressBar';
interface propsStartButton {
  active: boolean,
  setActive: Function
  text: string
}

function StartButton ({active, setActive, text}: propsStartButton) {
  return (
    <TouchableOpacity className='w-3/5 h-16 border-violet-500 border-[1.2px] rounded-xl items-center justify-center bg-violet-700' 
        onPress={() => setActive(!active)}>
      <View className=' '>
        <Text className='text-center text-white font-bold text-xl'>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}
export default StartButton;
