import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Registe';
import { Treino } from '../screens/Treino';

export default function AppRoutes(){
    const { Navigator, Screen } = createNativeStackNavigator()
    return (
        <Navigator screenOptions={{headerShown: false}} initialRouteName='Login' >
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
            >

            </Screen>

        </Navigator>
    )
}