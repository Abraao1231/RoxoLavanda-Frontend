import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { Plus } from "phosphor-react-native";
import colors from "tailwindcss/colors";
import CardTreino from "../components/CardTreino";
import { useCallback, useFoc, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../lib/axios";
import { useNavigation, useFocusEffect } from '@react-navigation/native';


export function Treinos(){
    const [treinos, setTreinos] = useState([]);
    const {navigate} = useNavigation();
    async function getData() {
        try {
        //   setToken( await AsyncStorage.getItem('token'))
          const response = await api.get(`treino/all?id=${JSON.parse(await AsyncStorage.getItem('user')).id}`);
          setTreinos(response.data.treinos);
          
      } catch (error) {
          console.error(error.response.data);
        }
      };

      useFocusEffect(useCallback(() => {
        getData();   
    }, []))
 
      
      return (
        <View className="h-full w-full bg-zinc-950 p-4">

            <Text className="text-4xl font-semibold text-white my-6">Treinos</Text>
            <View className="h-full items-center justify-center 0">
            {treinos.length?
                <ScrollView>
                    <View className="flex flex-wrap flex-row justify-between">
                        {treinos.map(item => (
                        <View key={item.id}
                            className="w-1/2 p-3 h-48 rounded-xl">
                            <CardTreino data={item}/>
                        
                        </View>
                        ))}
                    </View>
                </ScrollView>
                :<Text className="text-zinc-400 text-2xl text-center absolute top-[40%]">Nenhum treino cadastrado ainda! Crie seu primeiro treino</Text>
            }
            </View>
            <TouchableOpacity 
                className="h-14 w-40 flex flex-row bg-violet-700 absolute bottom-6 right-6 rounded-md justify-between items-center p-2"
                onPress={() => navigate('NewTreino')}
            >
                <Plus color={colors.white} size={25}></Plus>
                <Text className="text-xl text-white">Novo Treino</Text>
            </TouchableOpacity>
        </View>
      );
    
    
}