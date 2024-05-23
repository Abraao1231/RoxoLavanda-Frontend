import { View, Text, TextInputComponent, TextInput, TouchableOpacity } from "react-native";
import { BackButton } from "../components/BackButton";
import { ArrowLeft } from "phosphor-react-native";
import LogoImage from '../assets/logoNova.png'
import { Image } from 'react-native';
import clsx from 'clsx';
import { Envelope } from "phosphor-react-native";
import { Lock } from "phosphor-react-native";
import { Eye } from "phosphor-react-native";
import { Checkbox } from 'expo-checkbox'


export default function Login() {
    return (

        <View className="w-full h-full bg-zinc-900 flex items-center ">
            <View className=" flex w-full h-[32%] p-5">

                <View className="pt-12 pl-2">
                    <ArrowLeft color="white" size={35}></ArrowLeft>
                </View>

                <LogoImage ></LogoImage>

                <Text className={clsx('text-white text-5xl pl-2 pt-10 font-semibold font- ',
                )}>
                    Login
                </Text>
                <Text className={clsx('text-zinc-400 text-lg pl-2 pt-1 pr-12 font-normal  ',
                )}>
                    faça login para ter acesso aos seus dados
                </Text>
            </View>
            <View className="flex w-full h-[68%] items-center " >
                <View className=" h-20 w-96  bg-zinc-800 rounded-xl flex-row items-center">
                    <View className="pl-8">
                        <Envelope color="#DCDCDC"></Envelope>
                    </View>
                    <View className="pl-5 ">
                        <TextInput placeholder="E-mail"
                            placeholderTextColor="#DCDCDC">
                        </TextInput>
                    </View>
                </View>
                <View className=" h-20 w-96 mt-9  bg-zinc-800 rounded-xl flex-row items-center">
                    <View className="pl-8">
                        <Lock color="#DCDCDC"></Lock>
                    </View>
                    <View className="pl-5 ">
                        <TextInput placeholder="Senha"
                            placeholderTextColor="#DCDCDC"
                            secureTextEntry>
                        </TextInput>
                    </View>
                </View>


            </View>
        </View >
    )
}