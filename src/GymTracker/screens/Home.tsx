import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Modal } from 'react-native';
import { BlurView } from 'expo-blur';
import { Image } from 'react-native';
import LogoImage from '../assets/logoNova.png'
import BgHome from '../assets/images/bg-home.jpg'
import { useState, useEffect } from 'react';
import { ButtonHome } from '../components/ButtonHome';
import { X } from 'phosphor-react-native';
import colors from 'tailwindcss/colors'
import { useNavigation } from '@react-navigation/native';
import clsx from 'clsx';
export  default function Home(){
    const navigation = useNavigation()
    const [activateRegister, setaAtivateRegister] = useState(false)
    
    useEffect(() => {
        const unsubscribeFocus = navigation.addListener('focus', () => {
            setaAtivateRegister(false);
        });
      
        return unsubscribeFocus;
      }, [navigation]);

    return (
       
        <View className='w-full h-full bg-zinc-900 flex items-center'>  

                <ImageBackground source={BgHome} 
                    resizeMode='cover'
                    className='w-full'
                    blurRadius={4}
                >   
            
                        <View className='h-[90%] w-full flex items-center top-[30%]'>
                          
                                <Image blurRadius={activateRegister?1:0} source={LogoImage} className='mb-10'/>
                                <Text className={clsx('text-white text-3xl transition-all', {
                                    ["opacity-0"]: activateRegister,
                                    ["opacity-100"]: !activateRegister 
                                    })}>
                                    GymTracker
                                </Text>

                                <Text className={clsx('text-white text-xl', {
                                    ["opacity-0"]: activateRegister,
                                    ["opacity-100"]: !activateRegister 
                                    })}
                                >
                                    Eleve sua expêriencia fitness
                                </Text>
                            
                        </View>
                    <View className='h-[10%] w-full flex items-center justify-center'>
                        <TouchableOpacity 
                            className=' w-[90%] h-[70%] bg-violet-700 flex items-center justify-center rounded-md'
                            onPress={() => setaAtivateRegister(true)}    
                            >
                            
                            <Text className='text-xl text-white'>Começar</Text>
                        </TouchableOpacity>
                    </View> 

                </ImageBackground>

            <Modal
                visible={activateRegister}
                animationType="slide"
                className=''
                transparent={true}        
            >
           
                <View
                    className='h-1/2 w-full bottom-0 bg-zinc-950 absolute flex py-20 px-12'
                >
                    <TouchableOpacity 
                        className='absolute right-8 top-8 h-10 w-10 flex items-center justify-center'
                        onPress={()=> setaAtivateRegister(false)}
                    >
                        <X color={colors.zinc[300]}  size={20} />
                    </TouchableOpacity>

                    <View className='flex items-center justify-center'>
                        <Text className='text-3xl text-white'>Bem-vindo !</Text>
                        <Text className='text-white text-md text-center'>Realize o login ou crie uma conta para gerenciar e monitorar seus treinos</Text>
                    </View>
                    <View className='w-full mt-10 flex items-center' >
                        <ButtonHome screen='Register' title='Crie sua conta'/>
                        
                        <View className='flex flex-row items-center justify-center py-3'>
                            <View className='bg-violet-700 h-[1px] w-[30%]'></View>
                            <Text className='text-violet-700 px-4 text-center'>Ou</Text>
                            <View className='bg-violet-700 h-[1px] w-[30%]'></View>
                        </View>
                        
                        <ButtonHome screen='Login' title='Login'/>
                    </View>
                        
                </View>
            </Modal>
        </View>
    )
}
