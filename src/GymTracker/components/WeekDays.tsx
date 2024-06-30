import { View, Text, TouchableOpacity } from "react-native";
import clsx from "clsx";
import { api } from "../lib/axios";

interface weekDaysProp {
    weekDays :number[]
    setWeekDays: Function
    treinoId? :string
    action?: string
} 

const avaliableWeekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

export default  function WeekDays({setWeekDays, weekDays, action, treinoId}: weekDaysProp){
    function handleToggleWeekDay(weekDayIndex: number){

        
        weekDays.includes(weekDayIndex) 
        ? setWeekDays(weekDays.filter(weekDay => weekDay !== weekDayIndex))
        : setWeekDays([...weekDays, weekDayIndex])
        
    }
    return (
        <View className="flex-row justify-between py-2">
            {avaliableWeekDays.map((item, index) => (
                <TouchableOpacity
                    onPress={() => handleToggleWeekDay(index)}
                    key={index}                       
                    className={clsx("h-12 w-12  rounded-md border-[2px] items-center justify-center", {
                        ["bg-zinc-800  border-zinc-600"]: !weekDays.includes(index),
                        ["bg-violet-950  border-violet-500"]: weekDays.includes(index),
                    })} >
                    <Text className="text-white text-[16px] font-semibold">{item}</Text>
                </TouchableOpacity>
            ))}
</View>
    )
}