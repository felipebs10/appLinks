import { StyleSheet } from "react-native";

//Não está sendo mais utilizado, está sendo usado no componente direto
//import {colors} from "@/styles/colors"

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    name: {
        fontSize: 16, 
        fontWeight: "600",
        // Ele triou a cor para devido a cor de seleção para ser independente.
        //   color: colors.gray[400],
     
    },
})