import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView} from "react-native";
import styles from "../screens/style"
import CountryFlag from "react-native-country-flag";
import Bandeiras from "../screens/bandeiras";

export default function Login(){




    return (
        
        <View style={styles.container}>
            <Text style={styles.titulo}>Idiomas</Text>
            <CountryFlag isoCode="BR" size={25} />
            <CountryFlag isoCode="BO" size={25} />
        </View>
    )
}