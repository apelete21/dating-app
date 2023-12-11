import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { uis } from "../constants";

export function ScreenBg({ source, colors, start, end, children }) {

   return (
      <ImageBackground source={source} resizeMode="cover" style={styles.background}>
         <LinearGradient
            colors={colors || ['transparent', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.9)']}
            style={styles.background}
            start={start || null}
            end={end || null}
         >
            {children}
         </LinearGradient>
      </ImageBackground>
   );
}

const styles = StyleSheet.create({
   background: {
      flex: 1,
      width: "100%"
   }
})