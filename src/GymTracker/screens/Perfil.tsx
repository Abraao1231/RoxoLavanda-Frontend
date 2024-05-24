import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity} from "react-native";

export default function Perfil(){
    return (
        
        <><View style={styles.container}>
            <Text className="text-white">Perfil</Text>
        </View>
        <View>
            <TouchableOpacity>
                <Text>Editar perfil</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity>
                <Text>Definições gerais</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity>
                <Text>Idioma</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity>
                <Text>Nos Avalie</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity>
                <Text>Sair</Text>
            </TouchableOpacity>
        </View>
        
        
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 39,
        backgroundColor: '#09090B',
        alignItems:'center'
    },
    button: {
        backgroundColor:'red',
        padding: 40,
    },
});