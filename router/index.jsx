import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome } from '../screens/welcome'
import { Home } from '../screens/home'
import Chat from '../screens/chat'
import Like from '../screens/like'
import Login from '../screens/login'
import Password from '../screens/password'
import Profile from '../screens/profile'
import Register from '../screens/register'
import Search from '../screens/search'
import UpdateProfile from '../screens/updateProfile'
import { Menu } from '../screens/menu'
import { Options } from '../components/header'
// import fontsLoaded from '../constants'
import LoadingScreen from '../components/loading'
import { Poppins_100Thin, Poppins_200ExtraLight, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold, Poppins_900Black } from "@expo-google-fonts/poppins"
import { useFonts } from 'expo-font'

const Stack = createNativeStackNavigator()

export default function Router() {

    const [fontsLoaded] = useFonts({
        Poppins_100Thin,
        Poppins_200ExtraLight,
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        Poppins_900Black,
    });

    if (!fontsLoaded) {
        <LoadingScreen />
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Welcome'>
                    <Stack.Screen name="Welcome" component={Welcome} options={Options} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Chat" component={Chat} />
                    <Stack.Screen name="Menu" component={Menu} />
                    <Stack.Screen name="Like" component={Like} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Password" component={Password} />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="Register" component={Register} options={() => Options({ headerShow: true })} />
                    <Stack.Screen name="Search" component={Search} />
                    <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}