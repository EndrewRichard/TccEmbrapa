import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import { SafeAreaView, StyleSheet } from 'react-native';

import LoadingScreen from './components/LoadingScreen'; 

import ListScreen from './screens/ListScreen';
import DetailsScreen from './screens/DetailsScreen';
import TutorialScreen from './screens/TutorialScreen';
import AboutScreen from './screens/SobreScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CatalogoStack = ({ filters, updateFilters }) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Principal">
      {(props) => <ListScreen {...props} filters={filters} />}
    </Stack.Screen>
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    // Simule o carregamento da aplicação por 2 segundos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Limpa o timer quando o componente é desmontado
    return () => clearTimeout(timer);
  }, []);

  const handleApplyFilters = (selectedFilters) => {
    setFilters(selectedFilters);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (


    <SafeAreaView style={styles.container}>
      <NavigationContainer>
          <Tab.Navigator
          initialRouteName="Catalogo"
          screenOptions={{
            tabBarActiveTintColor: '#006122',
            tabBarStyle: [
              {
                display: 'flex',
              },
              null,
        ],
      }}
    >


          <Tab.Screen
            name="Catalogo"
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="book" color={color} size={size} />
              ),
              headerShown: false,
            }}
          >
            {(props) => (
              <CatalogoStack
                {...props}
                filters={filters}
              />
            )}
          </Tab.Screen>
          
          <Tab.Screen
            name="Tutorial"
            component={TutorialScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="bookmarks" color={color} size={size} />
              ),
              headerShown: false,
            }}
          />
    
          <Tab.Screen
            name="Sobre"
            component={AboutScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="information-circle" color={color} size={size} />
              ),
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
});

export default App;
