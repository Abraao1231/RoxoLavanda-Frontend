import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Registe';
import { Treino } from '../screens/Treino';
import Perfil from '../screens/Perfil';
import Idioma from '../screens/Idioma';

import Main from '../screens/Main';
import { Treinos } from '../screens/Treinos';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from 'tailwindcss/colors';
import { MyTabBar } from '../components/TabBarNavigator';
import { Barbell, House, ChartLineUp } from 'phosphor-react-native';
export default function AppRoutes(){
    const {Navigator, Screen} = createBottomTabNavigator()
    return (
        <Navigator 
            tabBar={props => <MyTabBar {...props} />}
            screenOptions={{
                headerShown: false,
            }} 
            initialRouteName='Home'
        >
              <Screen
                name='Treinos'
                component={Treinos}
                options={{
                    tabBarIcon: () => <Barbell  size={30} color={colors.white}/>,
                    tabBarLabel:"Treinos",
                }}
                
            />
             <Screen
                name='Main'
                component={Main}
                options={{
                    tabBarIcon: () => <House size={30} color={colors.white}/>,
                    tabBarLabel:"Início",
                    
                }}
            />
            <Screen
                name='Desempenho'
                component={Main}
                options={{
                    tabBarIcon: () => <ChartLineUp size={30} color={colors.white}/>,
                    tabBarLabel:"Desempenho",
                    
                }}
            />
<<<<<<< HEAD
            <Screen
                name='Perfil'
                component={Perfil}
                options={{
                    animation:'fade',
                }}    
            />
            <Screen
                name='Idioma'
                component={Idioma}
                options={{
                    animation:'fade',
                }}    
            />

=======
>>>>>>> main
        </Navigator>
    )
}

