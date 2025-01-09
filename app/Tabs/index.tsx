import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Tabs } from 'expo-router';
import Explorar from "../Explorar";
import Config from "./Pages";

const tab = createBottomTabNavigator();


function Routes() {
    return(
        <tab.Navigator>
            <tab.Screen
            name="Explorar"
            component={Explorar}
            />

            <tab.Screen
            name="Config"
            component={Config}
            />
        </tab.Navigator>
    )
}

export default Routes;