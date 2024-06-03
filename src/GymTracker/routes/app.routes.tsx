
import Main from '../screens/Main';
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
            initialRouteName='Main'
        >
              <Screen
                name='Treinos'
                component={Main}
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
        </Navigator>
    )
}

