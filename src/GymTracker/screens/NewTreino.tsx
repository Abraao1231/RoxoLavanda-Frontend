import { ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native";
import { BackButton } from "../components/BackButton";
import { useState } from "react";
import clsx from "clsx";
import { Plus } from "phosphor-react-native";
import colors from "tailwindcss/colors";
import { useNavigation } from "@react-navigation/native";

const avaliableWeekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

export default function NewTreino(){

    const [weekDays, setWeekDays] = useState<number[]>([]) 
        function handleToggleWeekDay(weekDayIndex: number){

        if (weekDays.includes(weekDayIndex)){
            setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex))
        } else {
            setWeekDays(prevState => [...prevState, weekDayIndex])
        }
    }

    const data = {
        nome: "Novo treino",
        intervalo: 0,
        exercicios: []
    }
    const {navigate} = useNavigation()
    return (
        <View className="bg-zinc-950 h-full w-full">
            <View className="h-[8%] px-3 py-7">
                <BackButton/>
            </View>
            <View className="h-[15%] w-full px-3 py-2">
                
                <Text className="text-3xl text-white">{data.nome}</Text>
                <Text className="text-xl text-zinc-400">Intervalo entre exercícios: {data.intervalo} </Text>
                <Text className="text-xl text-zinc-400">N° de exercicios: {data.exercicios.length}</Text>
            </View>
            <View className="h-[13%] w-full px-3">
                <Text className="text-2xl text-white">Dias da semana</Text>
                <View className="flex-row justify-between py-2">
                {avaliableWeekDays.map((item, index) => (
                    <TouchableOpacity
                        onPress={() => handleToggleWeekDay(index)}
                        key={index}                       
                        className={clsx("h-12 w-12 rounded-md border-[2px] items-center justify-center", {
                            ["bg-zinc-800  border-zinc-600"]: !weekDays.includes(index),
                            ["bg-zinc-800  border-violet-600"]: weekDays.includes(index),
                        })} >
                        <Text className="text-white text-[16px] font-semibold">{item}</Text>
                    </TouchableOpacity>
                ))}
                </View>
            </View>
            <View className="h-[64%]  w-full items-center pb-7">
                <ScrollView
                    className="h-[90%] w-full"
                >

                </ScrollView>
                <TouchableOpacity
                    className="h-12 w-36 rounded-md bg-violet-700 flex-row justify-evenly items-center p-2"
                    onPress={() => {navigate('NewExercicioTreino', {exercicios: data.exercicios, action: "newTreino"} )}}
                >
                    <Plus size={20} color={colors.white} weight="bold"/>
                    <Text className="text-xl font-bold text-white">Exercício</Text>
                </TouchableOpacity>
            </View>
        </View>
    )    
}