import { Text, TouchableOpacity, View, ImageBackground, Modal } from 'react-native';
import { Image } from 'react-native';
import LogoImage from '../assets/logoNova.png'
import BgHome from '../assets/images/bg-home.jpg'
import { useState, useEffect } from 'react';
import { ButtonHome } from '../components/ButtonHome';
import { X, Lock, ShieldWarning } from 'phosphor-react-native';
import colors from 'tailwindcss/colors'
import { useNavigation } from '@react-navigation/native';
import clsx from 'clsx';
import { Shadow } from 'react-native-shadow-2';


export default function Home(){
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

                <ImageBackground 
                    source={BgHome} 
                    resizeMode='cover'
                    className='w-full'
                    blurRadius={3}
                >   
            
                        <View className='h-[90%] w-full flex items-center top-[30%]'>
                          
                                <Image blurRadius={activateRegister?2:0} source={LogoImage} className='mb-10'/>
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
                            className='w-[90%] h-[70%] bg-violet-700 flex items-center justify-center rounded-md'
                            onPress={() => setaAtivateRegister(true)}    
                            >
                            
                            <Text className='text-xl text-white'>Começar</Text>
                        </TouchableOpacity>
                    </View> 

                </ImageBackground>
                                    
            <Modal
                visible={activateRegister}
                animationType="slide"
                transparent={true}        
            > 
            
           
                <View
                    className='h-1/2 w-full  bg-zinc-950 absolute bottom-0 rounded-3xl'
                    > 
                    <Shadow 
                        distance={5} 
                        startColor={'#000000'} 
                        endColor={'#5200af'} 
                        offset={[0, 0]}
                        className="w-full h-full flex py-20 px-12 rounded-[20px]" 
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
                    </Shadow>
                          
                </View>
            </Modal>
        </View>
    )
}
