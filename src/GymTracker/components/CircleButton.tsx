import { TouchableOpacity, View } from "react-native"
import { ArrowRight } from "phosphor-react-native"
import { ChildContextProvider, Component, ComponentType, ReactNode } from "react"
import colors from "tailwindcss/colors"


interface CircleButtonProps {
    children: ReactNode
    classNameOut: string
    classNameIn: string
    onPress?: Function
}
export function CircleButton(circleProps: CircleButtonProps){
    
    return (
        <View 
            className={circleProps.classNameOut}
            >
            <View
                className={circleProps.classNameIn}
            >
                {circleProps.children}
            </View>
        </View>
    )
}
