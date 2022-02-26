import React, { useEffect, useState } from 'react';
import { View, Image, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { configureStore } from './store/store';
import { MenuProvider } from 'react-native-popup-menu';

import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

import Noodls from './screens/Noodls';
import Details from './screens/Details';

const store = configureStore();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <MenuProvider>
        <NavigationContainer >
          <StatusBar translucent backgroundColor="transparent" />
          <Stack.Navigator>
            <Stack.Screen
              name="Noodls"
              component={Noodls}
            />
            <Stack.Screen name="Details"
              component={Details}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </MenuProvider>
    </Provider>
  );
}

export default App;


