import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";





export function BackButton() {
    const { navigate } = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => { }}
        >

        </TouchableOpacity>
    )
}