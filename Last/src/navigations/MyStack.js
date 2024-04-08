// MyStack.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Posts from '../screens/Posts';
import Detail from '../screens/Detail'
import ContactsScreen from '../screens/ContactsScreen';
import CommentScreen from '../screens/Comment';
import NewsFeed from '../screens/NewsFeed';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Posts" component={Posts} />
        <Stack.Screen name="Contacts" component={ContactsScreen} />
        <Stack.Screen name="Comment" component={CommentScreen} />
        <Stack.Screen name="NewsFeed" component={NewsFeed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { MyStack };
