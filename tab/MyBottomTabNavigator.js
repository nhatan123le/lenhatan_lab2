// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import DetailsScreen from "../src/DetailsScreen";
// import {Icon} from "react-native-paper"
// import HomeScreen from "../src/HomeScreen";

// const Tab= createBottomTabNavigator();
// const MyBottomTabNavigator=()=>{
//     return(
//         <Tab.Navigator>
//             <Tab.Screen name="home" component={HomeScreen}
//                 options={{
//                     tabBarIcon:({color}) => <Icon source={"home"} size={30} color={color}/>
//                 }}

//             />
//             <Tab.Screen name="detail" component={DetailsScreen}
//                 options={{
//                     tabBarIcon:({color}) => <Icon source={"star"} size={30} color={color}/>
//                 }}
//             />
//         </Tab.Navigator>
//     )
// }
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/HomeScreen';
import DetailsScreen from '../src/DetailsScreen';



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Detail" component={DetailsScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs();
