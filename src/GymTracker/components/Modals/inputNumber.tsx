import { View, Text, Modal, StatusBar } from "react-native";
import changeNavigationBarColor from 'react-native-navigation-bar-color';

interface ModalProps {
    active : boolean
    title: string
}

export function ModalInputNumber({active, title}: ModalProps){

    return (
        <Modal
            visible={active}
            className="w-full h-full  justify-center items-center"
            transparent={true}
            animationType="slide"
        >
            <View className="bg-zinc-950 h-40 w-5/6 justify-center items-center  border-2 border-zinc-800 ">
            
                <Text className="text-white">OI</Text>
            </View>
            <StatusBar  barStyle="dark-content" />

        </Modal>
    )
}