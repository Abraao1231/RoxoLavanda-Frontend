import colors from "tailwindcss/colors";
import { VictoryPie, VictoryChart, VictoryTheme } from "victory-native";
import { VictoryLabel } from "victory-native";
import { Svg } from "react-native-svg";
import { View, Text, StyleSheet } from "react-native";

export default function PieChart(){
    return (
         <View className="items-center justify-center">                           
            <VictoryPie
                width={150}
                height={100}
                innerRadius={30}
                padding={5}
                padAngle={2}
                colorScale={[colors.black, colors.violet[600]]}
                labelRadius={50}
                labels={[]}
                cornerRadius={50}
                data={[
                    { label: "", y: 25 },
                    { label: "", y: 75 },
                ]}
                
            />
            <Text className="text-zinc-600 absolute">75%</Text>
        </View>
    )
}