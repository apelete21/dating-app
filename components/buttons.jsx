import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { bgs, colors, poppins, uis } from '../constants'
import { LinearGradient } from 'expo-linear-gradient'

export function ButtonPrimary({ value, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <LinearGradient style={styles.btnGradient} colors={bgs.BtnBgPrimary} start={[1, 0]} end={[0, 1]}>
                <Text style={styles.buttonText}>{value}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export function ButtonSecondary({ value, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <LinearGradient style={styles.btnGradient} colors={bgs.BtnBgWhite} start={[1, 0]} end={[0, 1]}>
                <Text style={{ ...styles.buttonText, color: colors.black }}>{value}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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