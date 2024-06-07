import React, {useState} from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import styles from "../screens/style"
import {CaretRight} from 'phosphor-react-native';
import { BackButton } from '../components/BackButton';

export default function DefinicoesGerais(){
    const [isEnabled, setIsEnabled] = useState(false);
    const alternarSwitch = () => {
        setIsEnabled(previousState => !previousState);
    }

    const dados = [
        {
            label: 'Unidades',
            value: 'kg, cm',
        },
        {
            label: 'Primeiro dia da semana',
            value:  'Domingo',
        },
    ];


    return (

        <>
        
            <View style={styles.BackButton}>
                <BackButton />
            </View>
        <View style={styles.container}>
            <Text style={styles.titulo}>Definições gerais</Text>
        </View>


        <View>
            <View style={styles.teste}>
                <TouchableOpacity onPress={() => { // handle onPress
                }} style={styles.row}>
                  <Text style={styles.rowLabel}>Efeitos sonoros</Text> 
                  <View style={styles.rowSpacer}>
                    <Switch
                        trackColor={{false: "#475569", true: "#8B5CF6"}}
                        thumbColor={!isEnabled ? "#E4E4E7" : "#E4E4E7" }
                        onValueChange={alternarSwitch}
                        value={isEnabled}
                    />
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { // handle onPress
                }} style={styles.row}>
                  <Text style={styles.rowLabel}>Alertas</Text>  
                  <View style={styles.rowSpacer}/>
                    <CaretRight size={30} weight="bold" color='#52525B'/>
                </TouchableOpacity>

                <View style={styles.dados}>
                    {dados.map(({label, value }, index) => (
                    <View key={index}>
                    <TouchableOpacity onPress={() => { // handle onPress
                    }} style={styles.row}>
                      <Text style={styles.rowLabel}>{label}</Text>
                      <Text style={styles.rowValue}>{value}</Text>
                      <View style={styles.rowSpacer}/>
                        <CaretRight size={30} weight="bold" color='#52525B'/>
                    </TouchableOpacity>
                    </View>
                    ))}
                </View>

                <TouchableOpacity onPress={() => { // handle onPress
                }} style={styles.row}>
                  <Text style={styles.rowLabel}>Integrações</Text>  
                  <View style={styles.rowSpacer}/>
                    <CaretRight size={30} weight="bold" color='#52525B'/>
                </TouchableOpacity>
            </View>
            <View style={styles.teste2}>
            <TouchableOpacity onPress={() => { // handle onPress
                }} style={styles.row}>
                  <Text style={styles.rowLabel}>Política de privacidade</Text>  
                  <View style={styles.rowSpacer}/>
                    <CaretRight size={30} weight="bold" color='#52525B'/>
                </TouchableOpacity>
            </View>
        </View>   
        </>
    );      
}