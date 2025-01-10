import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';


import Explorar from "../Explorar";
import Config from "./Pages";
import AntDesign from "@expo/vector-icons/AntDesign";

const tab = createBottomTabNavigator();


function Routes() {
    return(
        <tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    
                }
            }}
        >
            

            <tab.Screen
            name="Explorar"
            component={Explorar}
            options={{
                headerShown: false,
                tabBarIcon:({ color, size, focused }) => {
                 if (focused){
                    return <AntDesign name="search1" size={size} color={color} />
                }
                return <Ionicons name="search-outline" size={size} color={color} />
            }
            }}
            />

            <tab.Screen
            name="Config"
            component={Config}
            options={{
                headerShown: false,
                tabBarIcon:({ color, size, focused }) => {
                 if (focused){
                    return <Ionicons name="settings-sharp" size={size} color={color} />
                }
                return <Ionicons name="settings-outline" size={size} color={color} />
            }
            }}
            
            />
        </tab.Navigator>
    )
}

export default Routes;