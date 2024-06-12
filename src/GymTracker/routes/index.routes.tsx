import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Registe';
import { Treinos } from "../screens/Treinos";
import AppRoutes from "./app.routes";
import Perfil from "../screens/Perfil";
import EditarPerfil from "../screens/EditarPerfil";
import Treino from "../screens/Treino";
import Exercicio from "../screens/Exercicio";

export function AppRoutesIndex(){
    const { Navigator, Screen } = createNativeStackNavigator()
    return (
        <Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
            <Screen 
                name='Home' 
                component={Home}  
                options={{
                }}
            />
            <Screen 
                name='Login' 
                component={Login}  
                options={{
                    animation: 'ios',
                }}
            />
            <Screen 
                name='Register' 
                component={Register} 
                options={{
                    animation: 'ios',
                }}
            />
            <Screen
                name='Treino'
                component={Treino}
                options={{
                    animation:'ios',
                }}
            />
            <Screen
                name='Perfil'
                component={Perfil}
                options={{
                    animation:'ios',
                }}
            />
            <Screen
                name='EditarPerfil'
                component={EditarPerfil}
                options={{
                    animation:'ios',
                }}
            />
             <Screen
                name='Exercicio'
                component={Exercicio}
                options={{
                    animation:'ios',
                }}
            />
            <Screen
                name='TabBar'
                component={AppRoutes}
                options={{
                    animation:'ios',
                }}
            />
        </Navigator>
    )
}