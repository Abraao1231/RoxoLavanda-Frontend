import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput, ImageBackground } from "react-native";
import clsx from "clsx";
import { Barbell, ClockClockwise, Fire } from "phosphor-react-native"
import { CircleButton } from "../components/CircleButton";
import {ArrowRight} from "phosphor-react-native";
import { useState } from "react";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

export function Desempenho(){


// Configura o dayjs para usar o idioma português
dayjs.locale('pt-br');

// Função para obter a data formatada em português
const getFormattedDate = () => {
    const today = dayjs();
    const dayOfMonth = today.format('D');
    const month = today.format('MMMM');
    const dayOfWeek = today.format('dddd');
    return {semana: dayOfWeek, diaMes: dayOfMonth, mes: month};
};
    const [active, setActive] = useState('Dia');

    const [activeSession, setActiveSessio] = useState("Dia")
    const dataHoje =  getFormattedDate()
    return (
        <View className=" h-full w-full bg-black">
            <View className="mt-[28px] mb-5 items-center justify-center">
                <Text className="text-white font-bold"
                style={{fontSize:24}}> DESEMPENHO
                </Text>
            </View>
            <View className="flex-row items-center justify-center mb-8">
                <View 
                    
                className=" h-[40px] w-[30%] bg-zinc-800 rounded-l-md">
                    <TouchableOpacity
                     onPress={() => setActive("Mes")}

                    className={clsx("h-full w-full justify-center items-center bg-zinc-800 rounded-md", {['bg-violet-700']: active == "Mes"})}>
                        <Text className="text-white font-bold"
                        style={{fontSize:16}}
                        >Mês</Text>
                    </TouchableOpacity>
                </View>
                <View className=" h-[40px] w-[30%] bg-zinc-800">
                    <TouchableOpacity 
                    onPress={() => setActive('Semana')}

                    className={clsx("h-full w-full justify-center items-center bg-zinc-800 rounded-md", {['bg-violet-700']: active == "Semana"})}>
                        <Text className="text-white font-bold"
                        style={{fontSize:16}}
                        >Semana</Text>
                    </TouchableOpacity>
                </View>
                <View className=" h-[40px] w-[30%] bg-zinc-800 rounded-r-md">
                    <TouchableOpacity
                        onPress={() => setActive('Dia')}
                        className={clsx("h-full w-full justify-center items-center bg-zinc-800 rounded-md", {['bg-violet-700']: active == 'Dia'})}>
                        <Text className="text-white font-bold"
                        style={{fontSize:16}}
                        >Dia</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="flex-row justify-between mx-[14] mb-7">
                <View className={clsx("h-12 w-12 rounded-xl border-[0.2px] border-zinc-400 items-center justify-center bg-zinc-700")}>
                    <TouchableOpacity className={clsx("h-12 w-12 rounded-xl border-[1.2px] border-violet-700 items-center justify-center bg-zinc-800")}>
                        <Text className="text-white font-semibold"
                        style={{fontSize:16}}>
                            01
                        </Text>

                    </TouchableOpacity>
                </View>
                <View className={clsx("h-12 w-12 rounded-xl border-[0.2px] border-zinc-400 items-center justify-center bg-zinc-700")}>
                    <TouchableOpacity className={clsx("h-12 w-12 rounded-xl border-[0.2px] border-zinc-400 items-center justify-center bg-zinc-900")}>
                        <Text className="text-white font-semibold"
                        style={{fontSize:16}}>
                            02
                        </Text>
                    </TouchableOpacity>

                </View>
                <View className={clsx("h-12 w-12 rounded-xl border-[0.2px] border-zinc-400 items-center justify-center bg-zinc-700 ")}>
                     <TouchableOpacity className={clsx("h-12 w-12 rounded-xl border-[0.2px] border-zinc-400 items-center justify-center bg-zinc-900")}>
                        <Text className="text-white font-semibold"
                            style={{fontSize:16}}>
                            03
                        </Text>
                        
                    </TouchableOpacity>
                </View>
                <View className={clsx("h-12 w-12 rounded-xl border-[1.2px] border-zinc-400 items-center justify-center bg-zinc-700")}>
                    <TouchableOpacity className={clsx("h-12 w-12 rounded-xl border-[0.2px] border-zinc-400 items-center justify-center bg-zinc-900")}>
                        <Text className="text-white font-semibold"
                        style={{fontSize:16}}>
                            04
                        </Text>
                        
                    </TouchableOpacity>

                </View>
                <View className={clsx("h-12 w-12 rounded-xl border-[0.2px] border-zinc-400 items-center justify-center bg-zinc-700")}>
                    <TouchableOpacity className={clsx("h-12 w-12 rounded-xl border-[0.2px] border-zinc-400 items-center justify-center bg-zinc-900")}>
                        <Text className="text-white font-semibold"
                        style={{fontSize:16}}>
                            05
                        </Text>
                        
                    </TouchableOpacity>

                </View>
                <View className={clsx("h-12 w-12 rounded-xl border-[0.2px] border-zinc-400 items-center justify-center bg-zinc-700")}>
                    <TouchableOpacity className={clsx("h-12 w-12 rounded-xl border-[0.2px] border-zinc-400 items-center justify-center bg-zinc-900")}>
                        <Text className="text-white font-semibold"
                        style={{fontSize:16}}>
                            06
                        </Text>
                        
                    </TouchableOpacity>
                </View>
            </View>
            <View className="items-center">
                <View className=" w-[90%] flex-row mt-[-10px]">
                    <View className="flex-col">
                        <Text className="text-zinc-200 font-bold"
                        style={{fontSize:29}}>
                            {dataHoje.semana.charAt(0).toUpperCase() + dataHoje.semana.slice(1)}
                        </Text>
                        <Text className="text-zinc-500 font-bold mt-[-6px]"
                        style={{fontSize:17}}> 
                            {dataHoje.diaMes} de {dataHoje.mes}
                        </Text>
                    </View>
                    <View className="absolute right-[-4] mt-[10px]">
                        <Image className=" h-[50px] w-[50px]"
                            source={require('../assets/images/calendar.png')}/>
                    </View>
                </View>
            </View>
            <View className="items-center">
                <View className="mt-[16px] w-[90%] flex-row justify-between px-[10px]">
                        <View className="items-center justify-between pb-2 w-[153px] h-[170px] border-[1.2px] border-violet-700 bg-zinc-900 rounded-3xl">
                            <Text className=" mt-2 text-white font-bold"
                            style={{fontSize:16}}>
                                Tempo de
                            </Text>
                            <View>
                                <Text className=" mt-[-1px] text-white font-bold mb-1"
                                style={{fontSize:16}}>
                                    duração
                                </Text>
                            </View>
                            <View className="mb-1">
                                <ClockClockwise size={80} color="#5B21B6"/>
                            </View>
                            <Text className="text-white font-bold"
                            style={{fontSize:16}}>
                                30 minutos
                            </Text>
                        </View>
                        <View className="items-center justify-between pb-2 w-[153px] h-[170px] border-[1.2px] border-violet-700 bg-zinc-900 rounded-3xl">
                        <Text className=" mt-2 text-white font-bold"
                            style={{fontSize:16}}>
                                Número de exercicios
                            </Text>
                            <View>
                                {/* <Text className=" mt-[-1px] text-white font-bold mb-1"
                                style={{fontSize:16}}>
                                    Gastas
                                </Text> */}
                            </View>
                            <View className="mb-1">
                                <Barbell size={80} color="#5B21B6"/>
                            </View>
                            <Text className="text-white font-bold"
                            style={{fontSize:16}}>
                                5 Exercicios
                            </Text>
                        </View>
                </View>
            </View>
            <View className="items-center justify-end ">           
                <View className="mt-[16px] w-[90%] h-[220px] bg-black rounded-xl p-1 border-zinc-400 border-[0.5px] flex-col ">
                    <ImageBackground className=" w-full h-full rounded-xl justify-between items-end flex-row "
                            resizeMode="stretch"
                            source={require('../assets/images/legPress-background.jpg')}
                            // resizeMode="cove"
                            >
                           
                                <Text className="text-white font-bold text-2xl p-4 ">Treino de pernas</Text>
                                <View className="p-4">
                                    <TouchableOpacity className="w-[50px] h-[50px]">
                                    <CircleButton
                                        classNameIn="h-[80%] w-[80%] items-center justify-center rounded-full bg-violet-600"
                                        classNameOut="h-full w-full items-center justify-center rounded-full bg-violet-700/80"
                                        children={<ArrowRight color="white" size={25} />}
                                    />
                                    </TouchableOpacity>
                                </View>

                            
                    </ImageBackground>
                </View>
            </View>

        </View>

    )
}