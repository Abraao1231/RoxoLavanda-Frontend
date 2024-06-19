import React, {useState} from "react";
import { View, Text, TouchableOpacity, ScrollView} from "react-native";
import styles from "../screens/style"
import CountryFlag from "react-native-country-flag";
import BouncyCheckbox from "react-native-bouncy-checkbox";



export default function Idiomas(){

    return (    
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.titulo}>Selecione seu idioma</Text>
                <Text style={styles.paragrafo}>Selecione o idioma de acordo com o país de origem</Text>
                    {
                        [{isoCode:"ad", nome: "Andorra"},
                            {isoCode: "af", nome: "Afeganistão"},
                            {isoCode: "ao", nome: "Angola"},
                            {isoCode: "ar", nome: "Angentina"},
                            {isoCode: "no", nome: "Áustria"},
                            {isoCode: "au", nome: "Austrália"},
                            {isoCode: "be", nome: "Bélgica"},
                            {isoCode: "br", nome: "Brasil"},
                            {isoCode: "cv", nome: "Cabo Verde"},
                            {isoCode: "kh", nome: "Camboja"},
                            {isoCode: "cm", nome: "Camarões"},
                            {isoCode: "ca", nome: "Canadá"},
                            {isoCode: "td", nome: "Chade"},
                            {isoCode: "cl", nome: "Chile"},
                            {isoCode: "cn", nome: "China"},
                            {isoCode: "hr", nome: "Croácia"},
                            {isoCode: "cu", nome: "Cuba"},
                            {isoCode: "cw", nome: "Curaçao"},
                            {isoCode: "cy", nome: "Chipre"},
                            {isoCode: "dk", nome: "Dinamarca"},
                            {isoCode: "dj", nome: "Djibouti"},
                            {isoCode: "dm", nome: "Dominica"},
                            {isoCode: "ec", nome: "Equador"},
                            {isoCode: "eg", nome: "Egito"},
                            {isoCode: "us", nome: "Estados Unidos"},
                            {isoCode: "es", nome: "Espanha"},
                            {isoCode: "ph", nome: "Filipinas"},
                            {isoCode: "fi", nome: "Finlândia"},
                            {isoCode: "fr", nome: "França"},
                            {isoCode: "in", nome: "Índia"},
                            {isoCode: "it", nome: "Itália"},
                            {isoCode: "jm", nome: "Jamaica"},
                            {isoCode: "jp", nome: "Japão"},
                            {isoCode: "pa", nome: "Panamá"},
                            {isoCode: "py", nome: "Paraguai"},
                            {isoCode: "pe", nome: "Peru"},
                            {isoCode: "pt", nome: "Portugal"},
                            {isoCode: "ru", nome: "Rússia"},
                            {isoCode: "ve", nome: "Venezuela"},
                            {isoCode: "zw", nome: "Zimbábue"},
                        ]
                        .map((item) => (<TouchableOpacity style={styles.row}>
                        <CountryFlag isoCode={item.isoCode} size={25}/>
                        <Text style={styles.nome}>{item.nome}</Text>
                        <BouncyCheckbox
                            size={20}
                            fillColor="#6D28D9"
                            unFillColor="#FFFFFF"
                            iconStyle={{ borderColor: "#6D28D9" }}
                            innerIconStyle={{ borderWidth: 1 }}
                            textStyle={{ }}
                            onPress={(isChecked: boolean) => {console.log(isChecked)}}
                        style={styles.radioCheck}/>
                    </TouchableOpacity>))
                    }
            </View>
        </ScrollView>
    
    )
}