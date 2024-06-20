import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";
import colors from "tailwindcss/colors";

interface propsButton {
    size?: number
    color?:string
}

export function BackButton(prop: propsButton) {
    const { goBack } = useNavigation();
    return (
        <TouchableOpacity
            onPress={goBack}
        >
            <ArrowLeft color={prop.color?prop.color:"white"} size={prop.size?prop.size:30}/>

        </TouchableOpacity>
    )
}