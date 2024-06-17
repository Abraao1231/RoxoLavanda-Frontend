import { Text, View, TextInput, ScrollView, FlatList, KeyboardAvoidingView  } from "react-native";
import { BackButton } from "../components/BackButton";
import { Barbell } from "phosphor-react-native";
import colors from "tailwindcss/colors";
import { useFocusEffect } from "@react-navigation/native";
import { useState, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { api } from "../lib/axios";
import { TouchableOpacity } from "react-native";

export default function NewExercicio({route}){
    type ItemProps = {title: string, id: String};

    const Item = ({title, id}: ItemProps) => (
        <TouchableOpacity
            // onPress={() => navigate('Exercicio', {data: props.data})}
        >
            <View className="h-28 w-full my-1 bg-zinc-800 rounded-xl  flex-row border-2 border-zinc-700">
                <View className="h-full w-2/6  items-center justify-center rounded-xl bg-zinc-700">
                    <Text className="text-2xl text-white">GIF</Text>
                </View>
                <View className="h-full w-4/6 flex-row  items-center pl-4">
                    <View className="h-full w-3/4 justify-center items-center">
                        <Text className="text-xl font-bold text-white">{title}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
    const [exerciciosLista, setExerciciosLista] = useState([]);
    const {navigate} = useNavigation();
    async function getData() {
        try {
            
        //   setToken( await AsyncStorage.getItem('token'))
          const response = await api.get(`exercicio/`);
          setExerciciosLista(response.data);
          
      } catch (error) {
          console.error(error.response.data);
        }
      };
      
 
    useFocusEffect(useCallback(() => {
        getData();   
    }, []))

    return (
        <View  
            className="h-full w-full bg-zinc-950">
            <View className="h-[8%] w-full px-4 py-7">
                <BackButton/>
            </View>
            <View className="h-[20%] w-full px-4 py-2">
                <Text className="text-2xl text-white">Adicionar treino</Text>
                <View className="py-4 ">
                    <Text className="text-white text-xl pb-2">Selecione o exercicio desejado</Text>
                    <View className=" h-20 w-6/7  bg-zinc-800 rounded-xl flex-row items-center">
                            <View className="pl-4">
                                <Barbell color={colors.zinc[300]}/>
                            </View>
                            <View className="pl-5 w-full">
                                <TextInput 
                                    // onChangeText={setPassword}
                                    placeholder="Nome do exercicio"
                                    placeholderTextColor={colors.zinc[300]}
                                    className="text-white w-5/6 text-[18px]"
                                    // value={password}
                                    >
                                </TextInput>
                                
                            </View>
                        </View>
                </View>
            </View>
            
            <View className="h-[72%] w-full  px-4 py-8 ">
                    <Text className="text-white text-2xl">Lista de exercícios</Text>

                    <FlatList
                        data={exerciciosLista.data}
                        renderItem={({item}) => <Item title={item.nome}  id={item.id}/>}
                        keyExtractor={item => item.id}
                    >

                </FlatList>
            </View>
        </View >
)
}