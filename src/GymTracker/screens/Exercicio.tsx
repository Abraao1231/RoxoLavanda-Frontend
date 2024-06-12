import { Pencil, Trash } from "phosphor-react-native";
import { ScrollView, View, Text, TouchableOpacity, Alert } from "react-native";
import colors from "tailwindcss/colors";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { api } from "../lib/axios";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function Exercicio( {route}){
   const {navigate, goBack} = useNavigation()
    async function handleDeleteExercicio() {
        console.log(route.params);
        
        await api.delete(`/exercicio/treino?id=${route.params.data.id}`)
        .then((response) => {
            if (response.status == 200)
                goBack()
            
        }).catch((response) => {
            Alert.alert('Erro ao conectar com o servidor')
        })
    }

        
    const data = {
        nome: route.params.data.exercicio.nome
        ,descricao: "uma breve descrição do exercicio bla bla bla bla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla"
        ,numRep: `${route.params.data.numeroSer}X${route.params.data.numeroRep}`
        ,carga: "160Kg"
        ,intervalo: `${route.params.data.intervalo}s`
    }

    return (
        <View className="w-full h-full bg-zinc-950 items-center ">
            <View className="h-[30%]  w-full p-4 py-8 items-center ">
                <View className="h-28 w-28 bg-zinc-900 items-center justify-center rounded-md border-2 border-zinc-600">
                    <Text className="text-white font-bold text-2xl">GIF</Text>
                </View>
                <Text className="text-3xl py-8 font-bold text-white">{data.nome}</Text>
            </View>
            <View className="h-[70%] w-full p-6 items-center ">
                <View className="w-full">
                    <Text className="text-2xl text-violet-700 font-bold">Descrição/Instruções</Text>
                    <Text className="text-zinc-400 text-xl py-4">{data.descricao}</Text>
                </View>
                <View className="gap-y-4 py-10">
                    <View className="w-full felx-row justify-between flex-row items-center ">
                        <Text className="text-violet-700 text-xl font-semibold">N° de repetições/series</Text>
                        <TouchableOpacity className="flex-row items-center gap-x-1">
                            <Text className="text-zinc-300 text-[16px]">{data.numRep}</Text>
                            <Pencil size={15} color={colors.zinc[300]}/>
                        </TouchableOpacity>
                    </View>
                    <View className="w-full felx-row justify-between flex-row items-center ">
                        <Text className="text-violet-700 text-xl font-semibold">Carga</Text>
                        <TouchableOpacity className="flex-row items-center gap-x-1">
                            <Text className="text-zinc-300 text-[16px]">{data.carga}</Text>
                            <Pencil size={15} color={colors.zinc[300]}/>
                        </TouchableOpacity>
                    </View>
                    <View className="w-full felx-row justify-between flex-row items-center ">
                        <Text className="text-violet-700 text-xl font-semibold">Intervalo</Text>
                        <TouchableOpacity className="flex-row items-center gap-x-1">
                            <Text className="text-zinc-300 text-[16px]">{data.intervalo}</Text>
                            <Pencil size={15} color={colors.zinc[300]}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity 
                    onPress={handleDeleteExercicio}
                    className="flex-row w-full absolute bottom-8 justify-center items-center">
                    <Text className="text-[18px] font-semibold text-red-500 pr-2">Excluir Exercicio</Text>
                    <Trash size={18} color={colors.red[500]}/>
                </TouchableOpacity>
            </View>
        </View>
    )
    
}