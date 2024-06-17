import { ReactNode } from "react";
import { View } from "react-native";
import { TextInput } from "react-native";

interface InputBoxprops {
    title: string
    icon: ReactNode

}

export function InputBox(props: InputBoxprops) {
    return (
        <View className=" h-20 w-6/7 p mt-5 bg-zinc-800 rounded-xl flex-row items-center">
            <View className="pl-8">
                {props.icon}
            </View>
            <View className="pl-5 ">
                <TextInput placeholder={props.title}
                    placeholderTextColor="#DCDCDC">
                </TextInput>
            </View>
        </View>
    )
}