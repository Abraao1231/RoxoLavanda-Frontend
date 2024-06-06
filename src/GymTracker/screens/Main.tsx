import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import { ArrowRight, Check, X } from "phosphor-react-native";
import colors from "tailwindcss/colors";
import { VictoryPie } from "victory-native";
import legPressBackground from '../assets/images/legPress-background.jpg';
import { CircleButton } from "../components/CircleButton";
import clsx from "clsx";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HeaderPerfil from "../components/HeaderPrefil";

export default function Main () {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});
  const scrollViewRef = useRef(null);

  const treinosRealizadosDia = [
    { dia: 26, diaSemana: 'Quinta-feira', mes: 'Maio', isTreinoExists: true },
    { dia: 27, diaSemana: 'Sexta-feira', mes: 'Maio', isTreinoExists: false },
    { dia: 28, diaSemana: 'Sábado', mes: 'Maio', isTreinoExists: true },
    { dia: 29, diaSemana: 'Sexta-feira', mes: 'Maio', isTreinoExists: false },
    { dia: 30, diaSemana: 'Sábado', mes: 'Maio', isTreinoExists: true }
  ];

  useEffect(() => {
    const retrieveToken = async () => {
      try {
        setToken( await AsyncStorage.getItem('token'))
        setUser(await AsyncStorage.getItem('user'))
    } catch (error) {
        console.error(error);
      }
    };

    retrieveToken();
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, []);

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
                  colorScale={[colors.black, colors.violet[600]]}
                  labelRadius={50}
                  labels={[]}
                  cornerRadius={50}
                  data={[
                    { label: "", y: 25 },
                    { label: "", y: 75 },
                  ]}
                />
                <Text className="text-white text-center font-semibold absolute">75%</Text>
              </View>
              <Text className="text-white text-center w-2/3 font-semibold mt-2">{item}</Text>
            </View>
          ))}
        </View>
      </View>
      <View className="w-full h-[30%] mt-14 rounded-2xl border-2 border-zinc-700 flex flex-row">
        <ImageBackground
          source={legPressBackground}
          className="w-full rounded-md flex flex-row"
          resizeMode="cover"
          borderRadius={15}
        >
          <View className="absolute top-1/2 h-1/2 w-full flex flex-row justify-between items-end p-5">
            <View className="justify-center w-3/5">
              <Text className="text-white text-3xl font-bold">Leg Day</Text>
              <Text className="text-white text-md">Seu último treino de perna foi dia 14/04</Text>
            </View>
            <TouchableOpacity className="h-14 w-14 rounded-md items-end justify-end">
              <CircleButton
                classNameIn="h-[80%] w-[80%] items-center justify-center rounded-full bg-violet-600"
                classNameOut="h-full w-full items-center justify-center rounded-full bg-violet-700/80"
                children={<ArrowRight color="white" size={25} />}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <ScrollView
        horizontal={true}
        ref={scrollViewRef}
        showsHorizontalScrollIndicator={false}
        className="h-[20%] w-full mt-4 py-4 gap-x-3"
      >
        {treinosRealizadosDia.map((item) => (
          <TouchableOpacity
            onPress={() => { navigation.navigate('Login') }}
            key={item.dia + item.mes}
            className={clsx("w-24 h-full rounded-2xl bg-zinc-800 flex items-center justify-between border-2 p-1 py-2", {
              ["border-violet-700"]: item.isTreinoExists,
              ["border-zinc-500"]: !item.isTreinoExists
            })}
          >
            <Text className="text-white font-bold">{item.diaSemana}</Text>
            <Text className="text-white font-bold text-2xl">{item.dia}</Text>
            <View className="w-6 h-6">
              <View className={clsx("h-full w-full items-center justify-center rounded-full", {
                ["bg-violet-600"]: item.isTreinoExists,
                ["bg-zinc-600"]: !item.isTreinoExists,
              })}>
                <View className={clsx("h-[80%] w-[80%] items-center justify-center rounded-full bg-violet-700/80", {
                  ["bg-violet-700/80"]: item.isTreinoExists,
                  ["bg-zinc-700/80"]: !item.isTreinoExists,
                })}>
                  {item.isTreinoExists ? <Check size={15} color="white" /> : <X size={15} color="white" />}
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

