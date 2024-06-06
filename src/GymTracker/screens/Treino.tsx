import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { Plus } from "phosphor-react-native";
import colors from "tailwindcss/colors";
import CardTreino from "../components/CardTreino";
export function Treino(){
    const data = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
        { id: 6, name: 'Item 6' },
        { id: 7, name: 'Item 6' },
        { id: 8, name: 'Item 6' },
        { id: 9, name: 'Item 6' },
      ];
    
      return (
        <View className="h-full w-full bg-zinc-950 p-4">

            <Text className="text-4xl font-semibold text-white my-6">Treinos</Text>
            <ScrollView>
                <View className="flex flex-wrap flex-row justify-between">
                    {data.map(item => (
                    <View key={item.id}
                    className="w-1/2 p-3 h-48 rounded-xl"><CardTreino/></View>
                    ))}
                </View>
            </ScrollView>
            <TouchableOpacity 
                className="h-14 w-40 flex flex-row bg-violet-700 absolute bottom-6 right-6 rounded-md justify-between items-center p-2"
            >
                <Plus color={colors.white} size={30}></Plus>
                <Text className="text-xl text-white">Novo Treino</Text>
            </TouchableOpacity>
        </View>
      );
    
    
}