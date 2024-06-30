import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { BackButton } from "../components/BackButton";
import { ArrowLeft } from "phosphor-react-native";
import LogoImage from '../assets/logoNova.png'
import { Image } from 'react-native';
import { Envelope } from "phosphor-react-native";
import { Lock } from "phosphor-react-native";
import { CheckBox } from "../components/CheckBox";
import { api } from "../lib/axios";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { InputBox } from "../components/inputBox";

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

    const [check, setChek] = useState(false)

    return (



        < View className="w-full h-full bg-zinc-900 grid items-center " >
            <View className=" flex w-full h-[10%] p-5">

                <View className="pt-2 pl-2 flex flex-row items-center justify-between">
                    <BackButton />
                    <Image source={LogoImage} style={{
                        resizeMode: 'contain',
                        height: 100,
                        width: 50,
                    }} />

                </View>

            </View>
            <View className="h-[90%]  w-full p-5">
                <Text className='text-white text-5xl pl-2 pt-5 font-semibold font-'>
                    Login
                </Text>
                <Text className='text-zinc-400 text-lg pl-2 pt-1 pr-12 font-normal'>
                    Faça login para ter acesso aos seus dados
                </Text>
                <View >
                    <InputBox setValue={setEmail} title="E-mail" icon={<Envelope color="#DCDCDC"></Envelope>} />
                </View>
                <View className=" h-20 w-6/7 mt-11  bg-zinc-800 rounded-xl flex-row items-center">
                    <View className="pl-8">
                        <Lock color="#DCDCDC"></Lock>
                    </View>
                    <View className="pl-5 ">
                        <TextInput 
                            placeholder="Senha"
                            placeholderTextColor="#DCDCDC"
                            className="text-zinc-100"
                            secureTextEntry
                            onChangeText={setPassword}
                            >
                        </TextInput>
                    </View>
                </View>
                <View className="mt-12 justify-center flex-row " >
                    <CheckBox
                        onPress={() => { setChek(PrevState => !PrevState) }}
                        check={check}
                    />
                    <Text className='text-white mt-1 ml-2'>
                        Lembrar de mim?
                    </Text>

                </View>
                <View className="w-full items-center">
                    <TouchableOpacity
                        onPress={handleSubmitLogin}
                        className="w-5/6 h-16 bg-violet-700 flex justify-center items-center rounded-xl mt-16 "
                    >
                        <Text className="text-white text-lg">Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex mt-6 justify-center items-center">
                        <Text className="text-violet-700 text-lg underline">Esqueceu sua senha?</Text>
                    </TouchableOpacity>
                </View>
            </View>




        </View >
    )
}