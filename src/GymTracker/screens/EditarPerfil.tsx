import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Modal} from "react-native";
import {Trash, GoogleLogo} from 'phosphor-react-native';
import { BackButton } from '../components/BackButton';
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../lib/axios";
import { useNavigation } from "@react-navigation/native";
export default function EditarPerfil(){
    const {navigate} = useNavigation()
    const [activeModal, setActiveModal] = useState(false)
    const [user, setUser] = useState({});
    useEffect(() => {
        const retrieveToken = async () => {
          try {
            setUser(JSON.parse(await AsyncStorage.getItem('user')))
        } catch (error) {
            console.error(error);
          }
        };
    
        retrieveToken();
      }, []);
    
    
      async function handleDeleteAcount(){
        
        // setActiveModal(true)
        api.delete(`/user/?id=${user.id}`)
            .catch((err) => {
                console.log(err.response.data.message);
            }).then( async (response) => {
                await AsyncStorage.removeItem('user')
                await AsyncStorage.removeItem('token')
                navigate('Home')       
            })
    }

      const dados = [
        {
            label: 'Nome',
            value: user.userName,
        },
        {
            label: 'Gênero',
            value:  user.genero,
        },
        {
            label: 'Altura',
            value: `${user.altura} m`,
        },
        {
            label: 'Peso',
            value: `${user.peso} kg`,
        },
        {
            label: 'Objetivo',
            value: 'Ganho muscular',
        },
        {
            label: 'Área de foco',
            value: 'Peito',
        },
    ];

      return (
        
        <View className="h-full w-full bg-zinc-950">
            <View className="h-full w-full" style={{opacity: activeModal?0.1:1}}>
            <View style={styles.BackButton}>
                <BackButton />
            </View>
            <View style={styles.container}>
                <Text style={styles.titulo}>Meu perfil</Text>
            </View>


            <View style={styles.dados} >
                {dados.map(({label, value }, index) => (
                    <View key={index}>
                    <TouchableOpacity onPress={() => { // handle onPress
                }} style={styles.row}>
                        <Text style={styles.rowLabel}>{label}</Text>
                        <Text style={styles.rowValue}>{value}</Text>
                    </TouchableOpacity>
                    </View>
                ))}
            </View>


        
            <View style={styles.teste}>
                
                    <View >
                        <TouchableOpacity 
                        onPress={() => {  }} 
                        style={styles.rowemail}>
                            <Text style={styles.textemail}>{user.email}</Text>
                            <View style={styles.iconemail}/>
                            <GoogleLogo size={20} color="#e8e8e8" weight="bold" />
                        </TouchableOpacity>
                    </View>
                
            </View>



            <View style={styles.teste}>
                <TouchableOpacity 
                    onPress={() => setActiveModal(true)} 
                    style={styles.rowdelete}>
                    <Text style={styles.textdelete}>Excluir conta</Text>
                    <View style={styles.icondelete}>
                        <Trash size={18} color="#EF4444" weight="bold" />
                    </View>
                </TouchableOpacity>
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
                        <Text className="text-[20px] text-white font-bold">Deseja excluir sua conta ?</Text>
                        <Text className="text-[14px] text-white font-semibold">Você perdera o acesso a sua conta e seus dados</Text>
                    </View>
                    <View className="h-1/6 flex flex-row gap-x-4 justify-end">
                        <TouchableOpacity
                            onPress={handleDeleteAcount}
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
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        alignItems:'center',
    },
    titulo: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    teste: {
        alignItems: 'center',
        paddingBottom: 40,
    },
    rowLabel: {
        marginLeft: -10,
        marginRight: 'auto',
        fontSize: 16,
        fontWeight: '700',
        color: '#D4D4D8',
    },
    rowValue: {
        fontSize: 16,
        fontWeight: '600',
        color: '#A1A1AA',
    },
    dados: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 30,
    },
    row: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 65,
        width: 355,
        backgroundColor: '#27272A',
        borderRadius: 10,
        marginBottom: 18,
        paddingLeft: 25,
        paddingRight: 12,
    },
    rowemail: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconemail: {
        marginLeft: 5,
    },
    textemail: {
        color:'white',
        fontWeight:'600',
        fontSize: 15,
    },
    rowdelete: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
    },
    textdelete: {
        color:'#EF4444',
        textDecorationLine:'underline',
        fontWeight: '700',
        fontSize: 13,
    },
    icondelete: {
        marginLeft: 5,
    },
    BackButton: {
        paddingTop: 50,
        paddingHorizontal: 20,
    }
});