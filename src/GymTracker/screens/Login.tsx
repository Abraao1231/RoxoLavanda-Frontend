import { View, Text, TextInputComponent, TextInput, TouchableOpacity } from "react-native";
import { BackButton } from "../components/BackButton";
import { ArrowLeft } from "phosphor-react-native";
import LogoImage from '../assets/logoNova.png'
import { Image } from 'react-native';
import clsx from 'clsx';
import { Envelope } from "phosphor-react-native";
import { Lock } from "phosphor-react-native";
import { Eye } from "phosphor-react-native";
import { Checkbox } from 'expo-checkbox';
import colors from 'tailwindcss/colors'


export default function Login() {
    return (

        <View className="w-full h-full bg-zinc-900 grid items-center ">
             <View className=" flex w-full h-[20%] p-5">

                <View className="pt-12 pl-2 flex flex-row items-center justify-between">
                    <ArrowLeft color="white" size={35}></ArrowLeft>
                    <Image source={LogoImage}  style={{
                     resizeMode: 'contain',
                     height: 100,
                     width: 50,
                 }}/>
                </View>

            </View>
            <View className="h-[68%]  w-full p-5">
                <Text className='text-white text-5xl pl-2 pt-10 font-semibold font-'>
                    Login
                </Text>
                <Text className='text-zinc-400 text-lg pl-2 pt-1 pr-12 font-normal'>
                    faça login para ter acesso aos seus dados
                </Text>
                <View className=" h-20 w-6/7 p mt-5 bg-zinc-800 rounded-xl flex-row items-center">
                    <View className="pl-8">
                        <Envelope color="#DCDCDC"></Envelope>
                    </View>
                    <View className="pl-5 ">
                        <TextInput placeholder="E-mail"
                            placeholderTextColor="#DCDCDC">
                        </TextInput>
                    </View>
                </View>
                    <View className=" h-20 w-6/7 mt-9  bg-zinc-800 rounded-xl flex-row items-center">
                        <View className="pl-8">
                            <Lock color="#DCDCDC"></Lock>
                        </View>
                        <View className="pl-5 ">
                            <TextInput placeholder="Senha"
                                placeholderTextColor="#DCDCDC"
                                className="text-blue-500"
                                secureTextEntry>
                            </TextInput>
                        </View>
                    </View>
                </View>
           


           
        </View >
    )
}