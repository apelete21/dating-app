import { StyleSheet, View } from 'react-native'
import React from 'react'
import PhoneInput from 'react-native-phone-number-input'
import { colors, poppins, uis } from '../constants'

export function PhoneNumberInput({}) {
  return (
    <>
      <View style={styles.phoneInputContainer}>
        <PhoneInput
          // autoFocus
          defaultCode="TG"
          disableArrowIcon
          placeholder='90 00 00 00'
          withDarkTheme
          containerStyle={{
            width: "100%",
            backgroundColor: colors.whiteTransparent
          }}
          codeTextStyle={{
            display: "none"
          }}
          textContainerStyle={{
            backgroundColor: colors.transparent,
          }}
          textInputStyle={{
            color: "white",
            fontFamily: poppins.p500,
          }}
          flagButtonStyle={{
            marginLeft: 30,
            width: 30,
          }}
          textInputProps={{
            placeholderTextColor: "white"
          }}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  phoneInputContainer: {
    marginBottom: 20,
    borderRadius: uis.btnRadius,
    overflow: 'hidden'
  }
})