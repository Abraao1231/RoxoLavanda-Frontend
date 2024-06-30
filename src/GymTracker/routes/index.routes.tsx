import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Registe';
import AppRoutes from "./app.routes";
import Perfil from "../screens/Perfil";
import EditarPerfil from "../screens/EditarPerfil";
import Treino from "../screens/Treino";
import Exercicio from "../screens/Exercicio";
import NewTreino from "../screens/NewTreino";
import NewExercicio from "../screens/NewExercicio";
import Idiomas from "../screens/Idioma";
import { CompletePerfil } from "../screens/CompletePerfil";
import ExecTreino from "../screens/ExecTreino";
import { NivelFisico } from "../screens/NivelFisico";
import { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export function AppRoutesIndex(){
    


    const { Navigator, Screen } = createNativeStackNavigator()
    return (
        <Navigator 
            screenOptions={{headerShown: false}} 
            initialRouteName="Home"
        >
            
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
                name='NivelFisico'
                component={NivelFisico}
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
                name='CompletePerfil'
                component={CompletePerfil}
                options={{
                    animation:'ios',
                }}
            />
            
             <Screen
                name='Idioma'
                component={Idiomas}
                options={{
                    animation:'ios',
                }}
            />
            <Screen
                name='ExecTreino'
                component={ExecTreino}
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
                name='NewTreino'
                component={NewTreino}
                options={{
                    animation:'ios',
                }}
            />
            <Screen
                name='NewExercicioTreino'
                component={NewExercicio}
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