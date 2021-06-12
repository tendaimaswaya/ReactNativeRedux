 import React from 'react';

 import NewsScreen from './src/screens/NewsScreen'
 import ProfileScreen from './src/screens/ProfileScreen'
 import { NavigationContainer } from '@react-navigation/native';
 import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
 
 const Tab = createMaterialBottomTabNavigator();
 const TabContainer = () => {
   return(
     <Tab.Navigator>
       <Tab.Screen name="News" component={NewsScreen} />
       <Tab.Screen name="Profile" component={ProfileScreen} />
     </Tab.Navigator>
   )
 }
 
 export default class AppView extends React.Component{
   render(){
     return(
        <NavigationContainer>
        <TabContainer/>
       </NavigationContainer>
     )
   }
 }
 
 