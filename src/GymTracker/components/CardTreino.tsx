import { View, Text } from "react-native"
import { Clock } from "phosphor-react-native"
import colors from "tailwindcss/colors"
interface CardTreinoProps {
    nome: string,
    intervalo: string,

} 

export default function CardTreino(){
    return (
        <View className="w-full h-full bg-zinc-900 rounded-xl border-2 border-violet-700 p-4 justify-between">
            <Text className="text-white text-2xl">Treino</Text>
            <View className="w-full h-50 items-center flex-row">
                <Clock color={colors.white}/>
                <Text className="text-white ml-2">15:45</Text>
            </View>
        </View>
    )   
}