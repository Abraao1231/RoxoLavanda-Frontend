import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList} from "react-native";
import styles from "../screens/style"
import CountryFlag from "react-native-country-flag";
import Bandeiras from "../screens/bandeiras";

export default function Idiomas(){


    
    return (
        
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.titulo}>Idiomas</Text>
                    {
                        ["AD","AE","AF","AR","BE","BG","BM","BO","BR","BY","BZ","CA","CG","CL","CN","CU","DE","ES","FI","FR","HK","ID","IN","JO","JP","KW","LK","LU","LY","MN","US","VE","YE"].map((item) => (<CountryFlag isoCode={item} size={30}/>))
                    }
            </View>
        </ScrollView>
    
    )
}