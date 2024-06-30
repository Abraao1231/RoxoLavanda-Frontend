import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import MainModal from "./Main";
import { useState } from "react";
import { Alert } from "react-native";
import { api } from "../../lib/axios";

interface ModalProps {
    active : boolean
    setActive: Function
    title: string
    setNumRep: Function
    setNumSer: Function
    rep: string
    ser: string
    altura?:  Number
    action: string
    treinoId?: string

}

export function ModalInputRepeticao({active,setActive, setNumRep, setNumSer, title, altura, ser, rep,action, treinoId}: ModalProps){
    
    const [inpuRep, setInputRep] = useState(rep.toString())
    const [inputSer, setInputSer] = useState(ser.toString())
    async function handleSaveChange(){
        if (action != 'newTreino'){
            const upRep = parseInt(inpuRep)
            const upSer = parseInt(inputSer)

            if (upRep < 1 || isNaN(upRep) || upSer < 1 || isNaN(upSer) ){
                Alert.alert('Valor Invalido')
                return;
            }
            await api.patch(`exercicio/treino?id=${treinoId}`,{numeroSer: upSer, numeroRep: upRep}).
            catch(()=> {
                Alert.alert("Erro de conexão do servidor")  
            })
        }
        setNumRep(inpuRep)
        setNumSer(inputSer)
        setActive(false)
    }
    return (
       <MainModal setActive={setActive} active={active} height={altura}>
            <View className="w-full h-full px-2">
                <Text className="text-white  text-[20px] font-bold ">{title}</Text>
                <View className="w-full  my-auto">
                    
                   <View className="flex-row gap-x-2 my-2">
                        <Text className="text-white text-[16px]">Número de séries:</Text>
                        <TextInput
                            className="w-12 border-b-2 h-5 text-[16px] border-zinc-400 text-white px-2" 
                            keyboardType = 'numeric'
                            value={inputSer}
                            onChangeText={setInputSer}
                            maxLength={3}
                        />
                   </View>
                   <View className="flex-row gap-x-2 my-2">
                        <Text className="text-white text-[16px]">Número de repetições:</Text>
                        <TextInput
                            className="w-12 border-b-2 h-5 text-[16px] border-zinc-400 text-white px-2" 
                            keyboardType = 'numeric'
                            value={inpuRep}
                            onChangeText={setInputRep}
                            maxLength={3}
                        />
                   </View>
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