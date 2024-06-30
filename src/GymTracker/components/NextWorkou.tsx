import { Text, Image, View } from "react-native";
import exercicioProibidoBackground from '../assets/images/339c26d1-4f85-49de-ac6a-f4ba93bc2b2b.png';
import ItemSlider from "./ItemSlider";
import AppIntroSlider from 'react-native-app-intro-slider';
import { useEffect, useRef, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../lib/axios";
interface props {
    nextWorkout: []
}
export default function NextWorkout({nextWorkout}: props) {

    
    const sliderRef = useRef(null);
   
    useEffect(() => {
        if (nextWorkout && nextWorkout.length > 0) {
            const interval = setInterval(() => {
                if (sliderRef.current) {
                    sliderRef.current.goToSlide((sliderRef.current.state.activeIndex + 1) % nextWorkout.length);
                }
            }, 10000); // 10 segundos

            return () => clearInterval(interval);
        }
    }, [nextWorkout]);

    return (
        <View className="h-full w-full">
            {
               nextWorkout.length ? 
               (
                        <AppIntroSlider
                            ref={sliderRef}
                            className="h-full w-full"
                            renderItem={ ({item}) => <ItemSlider item={item}/>}
                            data={ nextWorkout } // Usando o estado diretamente
                            showDoneButton={false}
                            showNextButton={false}
                            pagingEnabled={false}
                            renderPagination={() => null} // Remove o indicador de página
                        />
                    ) : (
                        <View className="w-full h-full flex-row items-center p-2">
                            <Image source={exercicioProibidoBackground} resizeMode="contain" className="w-1/2 h-5/6" />
                            <Text className="text-white text-2xl font-bold w-1/2 text-center">Nenhum treino marcado para hoje</Text>
                        </View>
                    )
            }
            {/* <Text className="text-white">{nextWorkout.nextWorkout[0].nome}</Text> */}
        </View>
    );
}
