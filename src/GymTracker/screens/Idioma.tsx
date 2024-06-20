import React, {useCallback, useEffect, useState} from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert} from "react-native";
import styles from "../screens/style"
import CountryFlag from "react-native-country-flag";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { BackButton } from "../components/BackButton";
import idiomas from '../data/idiomas.json'
export default function Idiomas(){
    const [isoCode, setIscoCode] = useState('');
    async function getLanguage() {
        try {
            const lang = await AsyncStorage.getItem('language')
            if (lang)
                setIscoCode(lang);    
            else
                setIscoCode('br'); 
        } catch (error) {
            setIscoCode('br');
        }
        
    }
    async function handleSaveLang(item : {isoCode: string, nome: string}){
        try {
            await AsyncStorage.setItem('language', item.isoCode)
            setIscoCode(item.isoCode)
        } catch (error) {
            Alert.alert("Não foi possivel alterar o idioma")
        }
    }
    useFocusEffect(useCallback(() => {
        getLanguage();
    },[]))
    return (    
        <ScrollView>
            <View style={styles.BackButton}>
                <BackButton />
            </View>
            <View style={styles.container}>
                <Text style={styles.titulo}>Selecione seu idioma</Text>
                <Text style={styles.paragrafo}>Selecione o idioma de acordo com o país de origem</Text>
                    {
                        
                        idiomas.map((item) => (
                        <TouchableOpacity 
                            key={item.isoCode}
                            style={styles.row}
                            onPress={() => handleSaveLang(item)}

                            >
                                
                            <CountryFlag isoCode={item.isoCode} size={25}/>
                            <Text style={styles.nome}>{item.nome}</Text>
                            <BouncyCheckbox
                                size={20}
                                fillColor="#6D28D9"
                                unFillColor="#FFFFFF"
                                iconStyle={{ borderColor: "#6D28D9" }}
                                innerIconStyle={{ borderWidth: 1 }}
                                textStyle={{ }}
                                isChecked={item.isoCode == isoCode}
                                onPress={() => handleSaveLang(item)}
                                style={styles.radioCheck}/>
                            </TouchableOpacity>))
                    }
            </View>
        </ScrollView>
    
    )
}