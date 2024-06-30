import { ImageBackground, View, TouchableOpacity, Text } from "react-native"
import { CircleButton } from "./CircleButton"
import { ArrowRight } from "phosphor-react-native"
import legPressBackground from '../assets/images/legPress-background.jpg';
import { useNavigation } from "@react-navigation/native";

export default function ItemSlider({item}){
    const  {navigate} = useNavigation()
    return (
        
        <ImageBackground
            source={legPressBackground}
            className="w-full  h-full rounded-md  flex flex-row"
            resizeMode="cover"
            borderRadius={15}
        > 
            <View className="absolute top-1/2 h-1/2 w-full flex flex-row justify-between items-end p-5">
                <View className="justify-center w-3/5">
                <Text className="text-white text-2xl font-bold">{item.nome}</Text>
                {/* <Text className="text-white text-md">Seu último treino de perna foi dia 14/04</Text> */}
                </View>
                <TouchableOpacity 
                    onPress={() => navigate('Treino', {data: item, action: "execTreino"})}
                    className="h-14 w-14 rounded-md items-end justify-end">
                <CircleButton
                    classNameIn="h-[80%] w-[80%] items-center justify-center rounded-full bg-violet-600"
                    classNameOut="h-full w-full items-center justify-center rounded-full bg-violet-700/80"
                    children={<ArrowRight color="white" size={25} />}
                />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}