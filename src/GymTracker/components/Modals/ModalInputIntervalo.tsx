import { useState } from "react";
import { View, Text, Modal, StatusBar, TouchableOpacity, TextInput } from "react-native";
import MainModal from "./Main";
import { api } from "../../lib/axios";
import { Alert } from "react-native";
interface ModalProps {
    active : boolean
    setActive: Function
    title: string
    setIntervalo: Function
    intervalo: String
    action: string
    treinoId?: string

}

export function ModalInputIntervalo({active, setActive, title, setIntervalo, intervalo, action, treinoId}: ModalProps, {route}){
    
    const [input, setInput] = useState(intervalo.toString())

    async function handleSaveChange(){
        const upIntervalo = parseInt(input)

        if (action != 'newTreino'){
            if (upIntervalo < 0 || isNaN(upIntervalo) ){
                Alert.alert('Valor Invalido')
                return;
            }
            await api.patch(`exercicio/treino?id=${treinoId}`,{intervalo: upIntervalo})
            .catch(()=> {
                Alert.alert("Erro de conexão do servidor")  
            })
        }
        if (action == "updateIntervalo"){
            await api.patch(`treino/?id=${treinoId}`, {intervalo: upIntervalo}).catch((response)=> {
            })
        }
        
        setIntervalo(input)
        setActive(false)
    }
    return (
        <MainModal active={active} setActive={setActive} >
            <View className="w-full h-full px-2">
                <Text className="text-white  text-[20px] font-bold ">{title}</Text>
                <View className="w-full flex-row gap-x-2 items-center my-auto">
                    <Text className="text-white text-[16px]">Intervalo de</Text>
                    <TextInput
                        className="w-12 border-b-2 text-[16px] border-zinc-400 text-white px-2" 
                        keyboardType = 'numeric'
                        value={input}
                        onChangeText={setInput}
                        maxLength={3}
                    />
                    <Text className="text-white text-[16px]">Segundos</Text>
                    
                </View>
                <View className="flex-row gap-x-4">
                    <TouchableOpacity 
                        onPress={() => handleSaveChange()}
                    >
                        <Text className="text-green-500 font-bold">SALVAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={()=>setActive(false)}    
                    >
                        <Text className="text-red-500 font-bold">CANCELAR</Text>
                    </TouchableOpacity>
                </View>
                </View> 
        </MainModal>
    )
}