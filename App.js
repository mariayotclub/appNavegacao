import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, Touchable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {FontAwesome6} from '@react-native-vector-icons/fontawesome6';

import Home from   './screens/Home';
import Config from './screens/Config';
import Sobre from  './screens/Sobre';
import Perfil from  './screens/Perfil';
import LojaFisica from  './screens/LojaFisica';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor : '#61a5ffff',        // Cor texto tab ativa
          tabBarActiveBackgroundColor : '#ffffffff',  // Cor fundo tab ativa
          tabBarInactiveTintColor: '#ffffffff',       // Cor texto tab Inativa
          tabBarInactiveBackgroundColor: '#61a5ffff', // Cor fundo tab Inativa
          headerStyle: { backgroundColor: '#61a5ffff' }, // Cor fundo cabecalho
          headerTintColor: '#ffffffff',               // Cor texto do cabecalho
          tabBarStyle: { backgroundColor: '#61a5ffff' }, 
          tabBarShowLabel: true ,                       // Remove o texto    
        }}
      >

        <Tab.Screen 
          name='Página Inicial' 
          component={Home}
          options={{
            tabBarIcon: ({focused}) => 
              <FontAwesome6 
                name='house' 
                size={20} 
                iconStyle='solid' 
                color={focused ? '#61a5ffff' : '#ffffffff'}
              />
          }}
        />
        
        <Tab.Screen 
          name='Configurações'  
          component={Config}
          options={{
            tabBarIcon: ({focused}) => 
              <FontAwesome6 
                name='sliders' 
                size={20} 
                iconStyle='solid' 
                color={focused ? '#61a5ffff' : '#ffffffff'}
              />
          }}
        />
        <Tab.Screen 
          name='Sobre'          
          component={Sobre}
          options={{
            tabBarIcon: ({focused}) => 
              <FontAwesome6 
                name='circle-info' 
                size={20} 
                iconStyle='solid' 
                color={focused ? '#61a5ffff' : '#ffffffff'}
              />
          }}
        />
        <Tab.Screen 
          name='Perfil'  
          component={Perfil}
          options={{
            tabBarIcon: ({focused}) => 
              <FontAwesome6 
                name='user' 
                size={20} 
                iconStyle='solid' 
                color={focused ? '#61a5ffff' : '#ffffffff'}
              />
          }}
        />

        <Tab.Screen 
          name='Loja Física'          
          component={LojaFisica}
          options={{
            tabBarIcon: ({focused}) => 
              <FontAwesome6 
                name='store' 
                size={20} 
                iconStyle='solid' 
                color={focused ? '#61a5ffff' : '#ffffffff'}
              />
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
    

  );
}