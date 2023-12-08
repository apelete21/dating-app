import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { HeaderBackBtn } from './icons'
import { uis } from '../constants'

export default function HeaderBar(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <HeaderBackBtn dark={props.dark} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 25,
        paddingVertical: 10,
        paddingHorizontal: uis.xPadding,
        justifyContent: 'space-between',
    }
})