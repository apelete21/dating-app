import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { colors, poppins, uis } from "../constants";
import { ButtonPrimary, ButtonSecondary } from "../components/buttons";
import { ScreenBg } from "../components/screenbg";

export function Welcome() {
    const navigation = useNavigation()
    const toLoginPage = () => {
        navigation.navigate("Login")
    }
    const toRegisterPage = () => {
        navigation.navigate("Register")
    }

    return (
        <>
            <StatusBar style="dark" />
            <ScreenBg source={require("../assets/background.jpg")} >
                <View style={styles.container}>
                    <View style={styles.texts}>
                        <Text style={styles.titleText}>
                            <Text style={styles.textRed}>Dating, </Text>
                            <Text>better than ever before</Text>
                        </Text>
                        <Text style={styles.lowerText}>
                            We know, finding love can be very hard. We think it shouldn't be.
                        </Text>
                    </View>
                    <View style={styles.buttons}>
                        <ButtonSecondary value="Let's get started" onPress={toRegisterPage} />
                        <ButtonPrimary value="Login" onPress={toLoginPage} />
                    </View>
                </View>
            </ScreenBg>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "flex-end",
        justifyContent: "flex-end",
        paddingHorizontal: uis.xPadding
    },
    texts: {
        marginBottom: 40
    },
    titleText: {
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