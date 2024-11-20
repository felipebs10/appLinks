import { Text, View} from "react-native"

import {styles} from "./styles"

export default function Index(){
    return (
     <View style={styles.container}>
        {/*Mas é possível realizar com o StyleSheet*/ }
        <Text style={styles.title}>Hello </Text>
        <Text style={styles.title}>React Native!</Text>

       {/*Abaixo foi colocado o style, inline para colocar as configurações do teste*/} 
       {/*<Text style={{color:"red", fontSize:22}}>Meu App</Text>*/} 
    </View>   
    )
}


/*Parte abaixo, copiada para o styles.ts*/
//const styles = StyleSheet.create({
/*O Flex box abaixo no container é padrão, diferente do web.*/ 
  /*  container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
       /* flexDirection: "row", 
    },
*/
    /*Colocando a cor*/ 
    /*   title: {
        color: "green",
        fontSize: 22
    },*/

    /*Usando as cores do carto colors.ts*/
    /* title: {
        color: colors.green[900],
        fontSize: 22,
    }
}) */