import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { bgs, colors, poppins, uis } from "../constants";

export function Welcome() {
    const navigation = useNavigation()
    const toLoginPage = ()=> {
        navigation.navigate("Login")
    }
    const toRegisterPage = ()=> {
        navigation.navigate("Register")
    }

    return (
        <>
            <StatusBar style="dark" />
            <ImageBackground source={require("../assets/background.jpg")} resizeMode="cover" style={styles.background}>
                <LinearGradient colors={['transparent', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.9)']} style={styles.background}>
                    <View style={styles.container}>
                        <View style={styles.texts}>
                            <Text style={styles.biggerText}>
                                <Text style={styles.textRed}>Dating, </Text>
                                <Text>better than ever before</Text>
                            </Text>
                            <Text style={styles.lowerText}>
                                We know, finding love can be very hard. We think it shouldn't be.
                            </Text>
                        </View>
                        <View style={styles.buttons}>
                            <TouchableOpacity style={styles.button} onPress={toRegisterPage}>
                                <LinearGradient style={styles.btnGradient} colors={bgs.BtnBgWhite} start={[1, 0]} end={[0, 1]}>
                                    <Text style={{ ...styles.buttonText, color: "#000" }}>Let's get started</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={toLoginPage}>
                                <LinearGradient style={styles.btnGradient} colors={bgs.BtnBgPrimary} start={[1, 0]} end={[0, 1]}>
                                    <Text style={styles.buttonText}>Login</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
    },
    container: {
        flex: 1,
        alignContent: "flex-end",
        justifyContent: "flex-end",
        paddingHorizontal: uis.xPadding
    },
    texts: {
        marginBottom: 40
    },
    biggerText: {
        color: colors.white,
        fontSize: 35,
        fontFamily: poppins.p700,
        maxWidth: "70%",
        marginBottom: 10,
        lineHeight: 40
    },
    textRed: {
        color: colors.primary,
    },
    lowerText: {
        color: colors.white,
        opacity: .5,
        fontFamily: poppins.p200,
        maxWidth: "80%"
    },
    buttons: {
        marginBottom: 20,
        gap: 20
    },
    button: {

    },
    buttonText: {
        color: colors.white,
        fontFamily: poppins.p600,
        fontSize: uis.btnFont,
        textAlign: "center",
    },
    btnGradient: {
        borderRadius: uis.btnRadius,
        overflow: "hidden",
        paddingVertical: 8,
        position: "relative",
    }
})