import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './src/screens/HomeScreen';
import {CardScreen} from './src/screens/CardScreen';
import {ButtonScreen} from './src/screens/ButtonScreen';
import {VoucherScreen} from './src/screens/VoucherScreen';
import {ModalScreen} from './src/screens/ModalScreen';
import {IconScreen} from './src/screens/IconScreen';
import {ProfileScreen} from './src/screens/ProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#FFFFFF',
          headerTransparent: true,
          headerTitleStyle: {
            color: '#FFFFFF',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CardScreen"
          component={CardScreen}
          options={{title: '', headerTransparent: true}}
        />
        <Stack.Screen
          name="ButtonScreen"
          component={ButtonScreen}
          options={{title: '', headerTransparent: true}}
        />
        <Stack.Screen
          name="VoucherScreen"
          component={VoucherScreen}
          options={{title: '', headerTransparent: true}}
        />
        <Stack.Screen
          name="ModalScreen"
          component={ModalScreen}
          options={{title: '', headerTransparent: true}}
        />
        <Stack.Screen
          name="IconScreen"
          component={IconScreen}
          options={{title: '', headerTransparent: true}}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{title: '', headerTransparent: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
