import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Camera, UserCircle, PencilSimple, Gear, Globe, Star, SignOut, CaretRight} from 'phosphor-react-native';
import { BackButton } from '../components/BackButton';
import { PerfilButton } from '../components/PerfilButton';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const dataButtons = [
    {
        title: "Editar Perfil",
        screen: 'EditarPerfil',
        icon: <PencilSimple size={32} weight="light" color='#52525B'/>
    },
    {
        title:'Definições gerais',
        screen: 'none',

        icon: <Gear size={32} weight="light" color='#52525B'/>
    },
    {
        title: 'Idioma',
        screen: 'Idioma',
        icon: <Globe size={30} weight="bold" color='#52525B'/>
    },
    {
        title: 'Nos Avalie',
        screen: 'none',

        icon: <Star size={30} weight="bold" color='#52525B'/>
    }
]
import { Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Perfil(){
    const [activeModal, setActiveModal] = useState(false)
    const {navigate} = useNavigation()
    async function handleExitAccount() {
        await AsyncStorage.removeItem('user')
        await AsyncStorage.removeItem('token')
        navigate('Home')
    }

    return (
        
        <>
        <View className='bg-zinc-950 p-4'>
            <BackButton />
        </View>
        <View style={styles.container}>
            <Text style={styles.titulo}>Perfil</Text>
            <TouchableOpacity>
                <View style={styles.profileAvatar}>
                    <UserCircle size={136} weight="light" color='#3F3F46'/>
                </View>
                <View style={styles.profileAction}>
                    <Camera color='#222222'size={25} weight="fill"/>
                </View>                       
            </TouchableOpacity>

        </View>

            <View style={styles.teste}>

                {
                    dataButtons.map((item) => {
                        return (
                            <PerfilButton key={item.title} title={item.title} icon={item.icon} screen={item.screen}/>
                        )
                    })
                }
                
                <TouchableOpacity onPress={() => setActiveModal(true)} 
                style={styles.rowpink}>
                    <Text style={styles.rowLabel}>Sair</Text>
                    <View style={styles.rowIconPink}>
                        <SignOut size={32} weight="light" color='white' />
                    </View>
                </TouchableOpacity>
                    </View>  
                <View style={styles.versionBox}>
                    <Text style={styles.versionText}>Versão 1.0.0</Text>
            </View>
            <Modal
                visible={activeModal}
                animationType="slide"
                transparent={true}     
                className="h-full w-full "   
                
            > 
             
                <View
                    className='h-52 w-5/6 m-auto bg-zinc-900 rounded-3xl p-6 border-[1px] border-zinc-700'
                    > 
                    <View className="h-5/6 pt-2">
                        <Text className="text-[20px] text-white font-bold">Deseja Sair de sua conta ?</Text>
                    </View>
                    <View className="h-1/6 flex flex-row gap-x-4 justify-end">
                        <TouchableOpacity
                            onPress={handleExitAccount}
                        >
                            <Text className="text-red-500 font-bold">SIM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setActiveModal(false)}
                        >
                            <Text className="text-blue-500 font-bold">NÃO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#09090B',
        alignItems:'center',
    },
    titulo: {
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold',
        paddingBottom: 45,
    },
    profileAvatar: {
        position:'relative',
        backgroundColor:'#27272A',
        width: 148,
        height: 148,
        borderRadius: 9999,
        alignItems:'center',
        justifyContent:'center',
    },
    profileAvatarWrapper: {
        position: 'relative',
    },
    profileAction: {
        position: 'absolute',
        right: -2,
        bottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 33,
        height: 33,
        borderRadius: 9999,
        backgroundColor: 'white',
    },
    teste: {
        backgroundColor: '#09090B',
        alignItems: 'center',
        paddingBottom: 20,
    },
    rowpink: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height: 60,
        width: 144.5,
        backgroundColor: '#6D28D9',
        borderRadius: 10,
    },
    rowLabel: {
        fontSize: 20,
        fontWeight: '700',
        color: 'white',
    },
    versionText:{
        fontSize: 13,
        color:'rgba(255, 255, 255, 0.5)',
    },
    versionBox: {
        backgroundColor:'#09090B',
        alignItems:'center',
        justifyContent:'center',
        paddingBottom: 10,
    },
    rowIconPink: {
        width: 32,
        height: 32,
        borderRadius: 9999,
        marginLeft: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },   
    
});