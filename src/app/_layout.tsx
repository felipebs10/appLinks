import {Stack} from "expo-router"

import {colors} from "@/styles/colors"


export default function Layout() {
    const backgroundColor = colors.gray[950]
    
    return <Stack 
        screenOptions={{
            headerShown: false,
            /*short sintaxe*/ 
            contentStyle: { backgroundColor },

            /*Realizando a chamada da cor do arquivo colors.*/
            //contentStyle: {backgroundColor: colors.gray[950]}
        }}
    />
}