import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { BackButton } from "../components/BackButton";
import { Lightning } from "phosphor-react-native"
import { api } from "../lib/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import clsx from "clsx";
import colors from "tailwindcss/colors";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
export function NivelFisico({route}){
    const {navigate} = useNavigation()
    const [nivelFisico, setNivelFisico] = useState("")
    let finnalyData = route.params.data
    const registrar = async () => {
        try {
            if (nivelFisico == "" ){
                Alert.alert("Selecione um nivel fisico para terminar o cadastro") 
                return;
            }
            console.log({...finnalyData, nivel: nivelFisico});
            
            await api.post('/user/', {...finnalyData, nivel: nivelFisico})
        .then( async (response) => {
            login(finnalyData)
            
        })
        .catch((error) => {
            Alert.alert(error.response.data)
        })    
        } catch (error) {
            
        }
        
    }
    async function login(data: object) {
        const response = await api.post('/auth/login', {
            email: finnalyData.email,
            password: finnalyData.password
        }).catch((error)=>{
            console.log(error);  
        })
                
        if (response.data.token){
            await AsyncStorage.setItem('token', JSON.stringify(response.data.token))
            await AsyncStorage.setItem('user', JSON.stringify(response.data.user))

            navigate("TabBar")
        }
    }
    return (
        <View className=" h-full w-full bg-zinc-900">
            <View className="pt-11 pl-7">
                <BackButton size={36}/>
            </View>
            <View>
                <View className="top-[-43] left-[208]">
                    <Image className=" h-11 w-11"
                    source={require('../assets/logoNova.png')}/>
                    <Text className=" w-full font-bold pr-4 text-white left-11 top-[-30]"
                    numberOfLines={1}
                    >etapa 3 de 3</Text>
                </View>
            </View>
            <View className=" items-center">
                <Text className="top-[-35] px-8 font-bold text-white text-center"
                    style={{fontSize:30}}>
                    Qual é o nível de seu preparo físico ?
                    </Text>
            </View>
            <View className="px-7 justify-center mt-[-7] mb-8" >
                <TouchableOpacity 
                    className={clsx('h-[118px] flex-row w-[100%] border-[1px] border-white rounded-xl bg-[#27272A] mb-6', {
                        ["border-violet-600"] : nivelFisico == "Iniciante"
                    })}
                    onPress={()=>setNivelFisico(prevState => prevState == "Iniciante" ? "": "Iniciante")}
                    >
                <View className="items-center pl-5 flex-row">
                        <View>
                            <Lightning size={18} weight="light" color={nivelFisico != "Iniciante"?"#A1A1AA": colors.violet[700]} />
                        </View>
                    </View>
                    <View className="flex-col absolute left-[95]">
                        <View>
                            <Text className=" pt-7 text-white font-bold"
                            style={{fontSize:19}}> 
                            Iniciante
                            </Text>
                        </View>
                        <View className="pt-1">
                            <Text className="w-[60%] text-white"
                            style={{fontSize:14}}> 
                                Menos de 6 meses de experiência
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>setNivelFisico(prevState => prevState == "Intermediário" ? "": "Intermediário")}

                className={clsx('h-[118px] flex-row w-[100%] border-[1px] border-white rounded-xl bg-[#27272A] mb-6', {
                    ["border-violet-600"] : nivelFisico == "Intermediário"
                })}                >
                <View className="items-center pl-5 flex-row">
                        <View>
                            <Lightning  size={18} weight="light" color={nivelFisico != "Intermediário"?"#A1A1AA": colors.violet[700]} />
                        </View>
                        <View>
                            <Lightning size={18} weight="light" color={nivelFisico != "Intermediário"?"#A1A1AA": colors.violet[700]} />
                        </View>
                    </View>
                    <View className="flex-col absolute left-[95]">
                        <View>
                            <Text className=" pt-7 text-white font-bold"
                            style={{fontSize:19}}> 
                            Intermediário
                            </Text>
                        </View>
                        <View className="pt-1">
                            <Text className="w-[60%] text-white"
                            numberOfLines={2}
                            style={{fontSize:14}}>
                                Mais de 6 meses e menos de 2 anos de experiência
                            </Text>
                        </View>
                    </View>
                    
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>setNivelFisico(prevState => prevState == "Avançado" ? "": "Avançado")}

                className={clsx('h-[118px] flex-row w-[100%] border-[1px] border-white rounded-xl bg-[#27272A] mb-6', {
                    ["border-violet-600"] : nivelFisico == "Avançado"
                })} 
                >
                    <View className="items-center pl-5 justify-center flex-row">
                        <View>
                            <Lightning size={18} weight="light" color={nivelFisico != "Avançado"?"#A1A1AA": colors.violet[700]} />
                        </View>
                        <View>
                            <Lightning size={18} weight="light" color={nivelFisico != "Avançado"?"#A1A1AA": colors.violet[700]} />
                        </View>
                        <View>
                            <Lightning size={18} weight="light" color={nivelFisico != "Avançado"?"#A1A1AA": colors.violet[700]} />
                        </View>
                    </View>
                    <View className="flex-col absolute left-[95]">
                        <View>
                            <Text className=" pt-7 text-white font-bold"
                            style={{fontSize:19}}> 
                            Avançado
                            </Text>
                        </View>
                        <View className="pt-1">
                            <Text className="text-white"
                            style={{fontSize:14}}> 
                                Mais de 2 anos de experiência
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <View className='rounded-2xl items-center justify-center px-2 mt-3'>
                    <TouchableOpacity 
                        
                        className="h-[60px] w-[90%] rounded-2xl items-center bg-violet-700 justify-center"
                         onPress={()=>registrar()}>
                        <Text className="items-center justify-center text-white font-bold" 
                        style={{fontSize:18}}>Concluído</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}