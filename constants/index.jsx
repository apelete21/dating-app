import { Dimensions } from "react-native"

export const colors = {
    primary: "#cb356b",
    primaryTransparent: "#cb356bc0",
    secondary: "#bd3f32",
    secondaryTransparent: "#bd3f32c0",
    tertiary: "#cb356b90",
    white: "#fff",
    black: "#000",
    blackTransparent: "#0005",
    whiteTransparent: "#fff2",
    transparent: "#0000"
}
export const bgs = {
    BtnBgPrimary: ['#cb356b', '#bd3f32'],
    BtnBgWhite: ['#fff', '#fff'],
}

export const uis = {
    btnRadius: 30,
    xPadding: 20,
    btnFont: 16,
}

export const poppins = {
    p100: "Poppins_100Thin",
    p200: "Poppins_200ExtraLight",
    p300: "Poppins_300Light",
    p400: "Poppins_400Regular",
    p500: "Poppins_500Medium",
    p600: "Poppins_600SemiBold",
    p700: "Poppins_700Bold",
    p800: "Poppins_800ExtraBold",
    p900: "Poppins_900Black"
}

export const dimensions = {
    vw: Dimensions.get('window').width,
    vh: Dimensions.get('window').height,
}