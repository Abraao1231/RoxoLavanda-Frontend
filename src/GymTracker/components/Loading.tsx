import { ActivityIndicator, View } from "react-native";
export function Loading(){
    return (
        <View className="bg-red-500 h-full" style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#09090A'}}>
            <ActivityIndicator color="#7C3AED"/>
        </View>
    )
}