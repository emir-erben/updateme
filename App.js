import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import BoxedComponent from './components/Userbox.js'; // Adjust the path accordingly
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './pages/LoginScreen.js';
import HomeScreen from './pages/HomeScreen.js';
import 'react-native-url-polyfill/auto'; // Import the url-polyfill package
import { useState, useEffect } from 'react'; // Import useState and useEffect
import { supabase } from './lib/supabase'; // Adjust the path accordingly
// import Account from './components/Account';
import Auth from './components/Auth.js';
import { Session } from '@supabase/supabase-js';

const Stack = createNativeStackNavigator(); // Create the stack navigator

export default function App() {
  const [session, setSession] = useState(null); // Initialize session state as null

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {session ? (
          // User is signed in
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          // User is not signed in
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

