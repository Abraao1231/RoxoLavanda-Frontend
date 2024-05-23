import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";


export function BackButton() {
    const { navigate } = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => { }}
        >
            <ArrowLeft color="white" size={30}></ArrowLeft>

        </TouchableOpacity>
    )
}