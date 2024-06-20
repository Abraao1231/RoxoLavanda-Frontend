import { TouchableOpacity } from "react-native";
import { Check } from "phosphor-react-native";

interface CheckBoxProps {
    onPress: Function
    check: boolean

}

export function CheckBox({ onPress, check }: CheckBoxProps) {

    return (
        <TouchableOpacity
            className="h-6 w-6 border-2 border-violet-600 rounded-md"
            onPress={() => { onPress() }}
        >
            {
                check ? <Check size={20} color="white" /> : <></>
            }
        </TouchableOpacity>
    )
}