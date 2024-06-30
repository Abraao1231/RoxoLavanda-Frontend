import { View, Text, StyleSheet, ScrollView } from "react-native"
import {styles} from "../styles/Register";
export function teste({route}){
    console.log(route);
    
    return (
        <ScrollView className="h-full">
        <View className="bg-red-500 w-50 h-full ">
            <Text>{route.name}</Text>
            <Text>{route.name}</Text>
            <Text>{route.name}</Text>
            <Text>{route.name}</Text>
            <Text>{route.name}</Text>
            <Text>{route.name}</Text>
            <Text>{route.name}</Text>
            <Text>asd</Text>
            <View className="bg-blue-400 h-full"></View>

        </View>
        </ScrollView>
    )
   
}