import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Trash, GoogleLogo} from 'phosphor-react-native';
import { BackButton } from '../components/BackButton';
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function EditarPerfil(){



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
        
        <View className="h-full w-full">
            <View style={styles.BackButton}>
                <BackButton />
            </View>
            <View style={styles.container}>
                <Text style={styles.titulo}>Meu perfil</Text>
            </View>


            <View style={styles.dados}>
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
                <TouchableOpacity onPress={() => { // handle onPress
                }} style={styles.rowdelete}>
                    <Text style={styles.textdelete}>Excluir conta</Text>
                    <View style={styles.icondelete}>
                        <Trash size={18} color="#EF4444" weight="bold" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: '#09090B',
        alignItems:'center',
    },
    titulo: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    teste: {
        backgroundColor: '#09090B',
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
        backgroundColor: '#09090B',
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
        backgroundColor:'#09090B',
        paddingTop: 50,
        paddingHorizontal: 20,
    }
});