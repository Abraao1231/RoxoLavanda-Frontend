import {NavigationContainer} from '@react-navigation/native';
import AppRoutes from './app.routes';
import { AppRoutesIndex } from './index.routes';
export function Routes(){
    return (
        <NavigationContainer >
            <AppRoutesIndex/>
        </NavigationContainer>
    )
}