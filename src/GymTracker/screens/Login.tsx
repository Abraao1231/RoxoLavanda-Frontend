import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { BackButton } from "../components/BackButton";
import { ArrowLeft } from "phosphor-react-native";
import LogoImage from '../assets/logoNova.png'
import { Image } from 'react-native';
import { Envelope } from "phosphor-react-native";
import { Lock } from "phosphor-react-native";
import colors from 'tailwindcss/colors'
import { api } from "../lib/axios";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";





export default function Login() {
    const {navigate} = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    async function  handleSubmitLogin(){
        
        const response = await api.post('/auth/login', {
            email: email,
            password: password
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

        <View className="w-full h-full bg-zinc-900 grid items-center ">
             <View className=" flex w-full h-[12%] p-5  justify-center">
                <BackButton/>
                <View className="pt-8 pl-2 flex flex-row items-center justify-between">
                    <ArrowLeft color="white" size={35}></ArrowLeft>
                    <Image source={LogoImage}  style={{
                     resizeMode: 'contain',
                     height: 100,
                     width: 50,
                 }}/>
                </View>

            </View>
            <View className="h-[68%]  w-full p-5">
                <Text className='text-white text-4xl pl-2 pt-10 font-semibold font-'>
                    Login
                </Text>
                <Text className='text-zinc-400 text-lg pl-2 pt-1 pr-12 font-normal'>
                    faça login para ter acesso aos seus dados
                </Text>
                <View className=" h-20 w-6/7 p mt-5 bg-zinc-800 rounded-xl flex-row items-center">
                    <View className="pl-8">
                        <Envelope color={colors.zinc[300]}></Envelope>
                    </View>
                    <View className="pl-5 ">
                        <TextInput 
                            onChangeText={setEmail}
                            placeholder="E-mail"
                            className="text-white"
                            placeholderTextColor={colors.zinc[300]}>
                        </TextInput>
                    </View>
                </View>
                    <View className=" h-20 w-6/7 mt-9  bg-zinc-800 rounded-xl flex-row items-center">
                        <View className="pl-8">
                            <Lock color={colors.zinc[300]}></Lock>
                        </View>
                        <View className="pl-5 ">
                            <TextInput 
                                onChangeText={setPassword}
                                placeholder="Senha"
                                placeholderTextColor={colors.zinc[300]}
                                className="text-white"
                                value={password}
                                secureTextEntry>
                            </TextInput>
                        </View>
                    </View>
            </View>  
            <TouchableOpacity 
                onPress={handleSubmitLogin}
                className="w-5/6 bg-violet-700 flex justify-center items-center p-5 rounded-md"
            >
                 <Text className="text-white">Entrar</Text>
            </TouchableOpacity>         
        </View >
    )
}