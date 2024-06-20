import { View, Text, TouchableOpacity } from "react-native"
import { Info } from "phosphor-react-native"
import colors from "tailwindcss/colors"
import { useNavigation } from "@react-navigation/native"

interface DataPropsCardTreino {
    data: {
        id: string
        numeroRep: number
        numeroSer: number
        intervalor: number
        treinoId: string
        exercicioId: string
        exercicio: {
            id: string
            nome: string
        }
    }
}

export default function CardExercicio(props : DataPropsCardTreino){
    
    const {navigate} = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigate('Exercicio', {data: props.data})}
        >
            <View className="h-full w-full bg-zinc-800 rounded-xl  flex-row border-2 border-zinc-700">
                <View className="h-full w-2/6  items-center justify-center rounded-xl bg-zinc-700">
                    <Text className="text-2xl text-white">GIF</Text>
                </View>
                <View className="h-full w-4/6 flex-row  items-center pl-4">
                    <View className="h-full w-3/4 justify-center ">
                        <Text className="text-xl font-bold text-white">{props.data.exercicio.nome}</Text>
                        <Text className="font-semibold text-white">Repetições: {`${props.data.numeroSer}X${props.data.numeroRep}`}</Text>
                        <Text className="font-semibold text-white">Descanso: {props.data.intervalo}s</Text>
                    </View>
                    <View ></View>
                    <Info size={30} color={colors.white}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}