import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Registe';
import { Treino } from '../screens/Treino';
import Perfil from '../screens/Perfil';
import DefinicoesGerais from '../screens/DefinicoesGerais';

export default function AppRoutes(){
    const { Navigator, Screen } = createNativeStackNavigator()
    return (
        <Navigator screenOptions={{headerShown: false}} initialRouteName='DefinicoesGerais' >
            <Screen 
                name='Home' 
                component={Home}  
                options={{
                    animation: 'fade',
                }}
            />
            <Screen 
                name='Login' 
                component={Login}  
                options={{
                    animation: 'fade',
                }}
            />
            <Screen 
                name='Register' 
                component={Register} 
                options={{
                    animation: 'fade',
                }}
            />
            <Screen
                name='Treino'
                component={Treino}
                options={{
                    animation:'fade',
                }}
            />
            <Screen
                name='Perfil'
                component={Perfil}
                options={{
                    animation:'fade',
                }}    
            />
            <Screen
                name='Definicoes-gerais'
                component={DefinicoesGerais}
                options={{
                    animation:'fade',
                }}    
            />

        </Navigator>
    )
}