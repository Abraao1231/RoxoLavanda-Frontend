import { View, Text, TouchableOpacity, ScrollView} from "react-native"
import { BackButton } from "../components/BackButton"
import { Barbell, Pencil, Plus, Trash } from "phosphor-react-native"
import CardExercicio from "../components/CardExercicio"
import { useEffect, useState } from "react"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { useCallback } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { api } from "../lib/axios"
import colors from "tailwindcss/colors"
import MainModal from "../components/Modals/Main"
import { TextInput } from "react-native"
import { ModalInputIntervalo } from "../components/Modals/ModalInputIntervalo"
import WeekDays from "../components/WeekDays"
export default function Treino({ route }){

    const [nome, setNome] = useState(route.params.data.nome)
    const [intervalo, setIntervalo] = useState(String(route.params.data.intervalo))
    const [activeModalIntercalo, setActiveModalIntercalo] = useState(false)
    const [activeModalNomeTreino, setActiveModalNomeTreino] = useState(false)
    const [active, setActive] = useState(false)
    const [exercicios, setExercicios] = useState([]);
    const {navigate} = useNavigation()
    const [inputNome, setInputNome] = useState("")
    const [weekDays, setWeekDays] = useState<number[]>(route.params.data.diasDaSemana.split('').map((item) => parseInt(item))) 
    // cosnt [activeModalWeekDays, setactiveModalWeekDays]
    useEffect(() =>  {
        const sendData = async ()=> {
            await api.patch(`treino/?id=${route.params.data.id}`, {diasDaSemana: weekDays.join('')})
        }
        sendData();
    }, [weekDays])

    async function getData() {
        try {
            const token = await AsyncStorage.getItem('token')
            const response = await api.get(`/exercicio/treino?id=${route.params.data.id}`);
            setExercicios(response.data);            
      } catch (error) {
          console.error(error.response.data);
        }
      };

      useFocusEffect(useCallback(() => {
        getData();   
    }, []))
    
    async function handleDeleteTreino(){
        await api.delete(`treino/?id=${route.params.data.id}`)
        setActive(false)
        navigate('Treinos')
    }
    return (
        <View className="h-full w-full  bg-zinc-950 p-2">
            <View className="h-full w-full" style={{opacity: active || activeModalIntercalo || activeModalNomeTreino ?0.4:1}}>

                <View className="w-full h-1/6 justify-center ">
                    <View className=" h-[30%] flex-row px-3 items-end">
                        <BackButton size={30}/>
                    </View>
                    <View className="h-[70%] flex-row">
                    
                        <View className="h-full w-2/3 p-3 ">
                            <View className="flex-row items-center gap-x-2">
                                <TouchableOpacity onPress={() => setActiveModalNomeTreino(true)} className="flex-row items-center justify-center">
                                    <Text className="text-2xl font-bold text-white pr-2">{nome}</Text>
                                    <Pencil color="white" size={15}/>
                                </TouchableOpacity>
                            </View>
                            <View className="flex-row items-center gap-x-2">
                                <TouchableOpacity onPress={()=> setActiveModalIntercalo(true)} className="flex-row items-center">
                                    <Text className="text-[14px] text-zinc-300 font-semibold pr-2">Intervalo entre exercicios: {intervalo}</Text>
                                    <Pencil color="white" size={15}/>
                                </TouchableOpacity>
                            </View>
                                <Text className="text-[14px] text-zinc-300 font-semibold">N° de exercicios: {exercicios.length}</Text>
                            </View>
                        <View className="h-full w-1/3 justify-start items-end ">
                            <TouchableOpacity onPress={()=>navigate('NewExercicioTreino', {exercicios:[], action: "addExercicio", treino: route.params.data })} className="flex-row items-center w-32 h-10 bg-violet-700 justify-evenly  rounded-md">
                                <Plus size={20} color="white" weight="bold"/>
                                <Text className="text-white text-[18px] ">Exercício</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    
                </View>
                <View className="px-4">
                    <Text className="text-xl text-white font-semibold">Dias da semana</Text>
                    <WeekDays setWeekDays={setWeekDays} weekDays={weekDays} action="updateWeek" treinoId={route.params.data.id}/>
                </View>
                <Text className="text-xl text-white px-4">Exercicios</Text>
                <ScrollView className="h-2/5 w-full p-3 gap-y-2 ">
                {
                    exercicios.map((exercicio) => (
                        <View className="h-28 w-full "  key={exercicio.id}>
                            <CardExercicio data={exercicio}/>
                        </View>
                    ))
                }
                </ScrollView>
                <View className="items-center pb-4">
                {
                    route.params.action == "execTreino" ? 
                    <TouchableOpacity 
                        onPress={() => navigate('ExecTreino', {treino: route.params.data} )} className="flex-row justify-center items-center py-2 w-[60%] h-14 bg-green-600 rounded-xl">
                        <Text className="text-xl font-semibold pr-2 text-white">Começar treino</Text>
                        <Barbell color="white" size={25} weight="bold" />
                    </TouchableOpacity> 
                    :<TouchableOpacity
                     onPress={() => setActive(true)} className="flex-row justify-center items-center py-2">
                        <Text className="text-red-600 text-xl  font-bold">Excluir Treino</Text>
                        <Trash size={20}  weight="bold" color={colors.red[600]}/>
                    </TouchableOpacity> 
                }
                </View>
                
            </View>
            <MainModal active={active}  setActive={setActive} >
                <View className="w-full h-full pr-6">
                    <Text className="text-xl font-bold text-white">Deseja realmente excluir o treino criado ?</Text>
                    <View className="flex-row gap-x-2 absolute bottom-0">
                        <TouchableOpacity
                            onPress={handleDeleteTreino}
                        >
                            <Text className="text-red-500 font-semibold text-[18px]">SIM</Text>  
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={()=>setActive(false)}
                        >
                            <Text className="text-blue-500 font-semibold text-[18px]">NÃO</Text>  
                        </TouchableOpacity>
                    </View>
                </View>
            </MainModal>
            <ModalInputIntervalo 
                title="Defina o intervalo entre cada Exercicio" 
                active={activeModalIntercalo} 
                setActive={setActiveModalIntercalo}
                setIntervalo={setIntervalo}
                intervalo={intervalo}
                action={"updateIntervalo"}
                treinoId={route.params.data.id}
            />
            <MainModal active={activeModalNomeTreino} height={250} setActive={setActiveModalNomeTreino}>
                <View className="h-full w-full ">
                    <Text className="text-[20px] text-white font-bold">Defina o nome do treino:</Text>
                    <TextInput 
                        placeholderTextColor={colors.zinc[500]} 
                        value={inputNome} 
                        placeholder="Nome do treino"
                        className="text-white text-[20px] bg-zinc-800 rounded-md px-4 h-16 w-5/6 mt-8"
                        onChangeText={setInputNome}
                        />
                    <TouchableOpacity 
                        onPress={ async() => {
                            await api.patch(`treino/?id=${route.params.data.id}`, {nome: inputNome}).catch((response)=> {
                            })
                            setNome(inputNome)
                        }}
                        className="absolute bottom-0">
                        <Text className="text-green-500 font-bold text-[14px]" style={{display: inputNome != ""? "flex":"none" }}>SALVAR</Text>
                    </TouchableOpacity>
                </View>
            </MainModal>
        </View>
    )
}