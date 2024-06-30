import { useState } from "react";
import { View, Text, Modal, StatusBar, TouchableOpacity, TextInput, Alert } from "react-native";
import MainModal from "./Main";
import { api } from "../../lib/axios";
interface ModalProps {
    active : boolean
    setActive: Function
    title: string
    carga: string
    setCarga: Function
    action: string
    treinoId?: string
}

export function ModalInputCarga({active, setActive, title, setCarga, carga, action,treinoId}: ModalProps){

    const [input, setInput] = useState(carga.toString())

    async function handleSaveChange(){
        if (action != 'newTreino'){
            const upCarga = parseInt(input)
            if (upCarga < 0 || isNaN(upCarga) ){
                Alert.alert('Valor Invalido')
                return;
            }
            await api.patch(`exercicio/treino?id=${treinoId}`,{carga: upCarga})
            .catch(()=> {
                Alert.alert("Erro de conexão do servidor")  
            })
        }
        
        setCarga(input)
        setActive(false)
    }
    return (
        <MainModal active={active} setActive={setActive} >
            <View className="w-full h-full px-2 ">
                <Text className="text-white  text-[20px] font-bold ">{title}</Text>
                <View className="w-full flex-row gap-x-2 items-center my-auto">
                    <Text className="text-white text-[16px]">Carga: </Text>
                    <TextInput
                        className="w-12 border-b-2 text-[16px] border-zinc-400 text-white px-2" 
                        keyboardType = 'numeric'
                        value={input}
                        onChangeText={setInput}
                        maxLength={3}
                    />
                    <Text className="text-white text-[16px]">Kg</Text>
                    
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