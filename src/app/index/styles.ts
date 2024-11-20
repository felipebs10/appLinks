import { StyleSheet} from "react-native"

/*import {colors} from "../../styles/colors" */

/*Após ajuste no tsconfig.json para o @*/
import {colors} from "@/styles/colors"

export const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
       /* flexDirection: "row", */
    },

    /*Usando as cores do carto colors.ts*/
    title: {
        color: colors.green[900],
        fontSize: 22,
    }
}) 