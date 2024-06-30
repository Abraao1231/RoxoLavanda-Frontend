import { StyleSheet, View, Text, TouchableOpacity, Alert, Modal} from "react-native";
import React, { useCallback, useState } from "react";
import CircularProgressBar from "../components/CircularProgressBar";
import StartButton from "../components/StartButton";
import Halter from "../components/Halter";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { api } from "../lib/axios";
import { BackButton } from "../components/BackButton";
import { Barbell } from "phosphor-react-native";

function Index({route}) {
  const [active, setActive] = useState(false)
  const [treinos, setTreinos] = useState([]);
  const [startTreino, setStartTreino] =  useState(true)
  const [exercicioAtualTreino, setExercicioAtualTreino] = useState(0);
  const [invervaloExercicioAtual, setIntervaloExercicioAtual] = useState(treinos.length ? treinos[0].intervalo: 0)
  const [numeroSeriesRestantes, setNumeroSeriesRestantes] = useState( treinos.length ? treinos[0].numeroSer: 0)
  const [activeModal, setActiveModal] = useState(false)  
  const [registroTreinaRealiza, setRegistroTreinoRealiza] = useState(null)
  const [activeIntervalo,setActiveIntervalo] = useState(false)
  
  const {navigate} = useNavigation()



  async function handleSetStartTreino(){
    await api.post('/registro/treino', {
        userId: route.params.treino.userId,
        treinoId: route.params.treino.id,
        tempo: 0
    }).then((response) => {      
      setRegistroTreinoRealiza(response.data.id)
      setStartTreino(prevState => !prevState)
    }).catch((error) => {
      Alert.alert(error.response.message)
    })
    
  }

  async function getData() {
    try {
    //   setToken( await AsyncStorage.getItem('token'))
      const response = await api.get(`/exercicio/treino?id=${route.params.treino.id}`);                 
      setTreinos(response.data);
      
  } catch (error) {
      console.error(error.response.data);
    }
  };

  useFocusEffect(useCallback(() => {
    getData();   
}, []))

     const formatTime = (seconds: number) => {
   const mins = Math.floor(seconds / 60);
   const secs = seconds % 60;
   return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
 };
   async function handleEndTimer(){
    
    if (numeroSeriesRestantes == treinos[exercicioAtualTreino].numeroSer - 1 && exercicioAtualTreino != treinos.length - 1 ){
      console.log(numeroSeriesRestantes, "troca treino");
      
   
      setExercicioAtualTreino(prevState=> prevState + 1 )
      setNumeroSeriesRestantes(0)      
      setIntervaloExercicioAtual(treinos[exercicioAtualTreino].intervalo)      
      setActive(false)
      await api.post('/registro/exercicio', {
        seriesRealizadas: treinos[exercicioAtualTreino].numeroSer,
        treinoPossuiExercicioId: route.params.treino.id,
        registroTreinaRealiza: registroTreinaRealiza.id 
      })
    }
    else {   
      console.log("aqui");
         
      setNumeroSeriesRestantes(prevState => prevState + 1 )      
      setActive(false)

    } if (exercicioAtualTreino == treinos.length - 1 && numeroSeriesRestantes == treinos[exercicioAtualTreino].numeroSer - 1){
      setActiveModal(true)

      await api.post('/registro/exercicio', {
        seriesRealizadas: treinos[exercicioAtualTreino].numeroSer,
        treinoPossuiExercicioId: route.params.treino.id,
        registroTreinaRealiza: registroTreinaRealiza.id 
      })
    }
  
  }
  
  return (
    <View className="h-full w-full bg-zinc-950">
      <View className="h-full w-full bg-zinc-950" style={{opacity: activeModal ? 0.1 : 1}}>
      <View className="h-[10%] px-4 py-6 ">
          <BackButton/>
      </View>

        
      <View className="h-[80%] ">
        {
          startTreino ? 
          <View className="w-full h-full items-center pt-[30%]">
            <Barbell color="white" size={150}/>
            <Text className="text-white text-4xl font-bold w-5/6 text-center ">{route.params.treino.nome}</Text>
            <View className="">
            <Text className="text-white text-[18px]  font-bold text-center">Primeiro exercicio: {treinos.length ? treinos[exercicioAtualTreino].exercicio.nome: 0}</Text>
              <Text className="text-white text-[18px]  font-bold text-center">Número de séries: {treinos.length ? treinos[exercicioAtualTreino].numeroSer : 0}</Text>

            </View>
            <View className="h-[10%] w-full items-center justify-end absolute bottom-0">
              {
                !activeIntervalo ?
                <StartButton 
                text={startTreino ? "COMEÇAR TREINO":  "INTERVALO"} 
                active={startTreino ? startTreino : active} 
                setActive={startTreino ? handleSetStartTreino: setActive}/>
              : <View></View>
              }
          
        </View>
          </View> 
          :  active 
          ?<View className="h-full">
        <CircularProgressBar 
            tempo={ treinos? treinos[exercicioAtualTreino].intervalo : 0} handleEndTimer={handleEndTimer}/>

          </View> 
          
          : <View className="h-full w-full items-center pb-8 ">
              <Halter 
              nome={ treinos.length ? treinos[exercicioAtualTreino].exercicio.nome: 0}      
              numeroRep={ treinos.length ? treinos[exercicioAtualTreino].numeroRep: 0}
              seriesRestantes={treinos[exercicioAtualTreino].numeroSer - numeroSeriesRestantes}
              intervalo={treinos.length ? treinos[exercicioAtualTreino].intervalo : 0}
            /> 
            {
              !activeIntervalo ?
              <StartButton 
              text={startTreino ? "COMEÇAR TREINO":  "INTERVALO"} 
              active={startTreino ? startTreino : active} 
              setActive={startTreino ? handleSetStartTreino: setActive}/>
            : <View></View>
            }
 
          </View>
            
        }
        
      </View>
      
      </View>
      <Modal 
        className="w-full h-full justify-center items-center"
        visible={activeModal}
        transparent={true}
      >
        <View className="w-5/6 h-72 m-auto bg-zinc-800 rounded-xl border-[1.2px] px-4 pt-8 pb-6 justify-between items-center border-zinc-600">
          <Text className="text-white text-3xl text-center font-bold">Parabéns, você completou seu treino !!</Text>
          <TouchableOpacity 
            onPress={() => navigate('Main')}
            className="p-4 px-6 bg-violet-700 rounded-md">
            <Text className="text-white text-xl font-semibold">Voltar a tela principal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View> 
  );
}

export default Index;
