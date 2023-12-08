import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { colors, poppins, uis } from '../constants'
import { ButtonPrimary, ButtonSecondary } from '../components/buttons'
import { ScreenBg } from '../components/screenbg'
import { PhoneNumberInput } from '../components/inputs'
import { Icons } from '../components/icons'
import { useNavigation } from '@react-navigation/native'

export default function Register() {
    const navigation = useNavigation()
    function toLoginPage(){
        navigation.navigate("Login")
    }
    function toGetCodePage(){
        navigation.navigate("Code")
    }
    return (
        <>
            <StatusBar style="dark" />
            <ScreenBg source={require("../assets/register.jpg")}>
                <View style={styles.container}>
                    <View style={styles.texts}>
                        <Text style={styles.biggerText}>
                            <Text>Let's create </Text>
                            <Text style={styles.textRed}>your account</Text>
                        </Text>
                        <Text style={styles.lowerText}>
                            Get your account and have access to all our services.
                        </Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <PhoneNumberInput />
                        <View style={styles.buttons}>
                            <ButtonPrimary value="Get code" onPress={toGetCodePage} />
                        </View>
                        <View style={styles.otherOptions}>
                            <TouchableOpacity>
                                <Icons name={"google"} size={25} style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icons name={"facebook"} size={25} style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icons name={"instagram"} size={25} style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.optionLine}>
                        <View style={styles.line} />
                        <Text style={styles.orText}>Or</Text>
                        <View style={styles.line} />
                    </View>
                    <View style={styles.buttons}>
                        <ButtonSecondary value="Log In" onPress={toLoginPage} />
                    </View>
                </View>
            </ScreenBg>
        </>
    )
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
    biggerText: {
        color: colors.white,
        fontSize: 35,
        fontFamily: poppins.p700,
        maxWidth: "90%",
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
        marginBottom: 10,
    },
    otherOptions: {
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "space-evenly",
    },
    icon: {
        color: colors.white,
    },
    optionLine: {
        justifyContent: 'space-evenly',
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
        paddingHorizontal: 20,
        opacity: 0.5,
        marginVertical: 20
    },
    line: {
        height: 0.5,
        backgroundColor: "white",
        flex: 1,
    },
    orText: {
        color: "white",
        width: "30%",
        textAlign: "center",
        fontFamily: poppins.p100
    }
})