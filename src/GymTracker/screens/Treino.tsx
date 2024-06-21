import { View, Text, TouchableOpacity, ScrollView} from "react-native"
import { BackButton } from "../components/BackButton"
import { Plus } from "phosphor-react-native"
import CardExercicio from "../components/CardExercicio"
import { useState } from "react"
import { useFocusEffect } from "@react-navigation/native"
import { useCallback } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { api } from "../lib/axios"

export default function Treino({ route }){
    
    const [exercicios, setExercicios] = useState([]);
    async function getData() {
        try {
            const token = await AsyncStorage.getItem('token')
            const response = await api.get(`/exercicio/treino?id=${route.params.data.id}`);
            setExercicios(response.data);            
      } catch (error) {
          console.error(error.response.data);
        }
      };

      useFocusEffect(useCallback(() => {
        getData();   
    }, []))

    
    
    return (
        <View className="h-full w-full  bg-zinc-950 p-2">
            <View className="w-full h-1/5 justify-center ">
                <View className=" h-[30%] flex-row px-3 items-end">
                    <BackButton size={30}/>
                </View>
                <View className="h-[70%] flex-row">
                    <View className="h-full w-2/3 p-3 ">
                        <Text className="text-xl font-bold text-white">{route.params.data.nome}</Text>
                        {/* <Text className="text-[14px] text-zinc-300 font-semibold">Tempo médio de treino 15:45</Text> */}
                        <Text className="text-[14px] text-zinc-300 font-semibold">N° de exercicios: {exercicios.length}</Text>
                    </View>
                    <View className="h-full w-1/3 justify-start items-end ">
                        <TouchableOpacity className="flex-row items-center w-32 h-10 bg-violet-700 justify-evenly  rounded-md">
                            <Plus size={20} color="white"/>
                            <Text className="text-white text-[18px] ">Exercício</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
            <ScrollView className="h-4/5 w-full p-3 gap-y-3">
               {
                exercicios.map((exercicio) => (
                    <View className="h-28 w-full"  key={exercicio.id}>
                        <CardExercicio data={exercicio}/>
                    </View>
                ))
               }
            </ScrollView>
        </View>
    )
}