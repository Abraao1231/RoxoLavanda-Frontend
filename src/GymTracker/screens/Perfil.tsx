import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Camera, UserCircle, PencilSimple, Gear, Globe, Star, SignOut, CaretRight} from 'phosphor-react-native';
import { BackButton } from '../components/BackButton';
import { PerfilButton } from '../components/PerfilButton';

const dataButtons = [
    {
        title: "Editar Perfil",
        icon: <PencilSimple size={32} weight="light" color='#52525B'/>
    },
    {
        title:'Definições gerais',
        icon: <Gear size={32} weight="light" color='#52525B'/>
    },
    {
        title: 'Idioma',
        icon: <Globe size={30} weight="bold" color='#52525B'/>
    },
    {
        title: 'Nos Avalie',
        icon: <Star size={30} weight="bold" color='#52525B'/>
    }
]


export default function Perfil(){
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
                            <PerfilButton key={item.title} title={item.title} icon={item.icon}/>
                        )
                    })
                }
                
                <TouchableOpacity onPress={() => { // handle onPress
                }} style={styles.rowpink}>
                    <Text style={styles.rowLabel}>Sair</Text>
                    <View style={styles.rowIconPink}>
                        <SignOut size={32} weight="light" color='white' />
                    </View>
                </TouchableOpacity>
                    </View>  
                <View style={styles.versionBox}>
                    <Text style={styles.versionText}>Versão 1.0.0</Text>
            </View>
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
        height: 65,
        width: 184.5,
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