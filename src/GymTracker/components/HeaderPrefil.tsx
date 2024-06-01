
import { View, Text, Image} from "react-native";
import UserPic from '../assets/images/user-pic.png'
import { UserCircle, Pencil, Gear } from "phosphor-react-native";
import colors from "tailwindcss/colors";
export default function HeaderPerfil(){
    return (
        <View className="w-full h-[12%] px-2 flex flex-row justify-between items-center">
            <View className="w-3/4 h-full flex flex-row items-center gap-4">
                <Image source={UserPic}/>
                {/* <UserCircle size={100} color={colors.zinc[600]}/> */}
                <View>
                    <Text className="text-xl font-semibold text-white">Abraão Alves</Text>
                    <View className="flex flex-row items-center gap-1">
                        <Text className="text-md text-white">Editar perfil</Text>
                        <Pencil size={15} color={colors.violet[700]} />
                    </View>
                </View>
            </View>
            <View className="w-1/4 h-full flex items-end justify-center">
                <Gear size={30} color={colors.white}/>
            </View>
    </View>
    )
}