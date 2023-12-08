import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export function ScreenBg({ source, children }) {

   return (
      <ImageBackground source={source} resizeMode="cover" style={styles.background}>
         <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.9)']}
            style={styles.background}
         >
            {children}
         </LinearGradient>
      </ImageBackground>
   );
}

const styles = StyleSheet.create({
   background: {
      flex: 1,
      width: "100%",
   }
})