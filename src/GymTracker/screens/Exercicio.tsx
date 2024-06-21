import {  CheckFat, Pencil, Trash } from "phosphor-react-native";
import {  View, Text, TouchableOpacity, Alert } from "react-native";
import colors from "tailwindcss/colors";
import { api } from "../lib/axios";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BackButton } from "../components/BackButton";
import clsx from "clsx";
import { ModalInputNumber } from "../components/Modals/inputNumber";
import { StatusBar } from "react-native";
import changeNavigationBarColor from 'react-native-navigation-bar-color';

export default function Exercicio( {route}){


    const [activeModalIntercalo, setActiveModalIntercalo] = useState(false)
    const [activeModalcarga, setActiveModalCarga] = useState(false)
    const [activeModalRepeticao, setActiveModalRepeticao] = useState(false)

    const {navigate, goBack} = useNavigation()
    async function handleDeleteExercicio() {
        
        await api.delete(`/exercicio/treino?id=${route.params.data.id}`)
        .then((response) => {
            if (response.status == 200)
                goBack()
            
        }).catch((response) => {
            Alert.alert('Erro ao conectar com o servidor')
        })
    }

    function saveExercicioNewTreino(){}
    
    const data = {
        nome: route.params.exercicio.nome
        ,numRep: `${route.params.numeroSer ? route.params.numeroSer: 0}X${route.params.numeroRep ? route.params.numeroRep: 0}`
        ,carga: "160Kg"
        ,intervalo: `${route.params.intervalo ? route.params.intervalo: 0 }s`
    }
    let textButton = "";
    let handle = () => {};
    if (route.params.action == 'newTreino'){
         textButton = "Salvar Treino"
         handle = saveExercicioNewTreino
    } else {
         textButton = "Excluir Exercicio"
         handle = handleDeleteExercicio
    }
         
    return (
        <View className="w-full h-full bg-zinc-950 ">
            <View className="h-[7%] p-4"><BackButton/></View>
            <View className="h-[23%]  w-full p-4 py-8 items-center ">
                <View className="h-28 w-28 bg-zinc-900 items-center justify-center rounded-md border-2 border-zinc-600">
                    <Text className="text-white font-bold text-2xl">GIF</Text>
                </View>
                <Text className="text-3xl py-6 font-bold text-white">{data.nome}</Text>
            </View>
            <View className="h-[70%] w-full p-6 items-center justify-center ">
                <View className="w-full py-3">
                    {/* <Text className="text-2xl text-violet-700 font-bold">Descrição/Instruções</Text>
                    <Text className="text-zinc-400 text-xl py-4">{data.descricao}</Text> */}
                </View>
                <View className="gap-y-4 py-10 ">
                    <View className="w-full felx-row justify-between flex-row items-center ">
                        <Text className="text-violet-700 text-xl font-semibold">N° de repetições/series</Text>
                        <TouchableOpacity
                        onPress={() => setActiveModalRepeticao(true)}
                        className="flex-row items-center gap-x-1">
                            <Text className="text-zinc-300 text-[16px]">{data.numRep}</Text>
                            <Pencil size={15} color={colors.zinc[300]}/>
                        </TouchableOpacity>
                    </View>
                    <View className="w-full felx-row justify-between flex-row items-center ">
                        <Text className="text-violet-700 text-xl font-semibold">Carga</Text>
                        <TouchableOpacity
                            onPress={() => setActiveModalRepeticao(true)}

                            className="flex-row items-center gap-x-1">
                            <Text className="text-zinc-300 text-[16px]">{data.carga}</Text>
                            <Pencil size={15} color={colors.zinc[300]}/>
                        </TouchableOpacity>
                    </View>
                    <View className="w-full felx-row justify-between flex-row items-center ">
                        <Text className="text-violet-700 text-xl font-semibold">Intervalo</Text>
                        <TouchableOpacity
                            onPress={() => setActiveModalIntercalo(true)}
                            className="flex-row items-center gap-x-1">
                                <Text className="text-zinc-300 text-[16px]">{data.intervalo}</Text>
                                <Pencil size={15} color={colors.zinc[300]}/>
                        </TouchableOpacity>
                    </View>
                </View>
               
                <TouchableOpacity 
                    onPress={handle}
                    className="flex-row w-full absolute bottom-8 justify-center items-center">
                    <Text className={clsx("text-[18px] font-semibold pr-2 text-white", {
                        ["text-red-500"]: route.params.action == "updateExercicio",
                        ["text-green-500"]: route.params.action == "newTreino",
                    })}>{textButton}</Text>
                    {
                        route.params.action == "updateExercicio"?
                        <Trash size={20} color={colors.red[500]}/>
                        : <CheckFat weight="fill" size={20} color={colors.green[500]}/>
                    }
                    
                </TouchableOpacity>
            </View>
            <ModalInputNumber title="po" active={activeModalIntercalo}/>
            <StatusBar barStyle="dark-content" />

        </View>
    )
    
}