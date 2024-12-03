import { StyleSheet} from "react-native"

/*import {colors} from "../../styles/colors" */

/*Após ajuste no tsconfig.json para o @*/
import {colors} from "@/styles/colors"

export const styles = StyleSheet.create({
  container: {
       flex: 1,
       padding: 2, //Celular diferente acabou não sendo do mesmo tamanho
    },

    /*Usando as cores do carto colors.ts*/
    title: {
        color: colors.green[900],
        fontSize: 22,
    },
    header: {
        paddingHorizontal: 24,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 32,
    },
    logo: {
        height: 32,
        width: 38,
    },
    links :{
        borderTopWidth: 1,
        borderTopColor: colors.gray[600],
    },
    linksContent: {
        gap:20,
        padding: 24,
        paddingBottom: 100,
    },
}) 