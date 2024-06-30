import {  CheckFat, Pencil, Trash } from "phosphor-react-native";
import {  View, Text, TouchableOpacity, Alert } from "react-native";
import colors from "tailwindcss/colors";
import { api } from "../lib/axios";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BackButton } from "../components/BackButton";
import clsx from "clsx";
import { ModalInputIntervalo } from "../components/Modals/ModalInputIntervalo";
import { ModalInputRepeticao } from "../components/Modals/ModalInputRep";
import { ModalInputCarga } from "../components/Modals/ModalInputCarga";
import z from 'zod'

export default function Exercicio( {route}){
    
    const [intervalo, setIntervalo] = useState(route.params.exercicio.intervalo ? route.params.exercicio.intervalo: "0")
    const [NumRep, setNumrep] = useState(route.params.exercicio.numeroRep ? route.params.exercicio.numeroRep: "0")
    const [NumSer, setNumSer] = useState(route.params.exercicio.numeroSer ? route.params.exercicio.numeroSer: "0")
    const [carga, setCarga] = useState(route.params.exercicio.carga ? route.params.exercicio.carga: "0")


    const [activeModalIntercalo, setActiveModalIntercalo] = useState(false)
    const [activeModalcarga, setActiveModalCarga] = useState(false)
    const [activeModalRepeticao, setActiveModalRepeticao] = useState(false)
    
    const {navigate, goBack} = useNavigation()
    async function handleDeleteExercicio() {
        
        await api.delete(`/exercicio/treino?id=${route.params.exercicio.id}`)
        .then((response) => {
            if (response.status == 200)
                goBack()
            
        }).catch((response) => {
            Alert.alert('Erro ao conectar com o servidor')
        })
    }
    const data = {
        nome: route.params.exercicio.exercicio.nome
        ,idExercicio: route.params.exercicio.exercicio.id
        ,numRep: parseInt(NumRep)
        ,NumSer: parseInt(NumSer)
        ,carga: route.params.carga ? parseInt(route.params.numeroSer): parseInt(carga)
        ,intervalo: route.params.intervalo ? parseInt(route.params.intervalo): parseInt(intervalo) 
    }
    
    function saveExercicioNewTreino(){
        try {
            const validator = z.object({
                "nome": z.string(),
                "idExercicio": z.string(),
                "NumSer": z.number().min(1, {message: "Você deve ter no minimo uma série para o exercicio"}),
                "numRep": z.number().min(1, {message: "Você deve ter no minimo uma repetição para o exercicio"}),
                "carga": z.number().min(0, {message: "A carga do exercicio deve ser maior que zero"}),
                "intervalo": z.number().min(0, {message: "O intervalo do exercicio deve ser maior que zero"})
            })
            const validatedData = validator.parse(data)    
            
            if (route.params.action == "newTreino"){
                const exercicios = route.params.exercicios ? [...route.params.exercicios, validatedData]: [validatedData]
                navigate('NewTreino', {exercicios: exercicios })
            }

        } catch (error) {
            const erro = JSON.parse(error.message)[0].message
            Alert.alert(erro)
        }
        
    }
    
    async function addExercicio(){
        try {
            
            const validator = z.object({
                "exercicioId": z.string(),
                "treinoId": z.string(),
                "numeroRep": z.number().min(1, {message: "Você deve ter no minimo uma repetição para o exercicio"}),
                "intervalo": z.number().min(0, {message: "O intervalo do exercicio deve ser maior ou igual zero"}),
                "numeroSer": z.number().min(1, {message: "Você deve ter no minimo uma série para o exercicio"}),
                "carga": z.number().min(0, {message: "A carga do exercicio deve ser maior ou igual a zero"})
            })
            const dataAddTreino= {
                exercicioId:data.idExercicio,
                treinoId: route.params.treino.id,
                numeroRep: data.numRep,
                intervalo: data.intervalo,
                numeroSer: data.NumSer,
                carga: data.carga
            }
            const validatedData = validator.parse(dataAddTreino)   
             await api.post(`exercicio/treino`, dataAddTreino).catch((response) => {
                Alert.alert("erro ao conectar ao servidor")
            }).then((response) => {
                navigate('Treino', {data: route.params.treino})
            })

        } catch (error) {
            const erro = JSON.parse(error.message)[0].message
            Alert.alert(erro)
        }
        
    }
    
    let textButton = "";
    let handle = () => {};
    if (route.params.action == 'newTreino'){
         textButton = "Salvar Treino"
         handle = saveExercicioNewTreino
    } else if (route.params.action == 'addExercicio'){
        textButton = "Adicionar Exercicio"
        handle = addExercicio
    }  else {
         textButton = "Excluir Exercicio"
         handle = handleDeleteExercicio
    }
         
    return (
        <View className="w-full h-full bg-zinc-950 ">
            <View className="h-full w-full" style={{opacity: activeModalIntercalo || activeModalcarga || activeModalRepeticao?0.4:1}}>

            <View className="h-[7%] p-4"><BackButton/></View>
            <View className="h-[23%]  w-full p-4 py-8 items-center ">
                <View className="h-28 w-28 bg-zinc-900 items-center justify-center rounded-md border-2 border-zinc-600">
                    <Text className="text-white font-bold text-2xl">GIF</Text>
                </View>
                <Text className="text-3xl py-6 font-bold text-white">{data.nome}</Text>
            </View>
            <View className="h-[70%] w-full p-6 items-center justify-center ">
                <View className="w-full py-3">
                    {/* <Text className="text-2xl text-violet-700 font-bold">Descrição/Instruções</Text>
                    <Text className="text-zinc-400 text-xl py-4">{data.descricao}</Text> */}
                </View>
                <View className="gap-y-4 py-10 ">
                    <View className="w-full felx-row justify-between flex-row items-center ">
                        <Text className="text-violet-700 text-xl font-semibold">N° de repetições/series</Text>
                        <TouchableOpacity
                        onPress={() => setActiveModalRepeticao(true)}
                        className="flex-row items-center gap-x-1">
                            <Text className="text-zinc-300  text-[16px] font-semibold">{NumSer}X{NumRep}</Text>
                            <Pencil weight="bold"  size={15} color={colors.zinc[300]}/>
                        </TouchableOpacity>
                    </View>
                    <View className="w-full felx-row justify-between flex-row items-center ">
                        <Text className="text-violet-700 text-xl font-semibold">Carga</Text>
                        <TouchableOpacity
                            onPress={() => setActiveModalCarga(true)}

                            className="flex-row items-center gap-x-1">
                            <Text className="text-zinc-300  text-[16px] font-semibold">{data.carga}Kg</Text>
                            <Pencil weight="bold"  size={15} color={colors.zinc[300]}/>
                        </TouchableOpacity>
                    </View>
                    <View className="w-full felx-row justify-between flex-row items-center ">
                        <Text className="text-violet-700 text-xl font-semibold">Intervalo</Text>
                        <TouchableOpacity
                            onPress={() => setActiveModalIntercalo(true)}
                            className="flex-row items-center gap-x-1">
                                <Text className="text-zinc-300 text-[16px] font-semibold">{data.intervalo}s</Text>
                                <Pencil weight="bold" size={15} color={colors.zinc[300]}/>
                        </TouchableOpacity>
                    </View>
                </View>
               
                <TouchableOpacity 
                    onPress={handle}
                    className="flex-row w-full absolute bottom-8 justify-center items-center">
                    <Text className={clsx("text-[18px] font-semibold pr-2 text-white", {
                        ["text-red-500"]: route.params.action == "updateExercicio",
                        ["text-green-500"]: route.params.action == "newTreino" || route.params.action == "addExercicio",
                    })}>{textButton}</Text>
                    {
                        route.params.action == "updateExercicio"?
                        <Trash size={20} color={colors.red[500]}/>
                        : <CheckFat weight="fill" size={20} color={colors.green[500]}/>
                    }
                    
                </TouchableOpacity>
            </View>
         
            </View>
            <ModalInputIntervalo 
                title="Defina o intervalo entre cada serie" 
                active={activeModalIntercalo} 
                setActive={setActiveModalIntercalo}
                setIntervalo={setIntervalo}
                intervalo={intervalo}
                action={route.params.action}
                treinoId={route.params.exercicio.id}

            />
            <ModalInputRepeticao 
                title="Defina o numero de séries e repetições do exercício:" 
                active={activeModalRepeticao} 
                setActive={setActiveModalRepeticao}
                setNumRep={setNumrep}
                setNumSer={setNumSer}
                altura={300}
                rep={NumRep}
                ser={NumSer}
                action={route.params.action}
                treinoId={route.params.exercicio.id}

/> 
             <ModalInputCarga 
                title="Defina a carga do exercício" 
                active={activeModalcarga} 
                setActive={setActiveModalCarga}
                setCarga={setCarga}
                carga={carga}
                action={route.params.action}
                treinoId={route.params.exercicio.id}
            /> 
        </View>
    )
    
}