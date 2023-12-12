import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ScreenBg } from '../components/screenbg'
import { colors, poppins, uis } from '../constants'
import { ButtonPrimary, ButtonSecondary } from '../components/buttons'
import { SelectList } from 'react-native-dropdown-select-list'
import { Icons } from '../components/icons'
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native'

export default function UpdateProfile() {

    const [image, setImage] = useState(null);
    const navigation = useNavigation()

    const goToHomePage = () => {
        navigation.navigate("Home")
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

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
                        <View style={styles.imageview}>
                            <Image source={{ uri: image }} style={styles.imageContainer} />
                        </View>
                        <ButtonSecondary value={"Select an image"} onPress={pickImage} />
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
                    </View>
                    <View style={styles.textinputcontainer}>
                        <SelectList
                            data={[
                                // { key: '1', value: 'Sex', disabled: true },
                                { key: '2', value: 'Male' },
                                { key: '3', value: 'Female' },
                            ]}
                            setSelected={e => { }}
                            searchicon={e => { }}
                            placeholder='Sex'
                            fontFamily={poppins.p500}
                            arrowicon={<Icons name={"chevron-down"} size={25} style={{
                                color: colors.white
                            }} />}
                            closeicon={() => { }}
                            search={false}
                            dropdownTextStyles={{
                                color: colors.white
                            }}
                            inputStyles={{
                                color: colors.white,
                            }}
                            boxStyles={{
                                borderColor: colors.transparent,
                                backgroundColor: colors.blackTransparent,
                                borderRadius: uis.btnRadius,
                            }}
                            dropdownStyles={{
                                borderColor: colors.white,
                                borderRadius: uis.btnRadius
                            }}
                            placeholderTextColor={colors.whiteTransparent}
                        />
                    </View>
                </ScrollView>
                <View style={styles.btnContainer}>
                    <ButtonPrimary value={"Next"} onPress={goToHomePage} />
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
    imageview: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        flexDirection: 'row'
    },
    imageContainer: {
        width: 150,
        height: 150,
        backgroundColor: colors.white,
        borderRadius: 9999,
        marginBottom: 20,
    }
})