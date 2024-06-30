import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { BackButton } from "../components/BackButton";
import{ GenderIntersex  } from "phosphor-react-native";
import { CaretRight  } from "phosphor-react-native";
import Main from "./Main";
import MainModal from "../components/Modals/Main";
import { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { CheckBox } from "../components/CheckBox";
import { ScrollView } from "react-native";
import {z} from 'zod'
import { Alert } from "react-native";
import { api } from "../lib/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
export function CompletePerfil({route}){
    
    const [check, setCheck] = useState(false)
    const {navigate} = useNavigation()
    const [activeModalGenero, setActiveModalGenero] = useState(false)
    const [activeModalAltura, setActiveModalAltura] = useState(false)
    const [activeModalPeso, setActiveModalPeso] = useState(false)

    const [inputAltura, setInputAltura] = useState("")
    const [inputPeso, setInputPeso] = useState("")
    const [inputGenero, setInputGenero] = useState("")

    const dadosUser = route.params.dadosUser;
    
    const  registrar = async () => {
        try {
            
            if (inputPeso == 0) {
                Alert.alert(" o valor para peso é invalido")
                return;
            }
            
            if (inputAltura == 0) {
                Alert.alert(" o valor para peso é invalido")
                return;
            }
            const validator = z.object({
              "genero": z.string({message: "Valor de genero inválido"}),
              "altura": z.number({message: "Valor para a altura é invalido"})
                .min(54, {message: "A altura não pode ser tão baixa"})
                .max(300, {message: "A altura não pode ser maior que 3 metros"}),
                peso: z.number().min(0, {message: "O peso não pode ser negativo"}),
            })
            
             const  data = {
              "genero": inputGenero,
              "altura": isNaN(Number(inputAltura.replace(',', '.')) )  ? "": Number(inputAltura.replace(',', '.')),
              "peso": isNaN(Number(inputPeso.replace(',', '.'))) ? "" : Number(inputPeso.replace(',', '.')),
             }  
             
            const isValidate = validator.parse(data)
             
            const finnalyData = {...isValidate, ...dadosUser}
            navigate('NivelFisico', {data: finnalyData})
           

            } catch (error) {
              const erro = JSON.parse(error.message)[0].message
              Alert.alert(erro)
            }
    }

   

    return (
        <View className=" h-full w-full bg-zinc-900">
            <View className="h-full w-full" style={{opacity: activeModalGenero ?0.2:1,}} >
            <View className="h-full w-full" style={{opacity: activeModalAltura ?0.2:1,}} >
            <View className="h-full w-full" style={{opacity: activeModalPeso ?0.2:1,}} >

                <View className="pt-11 pl-7">
                    <BackButton size={36}/>
                </View>
                <View>
                    <View className="top-[-43] left-[208]">
                        <Image className=" h-11 w-11"
                        source={require('../assets/logoNova.png')}/>
                        <Text className=" w-full font-bold pr-4 text-white left-11 top-[-30]"
                        numberOfLines={1}
                        >etapa 2 de 3</Text>
                    </View>
                </View>
                <View>
                    <Text className="top-[-24] w-full px-7 font-bold text-[27px] text-white">Complete seu perfil</Text>
                    <Text className="w-[100%] text-justify px-7 top-[-5] text-[#A1A1AA] text-[19px]">adicione também suas informações
                        corporais para ajudar na montagem
                        de seus treinos
                    </Text>
                </View>
                <View className="px-7 justify-center" >
                    <View className='h-[65px] flex-row w-[100%] rounded-xl items-center bg-[#27272A] mt-[59px] mb-7 pl-2'>
                        <GenderIntersex size={30}  weight="light" color="#BCC4CC"/>
                        <Text className="text-[#BCC4CC] font-bold items-center pl-2"
                            style={{fontSize:16}}>{inputGenero == '' ? 'Gênero' : inputGenero}</Text>
                        <TouchableOpacity onPress={()=> setActiveModalGenero(true)} className="absolute right-[18]">
                            <CaretRight size={32} color="#BCC4CC"/>
                        </TouchableOpacity>
                    </View>                    
                    <View className='h-[65px] flex-row w-[100%] rounded-xl items-center bg-[#27272A] mb-7 pl-2'>
                            <Image className=" h-[30px] w-[30px]"
                            source={require('../assets/images/altura.png')}/>
                            <Text className="text-[#BCC4CC] font-bold items-center pl-2"
                            style={{fontSize:16}}>{inputAltura == '' ? 'Altura' : `${inputAltura.replace('.', ',')} cm`} </Text>
                        <TouchableOpacity onPress={()=> setActiveModalAltura(true)} className="absolute right-[18]">
                            <CaretRight size={32} color="#BCC4CC"/>
                        </TouchableOpacity>
                    </View>
                    <View className='h-[65px] flex-row w-[100%] rounded-xl items-center bg-[#27272A] mb-[82px] pl-2'>
                                <Image className=" h-[30px] w-[30px]"
                                source={require('../assets/images/peso.png')}/>
                                <Text className="text-[#BCC4CC] font-bold items-center pl-2"
                                style={{fontSize:16}}>{inputPeso == '' ? 'Peso' : `${inputPeso.replace('.', ',')} kg`} </Text>
                        < TouchableOpacity onPress={()=> setActiveModalPeso(true)} className="absolute right-[18]">
                                <CaretRight size={32} color="#BCC4CC"/>
                        </TouchableOpacity>
                    </View>
                    <View className='h-[65px] w-[100%] rounded-xl items-center bg-zinc-900 justify-center'>
                        <TouchableOpacity 
                        className="h-[65px] w-[100%] rounded-xl items-center bg-violet-700 justify-center" onPress={()=>registrar()}>
                            <Text className="items-center justify-center text-white font-bold" 
                            style={{fontSize:17}}>Registrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
                </View>
            </View>
                <MainModal active={activeModalGenero} setActive={setActiveModalGenero} height={400} marginTop={225}>
                    <View className="w-full h-full">
                        <Text className="text-white font-bold mb-10 pl-2 "
                        style={{fontSize:24}}
                        >Gênero</Text>
                        <View className="flex-row">
                            <BouncyCheckbox className="pl-2 mb-10"
                                size={23}
                                fillColor="#6D28D9"
                                unFillColor="#27272A"
                                iconStyle={{ borderColor:"#6D28D9" }}
                                innerIconStyle={{ borderWidth: 1 }}
                                textStyle={{ }}
                                isChecked={inputGenero.includes("Masculino")}
                                onPress={()=> setInputGenero(prevState => prevState == "Masculino" ? "" : "Masculino")}
                                >
                            </BouncyCheckbox>
                            <Text className="text-white top-[-3]"
                            style={{fontSize:20}}
                            >Masculino
                            </Text>
                        </View>
                        <View className="flex-row">
                        <BouncyCheckbox className="pl-2 mb-10"
                            size={23}
                            fillColor="#6D28D9"
                            unFillColor="#27272A"
                            iconStyle={{ borderColor: "#6D28D9" }}
                            innerIconStyle={{ borderWidth: 1 }}
                            textStyle={{ }}
                            isChecked={inputGenero.includes("Feminino")}
                            onPress={()=>setInputGenero(prevState => prevState == "Feminino" ? "" : "Feminino")}
                            >
                        </BouncyCheckbox>
                        <Text className="text-white top-[-3]"
                            style={{fontSize:20}}
                            >Feminino
                            </Text>
                        </View>
                        <View className="flex-row">
                        <BouncyCheckbox className="pl-2 mb-4"
                            size={23}
                            fillColor="#6D28D9"
                            unFillColor="#27272A"
                            iconStyle={{ borderColor: "#6D28D9" }}
                            innerIconStyle={{ borderWidth: 1 }}
                            textStyle={{ }}
                            isChecked={inputGenero.includes("Prefiro não informar")}
                             onPress={()=>setInputGenero(prevState => prevState == "Prefiro não informar" ? "" : "Prefiro não informar")}
                            >
                        </BouncyCheckbox>
                        <Text className="text-white top-[-3]"
                            style={{fontSize:20}}
                            >Prefiro não informar
                            </Text>
                        </View>
                        <View className='h-[65px] w-[100%] mt-[30px] rounded-xl items-center justify-center'>
                            <TouchableOpacity className="h-[65px] w-[100%] rounded-xl items-center bg-[#6D28D9] justify-center" onPress={()=>setActiveModalGenero(false)}>
                                <Text className="items-center justify-center text-white font-semibold" 
                                style={{fontSize:20}}>Concluído</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </MainModal>
                
                <MainModal active={activeModalAltura} setActive={setActiveModalAltura} height={400} marginTop={225}>
                    <View className="w-full h-full items-center justifycenter">
                        <Text className="text-white font-bold mt-14 mb-8 px-2"
                        style={{fontSize:31}}
                        >Digite a sua altura</Text>
                        <View className="w-[100%] h-[65px] bg-zinc-700 border-b-2 rounded-md border-[#6D28D9] px-2 justify-center items-center flex-row mb-16" >
                            <TextInput
                            style={{fontSize:30}}
                            className=" text-white px-2"
                            keyboardType = 'numeric'
                            value={inputAltura}
                            onChangeText={setInputAltura}
                            maxLength={3}
                            />
                            <Text
                            style={{fontSize:30}}
                            className=" text-white px-2"
                            >cm</Text>
                        </View>
                        <View className='h-[75px] w-[100%] rounded-xl items-center justify-center'>
                            <TouchableOpacity className="h-[50px] w-[100%] rounded-xl items-center bg-[#6D28D9] justify-center" onPress={()=>setActiveModalAltura(false)}>
                                <Text className="items-center justify-center text-white font-semibold" 
                                style={{fontSize:20}}>Concluído</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </MainModal>
                <MainModal active={activeModalPeso} setActive={setActiveModalPeso} height={400} marginTop={225}>
                    <View className="w-full h-full">
                        <Text className="text-white font-bold mt-14 mb-8 px-2"
                            style={{fontSize:31}}
                            >Digite o seu peso</Text>
                            <View className="w-[100%] h-[65px] bg-zinc-700 border-b-2 rounded-md border-[#6D28D9] justify-center items-center flex-row mb-16" >
                                <TextInput
                                style={{fontSize:30}}
                                className=" text-white px-2"
                                keyboardType = 'numeric'
                                value={inputPeso}
                                onChangeText={setInputPeso}
                                maxLength={5}
                                />
                                <Text
                                style={{fontSize:30}}
                                className="text-white px-2"
                                >kg</Text>
                            </View>
                            <View className='h-[75px] w-[100%] rounded-xl items-center justify-center'>
                                <TouchableOpacity className="h-[50px] w-[100%] rounded-xl items-center bg-[#6D28D9] justify-center" onPress={()=>setActiveModalPeso(false)}>
                                    <Text className="items-center justify-center text-white font-semibold" 
                                    style={{fontSize:20}}>Concluído</Text>
                                </TouchableOpacity>
                            </View>
                        </View>  
                </MainModal>
        </View>

    )
}