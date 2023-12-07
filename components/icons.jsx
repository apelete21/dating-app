import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export function Icons(props) {
  return (
    <View>
          <MaterialCommunityIcons name={props.name} size={props.size} />
    </View>
  )
}

export function HeaderBackBtn() {
    const navigation = useNavigation()
    return (
        <View>
            <MaterialCommunityIcons name={"chevron-double-left"} size={30} style={{
                color: "gray",
            }} onPress={()=> navigation.goBack()} />
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