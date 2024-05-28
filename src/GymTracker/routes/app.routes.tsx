import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Registe';
import { Treino } from '../screens/Treino';
import Main from '../screens/Main';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { X } from 'phosphor-react-native';

export default function AppRoutes(){
    const { Navigator, Screen } = createNativeStackNavigator()
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName='Main' >
     
            <Screen
                name='Main'
                component={Main}
                options={{
                    animation:'fade',
                }}
            />
        </Tab.Navigator>
    )
}