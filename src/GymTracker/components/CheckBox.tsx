import { TouchableOpacity } from "react-native";
import { Check } from "phosphor-react-native";
import colors from "tailwindcss/colors";

interface CheckBoxProps {
    onPress: Function
    check: boolean

}

export function CheckBox({ onPress, check }: CheckBoxProps) {

    return (
        <TouchableOpacity
            className="h-6 w-6 border-2 items-center justify-center border-violet-600 rounded-md"
            onPress={() => { onPress() }}
            style={{backgroundColor: check ?colors.violet[600] : colors.zinc[900]}}
        >
            {
                check ? <Check size={15} color="white" weight="bold"/> : <></>
            }
        </TouchableOpacity>
    )
}