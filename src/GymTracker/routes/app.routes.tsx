import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Registe';
import { Treino } from '../screens/Treino';
import Perfil from '../screens/Perfil';
import Idioma from '../screens/Idioma';

export default function AppRoutes(){
    const { Navigator, Screen } = createNativeStackNavigator()
    return (
        <Navigator screenOptions={{headerShown: false}} initialRouteName='Idioma' >
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
                name='Idioma'
                component={Idioma}
                options={{
                    animation:'fade',
                }}    
            />

        </Navigator>
    )
}