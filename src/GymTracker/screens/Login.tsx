import { View, Text, TextInputComponent, TextInput, TouchableOpacity } from "react-native";
import { BackButton } from "../components/BackButton";
import { ArrowLeft } from "phosphor-react-native";
import LogoImage from '../assets/logoNova.png'
import { Image } from 'react-native';
import clsx from 'clsx';
import { Envelope } from "phosphor-react-native";
import { Lock } from "phosphor-react-native";
import { Eye } from "phosphor-react-native";
import colors from 'tailwindcss/colors'
import { InputBox } from "../components/inputBox";
import { useState } from "react";
import { CheckBox } from "../components/CheckBox";




export default function Login() {

    const [check, setChek] = useState(false)

    return (



        < View className="w-full h-full bg-zinc-900 grid items-center " >
            <View className=" flex w-full h-[12%] p-5">

                <View className="pt-8 pl-2 flex flex-row items-center justify-between">
                    <BackButton />
                    <Image source={LogoImage} style={{
                        resizeMode: 'contain',
                        height: 100,
                        width: 50,
                    }} />

                </View>

            </View>
            <View className="h-[68%]  w-full p-5">
                <Text className='text-white text-5xl pl-2 pt-10 font-semibold font-'>
                    Login
                </Text>
                <Text className='text-zinc-400 text-lg pl-2 pt-1 pr-12 font-normal'>
                    Faça login para ter acesso aos seus dados
                </Text>
                <View >
                    <InputBox title="E-mail" icon={<Envelope color="#DCDCDC"></Envelope>} ></InputBox>
                </View>
                <View className=" h-20 w-6/7 mt-11  bg-zinc-800 rounded-xl flex-row items-center">
                    <View className="pl-8">
                        <Lock color="#DCDCDC"></Lock>
                    </View>
                    <View className="pl-5 ">
                        <TextInput placeholder="Senha"
                            placeholderTextColor="#DCDCDC"
                            className="text-zinc-100"
                            secureTextEntry>
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
                <TouchableOpacity
                    className="w-6/7 h-16 bg-violet-700 flex justify-center items-center rounded-xl mt-16 "
                >
                    <Text className="text-white text-lg">Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text className="text-violet-700 text-lg mt-10 ml-28 underline">Esqueceu sua senha?</Text>
                </TouchableOpacity>

            </View>




        </View >
    )
}