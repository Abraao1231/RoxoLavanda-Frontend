import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import {  Check, X } from "phosphor-react-native";
import colors from "tailwindcss/colors";
import { VictoryPie } from "victory-native";
import { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import clsx from "clsx";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HeaderPerfil from "../components/HeaderPrefil";
import { api } from "../lib/axios";
import NextWorkout from "../components/NextWorkou";
import dayjs from 'dayjs'

export default function Main () {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});
  const scrollViewRef = useRef(null);
  const [nextWorkout, setNextWorkout] = useState([]);
  const [last10Days, setLast10Days] = useState([]);

  const diasDaSemana = ['Sábado','Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira']
  const retrieveToken = async () => {
    try {
      setToken( await AsyncStorage.getItem('token'))
      setUser(await JSON.parse(await AsyncStorage.getItem('user')))
      const response = await api.get(`/user/data?id=${JSON.parse(await AsyncStorage.getItem('user')).id}`);
      setNextWorkout(response.data.nextWorkout);
      setLast10Days(response.data.las10Days)
          
  } catch (error) {
      console.error(error);
    }
  };
  useFocusEffect(useCallback(() => {
    retrieveToken();  
    scrollViewRef.current?.scrollToEnd({ animated: true });
 
}, []))


  console.log(last10Days);
  
  const navigation = useNavigation();
    
  return (
    <View className="w-full h-full bg-zinc-950 items grid items-center px-4 ">
      <HeaderPerfil />
      <View className="h-[25%] w-full">
        <Text className="text-3xl text-white pl-4 py-2">Relatório mensal</Text>
        <View className="w-full h-40 flex flex-row items-center justify-between ">
          {["Treinos finalizados", "Meta atingida", "Calorias consumidas"].map((item) => (
            <View key={item} className="flex justify-center items-center w-1/3 h-full">
              <View className="items-center justify-center w-full h-full" style={{ height: 100, width: 150 }}>
                <VictoryPie
                  width={150}
                  height={100}
                  innerRadius={30}
                  padding={5}
                  padAngle={2}
                  colorScale={[colors.zinc[800], colors.violet[600]]}
                  labelRadius={50}
                  labels={[]}
                  cornerRadius={50}
                  data={[
                    { label: "", y: 25 },
                    { label: "", y: 0 },
                  ]}
                />
                <Text className="text-white text-center font-semibold absolute">0%</Text>
              </View>
              <Text className="text-white text-center w-2/3 font-semibold mt-2">{item}</Text>
            </View>
          ))}
        </View>
      </View>
      <View className="w-full h-52 mt-14 rounded-2xl border-2 border-zinc-700 flex flex-row">
       <NextWorkout nextWorkout={nextWorkout}/>
      </View>
      <ScrollView
        horizontal={true}
        ref={scrollViewRef}
        showsHorizontalScrollIndicator={false}
        className="h-[20%] w-full mt-4 py-4 gap-x-3"
      >
        {last10Days && last10Days.map((item) => (
          <TouchableOpacity
            key={item.data}
            className={clsx("w-24 h-full rounded-2xl bg-zinc-800 flex items-center justify-between border-2 p-1 py-2", {
              ["border-violet-700"]: item.isExists,
              ["border-zinc-500"]: !item.isExists
            })}
          >
            <Text className="text-white font-bold">{diasDaSemana[item.diaSemana] }</Text>
            <Text className="text-white font-bold text-2xl">{dayjs(item.data).date()}</Text>
            <View className="w-6 h-6">
              <View className={clsx("h-full w-full items-center justify-center rounded-full", {
                ["bg-violet-600"]: item.isExists,
                ["bg-zinc-600"]: !item.isExists,
              })}>
                <View className={clsx("h-[80%] w-[80%] items-center justify-center rounded-full bg-violet-700/80", {
                  ["bg-violet-700/80"]: item.isExists,
                  ["bg-zinc-700/80"]: !item.isExists,
                })}>
                  {item.isExists ? <Check size={15} color="white" weight="bold" /> : <X size={15} weight="bold" color="white" />}
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

