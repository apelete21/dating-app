import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ScreenBg } from '../components/screenbg'
import { colors, poppins, uis } from '../constants'
import { StatusBar } from 'expo-status-bar'
import { OtpInput } from 'react-native-otp-entry'
import { ButtonSecondary } from '../components/buttons'
import { getStringAsync } from "expo-clipboard"
import { useNavigation } from '@react-navigation/native'

export function Code() {
  const [code, setCode] = React.useState("")
  const codeInput = React.useRef(null)
  const navigation = useNavigation()

  const pasteFromClipBoard = async () => {
    const text = await getStringAsync();
    onTextChange(text);
    codeInput.current.setValue(text)
  }

  const onFilled = async (text) => {
    console.log(`OTP is ${text}`)
    setTimeout(()=>{
      Alert.alert("Status","Phone number confirmed!", [
        {
          text: "Next",
          onPress: () => { navigation.navigate('UpdateProfile') },
          style: "default"
        }
      ])
    }, 400)
  }

  const onTextChange = async (text) => {
    setCode(text)
  }

  return (
    <>
      <StatusBar style='light' />
      <ScreenBg source={require('../assets/hreatshape.jpg')} colors={[colors.primaryTransparent, colors.secondary]}>
        <View style={styles.container}>
          <Text style={styles.headerText}>
            <Text>Confirm your </Text>
            <Text>phone number</Text>
          </Text>
          <Text style={styles.lowerText}>
            <Text>Enter the code you receive on your phone number to validate it.</Text>
          </Text>
          <View style={styles.otpContainer}>
            <OtpInput
              ref={codeInput}
              numberOfDigits={6}
              focusColor={"#F2994A"}
              onFilled={onFilled}
              onTextChange={onTextChange}
              theme={{
                pinCodeTextStyle: styles.pinCodeTextStyle
              }}
            />
          </View>
          <View style={styles.btnContainer}>
            <ButtonSecondary value={"Paste from clipboard"} onPress={pasteFromClipBoard} />
          </View>
          <TouchableOpacity>
            <Text style={styles.newCodeText}>
              Did not receive any code ?
            </Text>
          </TouchableOpacity>
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
  headerText: {
    fontSize: 35,
    fontFamily: poppins.p700,
    color: colors.white,
    marginBottom: 15,
  },
  lowerText: {
    color: colors.white,
    fontFamily: poppins.p200,
    marginBottom: 15
  },
  otpContainer: {
    marginVertical: 30
  },
  btnContainer: {
    marginVertical: 15,
  },
  newCodeText: {
    fontFamily: poppins.p500,
    color: colors.white,
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30,
    textDecorationLine: "underline"
  },
  pinCodeTextStyle: {
    fontFamily: poppins.p700,
    color: colors.white,
    lineHeight: 35,
    marginTop: 5
  }
})