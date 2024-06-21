import { Text, View, TextInput, ScrollView, FlatList, KeyboardAvoidingView, Platform  } from "react-native";
import { BackButton } from "../components/BackButton";
import { Barbell } from "phosphor-react-native";
import colors from "tailwindcss/colors";
import { useFocusEffect } from "@react-navigation/native";
import { useState, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { api } from "../lib/axios";
import { TouchableOpacity } from "react-native";
import { Loading } from "../components/Loading";

export default function NewExercicio({route}){

    const [valueFilter, setValueFilter] = useState('')
    const [exerciciosLista, setExerciciosLista] = useState([]);
    const {navigate} = useNavigation();
      
    async function getData() {
        try {
            
        //   setToken( await AsyncStorage.getItem('token'))
          const response = await api.get(`exercicio/`);
          setExerciciosLista(response.data.data);
          
      } catch (error) {
          console.error(error.response.data);
        }
      };
    
      let filterExerciciosLista = valueFilter == ''? exerciciosLista: exerciciosLista.filter(item => item.nome.includes(valueFilter))
      useFocusEffect(useCallback(() => {
          getData();   
      }, []))

    
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 h-full"
      >
        <View className="bg-zinc-950 h-[8%] w-full px-4 py-7">
          <BackButton />
        </View>
        <ScrollView className="h-[92%] bg-zinc-950" keyboardShouldPersistTaps='handled'>
          <View className=" ">
            
            <View className="h-[full] w-full px-4 py-2">
              <Text className="text-2xl text-white">Adicionar treino</Text>
              <View className="py-4">
                <Text className="text-white text-xl pb-2">Selecione o exercício desejado</Text>
                <View className="h-20 w-6/7 bg-zinc-800 rounded-xl flex-row items-center">
                  <View className="pl-4">
                    <Barbell color={colors.zinc[300]}/>
                  </View>
                  <TextInput
                    placeholder="Nome do exercício"
                    placeholderTextColor={colors.zinc[300]}
                    className="text-white w-5/6 text-[18px] pl-5"
                    onChangeText={setValueFilter}
                  />
                </View>
              </View>
            </View>
           
          </View>
          <View className="h-[55%] px-4  ">
            <Text 
                  className="text-white text-2xl">
                    Lista de exercícios
                </Text>
                {
                  filterExerciciosLista.length > 0  ?
                  filterExerciciosLista.map((item) => (
                      <TouchableOpacity
                        onPress={() => navigate('Exercicio', {exercicio: {nome: item.nome}, action:route.params.action })}
                        key={item.id}
                      >
                      <View className="h-28 my-1 w-full bg-zinc-800 rounded-xl  flex-row border-2 border-zinc-700">
                          <View className="h-full w-2/6  items-center justify-center rounded-xl bg-zinc-700">
                              <Text className="text-2xl text-white">GIF</Text>
                          </View>
                          <View className="h-full w-4/6 flex-row  items-center pl-4">
                              <Text className="text-xl font-bold text-white">{item.nome}</Text>
                          </View>
                      </View>
                  </TouchableOpacity>
                    ))
                    : <View className="h-64 bg-zinc-950 items-center justify-center "><Text className="text-white text-xl ">Nenhum exercicio encontrado</Text></View>
                }
              </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )

}