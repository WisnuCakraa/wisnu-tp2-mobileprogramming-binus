import React, { useState } from 'react';
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import FormDataDiriScreen from './src/screens/FormScreen/index';
import GoogleMapsScreen from './src/screens/MapScreen/index';
import { HomeIcon, FormIcon, MapIcon } from './src/icon/index';

const Tab = createBottomTabNavigator();

const App = () => {
  const [namaPengguna, setNamaPengguna] = useState('');

  const handleSubmitNama = (nama) => {
    setNamaPengguna(nama);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarLabel: route.name,
          tabBarStyle: {
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
          headerRight: () => (
            <Text style={{ marginRight: 10, fontSize: 20 }}>{namaPengguna}</Text>
          ),
          tabBarIcon: ({ color, size }) => {
            let iconComponent;
            switch (route.name) {
              case 'Home':
                iconComponent = <HomeIcon width={size} height={size} color={color} />;
                break;
              case 'Form Data Diri':
                iconComponent = <FormIcon width={size} height={size} color={color} />;
                break;
              case 'Google Maps':
                iconComponent = <MapIcon width={size} height={size} color={color} />;
                break;
              default:
                iconComponent = null;
            }
            return iconComponent;
          },
        })}
      >
        <Tab.Screen name="Home">
          {() => <HomeScreen namaPengguna={namaPengguna} />}
        </Tab.Screen>
        <Tab.Screen name="Form Data Diri">
          {() => <FormDataDiriScreen onSubmitNama={handleSubmitNama} />}
        </Tab.Screen>
        <Tab.Screen name="Google Maps">
          {() => <GoogleMapsScreen namaPengguna={namaPengguna} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
