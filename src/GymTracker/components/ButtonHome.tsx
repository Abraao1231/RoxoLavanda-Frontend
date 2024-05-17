import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";


interface PropsButtonHomeProps {
    title: string
    screen: string
}

export function ButtonHome(Props: PropsButtonHomeProps){
    const { navigate } = useNavigation();

    return (
        <TouchableOpacity 
            className="border-violet-700 border-2 h-14 w-[90%] rounded-xl bg-zinc-950 flex items-center justify-center"
            onPress={()=>{navigate(Props.screen)}}
        >
        
            <Text className="text-violet-700">{Props.title}</Text>
        </TouchableOpacity>
    )
}