import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "./screens/HomeScreen"
import TodoScreen from "./screens/TodoScreen"
import { Ionicons } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"
import UserScreen from "./screens/UserScreen"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Amplify } from "aws-amplify"
import config from "./src/aws-exports"
import { useCallback, useState } from "react"
import TopScreen from "./screens/TopScreen"
import "./styles/global.css"

Amplify.configure(config)

export default function App() {
  const Tab = createBottomTabNavigator()

  const [signined, setSignined] = useState(false)

  return (
    <View style={{ flex: 1 }}>
      {signined ? (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name='Todo'
              component={TodoScreen}
              options={{
                tabBarIcon: ({ color, size, focused }) =>
                  focused ? (
                    <Ionicons
                      name='checkmark-circle'
                      size={size}
                      color={color}
                    />
                  ) : (
                    <Entypo name='circle' size={size} color={color} />
                  ),
              }}
            />
            <Tab.Screen
              name='Home'
              component={HomeScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name='home-sharp' size={size} color={color} />
                ),
                // header: () => null,
              }}
            />
            <Tab.Screen
              name='User'
              component={UserScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name='account'
                    size={size}
                    color={color}
                  />
                ),
                // header: () => null,
              }}
            />
          </Tab.Navigator>

          <StatusBar style='auto' />
        </NavigationContainer>
      ) : (
        <TopScreen />
      )}
    </View>
  )
}
