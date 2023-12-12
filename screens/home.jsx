import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export function Home() {
    return (
        <>
        <StatusBar style="dark" />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
            </View>
        </>
    );
}