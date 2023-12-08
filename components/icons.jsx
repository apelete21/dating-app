import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export function Icons({ name, size, style }) {
    return (
        <View>
            <MaterialCommunityIcons name={name} size={size} style={style} />
        </View>
    )
}

export function HeaderBackBtn(props) {
    const navigation = useNavigation()
    return (
        <View>
            <MaterialCommunityIcons name={"chevron-left"} size={30} style={{
                color: props.dark ? "black" : "white",
            }} onPress={() => navigation.goBack()} />
        </View>
    )
}


export function HeaderMenuBtn() {
    const navigation = useNavigation()
    return (
        <View style={styles.menuIconContainer}>
            <MaterialCommunityIcons name={"chevron-double-left"} size={30} style={{
                color: "gray",
            }} onPress={() => navigation.navigate("Menu")} />
        </View>
    )
}

const styles = StyleSheet.create({})