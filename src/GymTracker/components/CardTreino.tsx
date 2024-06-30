import { View, Text, TouchableOpacity } from "react-native"
import { Clock } from "phosphor-react-native"
import colors from "tailwindcss/colors"
import { useNavigation } from "@react-navigation/native"
interface CardTreinoProps {
    data: {
        id: string
        nome: string
        intervalo: string
        UserId: string
    }
} 

export default function CardTreino(props : CardTreinoProps){
    
    const {navigate} = useNavigation()
    return (
        <TouchableOpacity 
            className="w-full h-full bg-zinc-900 rounded-xl border-2 border-violet-700 p-4 justify-between"
            onPress={() => navigate('Treino', {data: props.data})}
            >
            
                <Text className="text-white text-2xl">{props.data.nome}</Text>
                <View className="w-full h-50 items-center flex-row">
                    <Clock color={colors.white}/>
                    <Text className="text-white ml-2">{props.data.intervalo}</Text>
                </View>
        </TouchableOpacity>
    )   
}