import { View, TouchableOpacity, Text } from "react-native";
import colors from "tailwindcss/colors";
import { House, Barbell, ChartLineUp   } from 'phosphor-react-native';
import clsx from "clsx";



export function MyTabBar({ state, descriptors, navigation }) {
   
    
    

    return (
      <View 
        className=" bg-zinc-950 h-[70px] items-center justify-center"
        >
            <View 

                className="bg-zinc-900 flex-row h-5/6 w-11/12 rounded-full items-center justify-evenly "
                style={{
                    shadowOffset: { width: -10, height: -10 },
                    shadowColor: colors.white,
                    elevation: 2,
                    shadowRadius: 2
                  }}
                >
                {
                    state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;
            
                    const isFocused = state.index === index;
                    const iconsTabBar = {
                        'Treinos':  <Barbell  size={30} color= {isFocused ? colors.violet[700] : colors.white}/>,
                        'Main': <House size={30} color= {isFocused ? colors.violet[700] : colors.white}/>,
                        'Desempenho': <ChartLineUp size={30} color={isFocused ? colors.violet[700] : colors.white}/>
                    }
                    const onPress = () => {
                        const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        });
            
                        if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                        }
                };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TouchableOpacity
                key={route.name}
              accessibilityRole="button"
              className={clsx("flex justify-center items-center h-full w-24", {
                [""]:isFocused
              })}
            
            //   accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
            
            {(iconsTabBar[route.name])}

            <Text  style={{ color: isFocused ? colors.violet[700] : colors.white  }}>
                {label}
              </Text>

            </TouchableOpacity>
          );
        })}
        </View>
      </View>
    );
  }