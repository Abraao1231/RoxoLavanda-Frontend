import { Text, TouchableOpacity, View, Modal } from 'react-native';
import { Image } from 'react-native';
import LogoImage from '../assets/logoNova.png';
import { useState, useEffect } from 'react';
import { ButtonHome } from '../components/ButtonHome';
import { X } from 'phosphor-react-native';
import colors from 'tailwindcss/colors';
import { useNavigation } from '@react-navigation/native';
import clsx from 'clsx';
import { Shadow } from 'react-native-shadow-2';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
export default function Home() {
    const navigation = useNavigation();

    const [token, setToken] = useState(null);
    const [user, setUser] = useState({});
    const TelaInicial = "Home"
    const retrieveToken = async () => {
        try {
            setToken( await AsyncStorage.getItem('token'))
            setUser(await JSON.parse(await AsyncStorage.getItem('user')))
            
            // if (user && token){
            //     navigation.navigate("TabBar")                
            // }
                

      } catch (error) {
          console.error(error);
        }
      };
      useFocusEffect(useCallback(() => {
        retrieveToken();  
     
    }, []))
    const [activateRegister, setActivateRegister] = useState(false);

    useEffect(() => {
        const unsubscribeFocus = navigation.addListener('focus', () => {
            setActivateRegister(false);
        });

        return unsubscribeFocus;
    }, [navigation]);

    return (
        <View className="w-full h-full bg-zinc-950 flex items-center">
            <View className="h-[90%] w-full flex items-center top-[30%]">
                <Image blurRadius={activateRegister ? 2 : 0} source={LogoImage} className="mb-10" />
                <Text
                    // style={{ fontFamily: 'Viga' }}
                    className={clsx('text-white text-3xl transition-all font-bold', {
                        'opacity-30': activateRegister,
                        'opacity-100': !activateRegister,
                    })}
                >
                    GymTracker
                </Text>

                <Text
                    className={clsx('text-white text-xl font-semibold', {
                        'opacity-30': activateRegister,
                        'opacity-100': !activateRegister,
                    })}
                >
                    Eleve sua experiência fitness
                </Text>
            </View>
            <View className="h-[10%] w-full flex items-center justify-center">
                <TouchableOpacity
                    className="w-[90%] h-[70%] bg-violet-700 flex items-center justify-center rounded-md"
                    onPress={() => setActivateRegister(true)}
                >
                    <Text className="text-xl text-white">Começar</Text>
                </TouchableOpacity>
            </View>

            <Modal visible={activateRegister} animationType="slide" transparent={true}>
                <TouchableOpacity className="h-1/2 top-0" onPress={() => setActivateRegister(false)}></TouchableOpacity>
                <View className="h-1/2 w-full bg-zinc-950 absolute bottom-0 rounded-3xl">
                    <Shadow
                        distance={5}
                        startColor={'#000000'}
                        endColor={'#5200af'}
                        offset={[0, 0]}
                        className="w-full h-full flex py-20 px-12 rounded-[20px]"
                    >
                        <TouchableOpacity
                            className="absolute right-8 top-8 h-10 w-10 flex items-center justify-center"
                            onPress={() => setActivateRegister(false)}
                        >
                            <X color={colors.zinc[300]} size={20} />
                        </TouchableOpacity>

                        <View className="flex items-center justify-center">
                            <Text className="text-3xl text-white">Bem-vindo !</Text>
                            <Text className="text-white text-md text-center">
                                Realize o login ou crie uma conta para gerenciar e monitorar seus treinos
                            </Text>
                        </View>
                        <View className="w-full mt-10 flex items-center">
                            <ButtonHome screen="Register" title="Crie sua conta" />

                            <View className="flex flex-row items-center justify-center py-3">
                                <View className="bg-violet-700 h-[1px] w-[30%]"></View>
                                <Text className="text-violet-700 px-4 text-center">Ou</Text>
                                <View className="bg-violet-700 h-[1px] w-[30%]"></View>
                            </View>

                            <ButtonHome screen="Login" title="Login" />
                        </View>
                    </Shadow>
                </View>
            </Modal>
        </View>
    );
}
