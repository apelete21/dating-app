import { Dimensions, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ScreenBg } from '../components/screenbg'
import { colors, poppins, uis } from '../constants'
import { ButtonPrimary, ButtonSecondary } from '../components/buttons'
import { Picker } from '@react-native-picker/picker'

export default function UpdateProfile() {

    const [selectedSex, setSelectedSex] = useState("")

    return (
        <>
            {/* <StatusBar style='light' /> */}
            <ScreenBg
                // source={require("../assets/updateprofile.jpg")}
                colors={[colors.primary, colors.secondary]}
            >
                <ScrollView style={styles.container} >
                    <Text style={styles.texthead}>Let's complete your profile</Text>
                    <View style={styles.textinputcontainer}>
                        <TextInput
                            keyboardType='default'
                            placeholder='First name'
                            style={styles.textinput}
                            placeholderTextColor={colors.white}
                        />
                    </View>
                    <View style={styles.textinputcontainer}>
                        <TextInput
                            keyboardType='default'
                            placeholder='Last name'
                            style={styles.textinput}
                            placeholderTextColor={colors.white}
                        />
                    </View>
                    <View style={styles.textinputhorizontal}>
                        <TextInput
                            keyboardType='number-pad'
                            placeholder='Age'
                            style={styles.textinput}
                            placeholderTextColor={colors.white}
                        />
                        <Picker
                            selectedValue={selectedSex}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedSex(itemValue)
                            }
                            style={styles.pickerstyle}
                            dropdownIconColor={"white"}
                            dropdownIconRippleColor={"black"}
                            prompt='Sex'
                            placeholder={"Sex"}
                            value='Male'
                            placeholderTextColor='white'
                        >
                            <Picker.Item label="Male" value="M" style={styles.pickerItem} />
                            <Picker.Item label="Female" value="F" style={styles.pickerItem} color='black' />

                        </Picker>
                    </View>
                    <View style={styles.textinputcontainer}>
                        <TextInput
                            keyboardType='default'
                            placeholder='First name'
                            style={styles.textinput}
                            placeholderTextColor={colors.white}
                        />
                    </View>
                    <View style={styles.textinputcontainer}>
                        <TextInput
                            keyboardType='default'
                            placeholder='First name'
                            style={styles.textinput}
                            placeholderTextColor={colors.white}
                        />
                    </View>
                </ScrollView>
                <View style={styles.btnContainer}>
                    <ButtonPrimary value={"Next"} />
                </View>
            </ScreenBg>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "flex-end",
        // justifyContent: "flex-end",
        paddingHorizontal: uis.xPadding,
        marginTop: Dimensions.get('window').height * 15 / 100
    },
    texthead: {
        color: colors.white,
        fontFamily: poppins.p500,
        fontSize: 25,
        marginBottom: 15,
    },
    textinputcontainer: {
        marginVertical: 20,
        gap: 10
    },
    textinputhorizontal: {
        marginVertical: 20,
        flexDirection: "row",
        gap: 20
    },
    textinput: {
        backgroundColor: colors.blackTransparent,
        paddingHorizontal: 25,
        paddingTop: 16,
        paddingBottom: 10,
        color: colors.white,
        fontFamily: poppins.p500,
        borderRadius: 30,
        flex: 1,
    },
    btnContainer: {
        paddingVertical: 20,
        paddingHorizontal: uis.xPadding,
        backgroundColor: colors.white
    },
    pickerstyle: {
        flex: 1,
        backgroundColor: colors.blackTransparent,
        // color: colors.white
    },
    pickerItem: {
        color: "white"
    }
})