import { Alert, ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { BackButton } from "../components/BackButton";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { Pencil, Plus, UploadSimple } from "phosphor-react-native";
import colors from "tailwindcss/colors";
import { useNavigation } from "@react-navigation/native";
import { ModalInputIntervalo } from "../components/Modals/ModalInputIntervalo";
import MainModal from "../components/Modals/Main";
import { z } from "zod";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../lib/axios";
import WeekDays from "../components/WeekDays";


export default function NewTreino({route}){

    const [nome, setNome] = useState("Novo treino")
    const [intervalo, setIntervalo] = useState("0")
    const [activeModalIntercalo, setActiveModalIntercalo] = useState(false)
    const [activeModalNomeTreino, setActiveModalNomeTreino] = useState(false)
    const [activeModalSave, setActiveModalSave] = useState(false)
    const [token, setToken] = useState(null);
    const [weekDays, setWeekDays] = useState<number[]>([]) 

    const [user, setUser] = useState({});    useEffect(() => {
        const retrieveToken = async () => {
          try {
            setToken( await AsyncStorage.getItem('token'))
            setUser(JSON.parse(await AsyncStorage.getItem('user')))
        } catch (error) {
            console.error(error);
          }
        };
    
        retrieveToken();
        
      }, []);


    const data = {
        nome: nome,
        intervalo: intervalo != ""? intervalo : "0" ,
        exercicios: route.params.exercicios ? route.params.exercicios: []
    }
    
    async function handleSaveTreino(){
        try {
            const validatorTreino = z.object({
                userId: z.string(),
                nome: z.string(),
                intervalo: z.number().min(0, {message: "O intervalo deve ser no minimo maior ou igual a zero"}),
                diasDaSemana: z.string().min(1, {message: "Você deve marcar ao menos um dia da semana"}),

                exercicios: z.array(z.object({
                    exericioId: z.string(),
                    "numeroSer": z.number().min(1, {message: "Você deve ter no minimo uma série para o exercicio"}),
                    "numeroRep": z.number().min(1, {message: "Você deve ter no minimo uma repetição para o exercicio"}),
                    "carga": z.number().min(0, {message: "A carga do exercicio deve ser maior que zero"}),
                    "intervalo": z.number().min(0, {message: "O intervalo do exercicio deve ser maior que zero"}),
                })) 
            
            })
            const weekDaysFormat = weekDays.length == 0 ? "": weekDays.join('');
            const dataTreino = {
                userId: user.id,
                nome: nome,
                intervalo: Number(intervalo),
                diasDaSemana: String(weekDaysFormat),
                exercicios: data.exercicios.map((item) => {
                    return {
                        "exericioId": item.idExercicio,
                        "numeroSer": parseInt(item.NumSer),
                        "numeroRep": parseInt(item.numRep),
                        "carga": Number(item.carga),
                        "intervalo": Number(item.intervalo)
                    }
                }) 
            }
             
            const validateddata = validatorTreino.parse(dataTreino)   
            
            const response = await api.post('/treino/', validateddata).catch((response) => {
                Alert.alert("Erro interno do servidor")
            })
            navigate('Treinos')
        } catch (error) {
            const erro = JSON.parse(error.message)[0].message
            Alert.alert(erro)
        }
        
    }
    
    const {navigate} = useNavigation()
    return (
        <View className="bg-zinc-950 h-full w-full">
            <View className="h-full w-full" style={{opacity: activeModalIntercalo || activeModalNomeTreino || activeModalSave ?0.4:1}}>

            <View className="h-[8%] px-3 py-7">
                <BackButton/>
            </View>
            <View className="h-[12%] w-full px-3 ">
                <View className="flex-row items-center gap-x-2">
                    <Text className="text-3xl text-white font-bold">{data.nome}</Text>
                    <TouchableOpacity
                        onPress={() => setActiveModalNomeTreino(true)}
                    >
                        <Pencil size={20} weight="bold" color={colors.zinc[300]}/>
                    </TouchableOpacity>
                </View>
                <View className="flex-row items-center">
                    <Text className="text-[18px] text-zinc-400">Intervalo entre exercícios: {data.intervalo} </Text>
                    <TouchableOpacity
                        onPress={() => setActiveModalIntercalo(true)}
                    >
                        <Pencil size={18} weight="bold" color={colors.zinc[300]}/>

                    </TouchableOpacity>
                </View>
                <View className="flex-row items-center">
                    <Text className="text-xl text-zinc-400">N° de exercicios: {data.exercicios.length}</Text>
                </View>
                
            </View>
            <View className="h-[10%] w-full px-3 ">
                <Text className="text-2xl text-white">Dias da semana</Text>
                    <WeekDays setWeekDays={setWeekDays} weekDays={weekDays}/>
            </View>
            <View className="h-[74%]  w-full gap-y-3  pb-7 pt-3 px-2">
                <Text className="text-white text-xl font-bold">Exercicios</Text>
                <ScrollView className="pb-4 h-[90%]">
                {
                  data.exercicios.length > 0  ?
                  data.exercicios.map((item) => (
                      <TouchableOpacity
                        onPress={() => navigate('Exercicio', {exercicio: {exercicio: {nome: item.nome, id: item.id}} , action:route.params.action })}
                        key={item.nome}
                      >
                      <View className="h-28 my-1 w-full bg-zinc-800 rounded-xl  flex-row border-2 border-zinc-700">
                          <View className="h-full w-2/6  items-center justify-center rounded-xl bg-zinc-700">
                              <Text className="text-2xl text-white">GIF</Text>
                          </View>
                          <View className="h-full w-4/6   justify-center pl-4">
                            <Text className="text-xl font-bold text-white">{item.nome}</Text>
                            <Text className="font-semibold text-white">Repetições: {`${item.NumSer}X${item.numRep}`}</Text>
                            <Text className="font-semibold text-white">Descanso: {item.intervalo}s</Text>
                            <Text className="font-semibold text-white">Carga: {item.carga}kg</Text>
                          </View>
                      </View>
                  </TouchableOpacity>
                    ))
                    : <View className="h-64 bg-zinc-950 items-center justify-center "><Text className="text-white text-xl ">Nenhum exercicio encontrado</Text></View>
                }
                </ScrollView>
                <View className="flex-row gap-x-2 w-full justify-center">
                    <TouchableOpacity
                        className="h-12 w-36 rounded-md bg-violet-600 flex-row justify-evenly items-center p-2"
                        onPress={() => {navigate('NewExercicioTreino', {exercicios: data.exercicios, action: "newTreino"} )}}
                    >
                        <Plus size={20} color={colors.white} weight="bold"/>
                        <Text className="text-xl font-bold text-white">Exercício</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="h-12 w-36 rounded-md bg-green-600 flex-row justify-evenly items-center p-2"
                        onPress={() => setActiveModalSave(true)}
                    >
                        <UploadSimple size={20} color={colors.white} weight="bold"/>
                        <Text className="text-xl font-bold text-white">Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            <ModalInputIntervalo 
                title="Defina o intervalo entre cada Exercicio" 
                active={activeModalIntercalo} 
                setActive={setActiveModalIntercalo}
                setIntervalo={setIntervalo}
                intervalo={intervalo}
                action={route.params.action}
            />
            <MainModal active={activeModalNomeTreino} setActive={setActiveModalNomeTreino}>
                <View className="h-full w-full">
                    <Text className="text-[20px] text-white font-bold">Defina o nome do treino:</Text>
                    <TextInput 
                        placeholderTextColor={colors.zinc[500]} 
                        value={nome} 
                        className="text-white text-[20px] bg-zinc-800 rounded-md px-4 h-16 w-5/6 mt-8"
                        onChangeText={setNome}
                        />
                    
                </View>
            </MainModal>
            <MainModal active={activeModalSave} setActive={setActiveModalSave}>
                <View className="h-full w-full py-4">
                <Text className="text-[20px] text-white font-bold">Deseja Salvar o treino criado ?</Text>

                    <View className="flex-row gap-x-4 absolute bottom-0">
                        <TouchableOpacity 
                            className="bg-zinc-800 rounded-md border-[1px] border-zinc-600 p-2 w-24 items-center"
                            onPress={handleSaveTreino}
                        ><Text className="text-green-500 text-xl font-bold ">SIM</Text></TouchableOpacity>
                        <TouchableOpacity 
                            className="bg-zinc-800 rounded-md border-[1px] border-zinc-600 p-2 w-24 items-center"
                            onPress={()=> setActiveModalSave(false)}

                        ><Text className="text-red-600 text-xl font-bold">NÃO</Text></TouchableOpacity>
                    </View>
                </View>
            </MainModal>
        </View>
    )    
}