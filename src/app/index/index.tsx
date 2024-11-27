///import { Text, View} from "react-native"

import {View, Image, TouchableOpacity} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import {styles} from "./styles"
import {colors} from "@/styles/colors"

/*Import sem o defautl do componente tem que ser o mesmo nome*/
import {Category} from "@/components/category"

///////Apenas exemplo. ///////
//export default function Index(){
//    return (
  
       // <View style={styles.container}>
   
      //Mas é possível realizar com o StyleSheet
      //  <Text style={styles.title}>Hello </Text>
      //<Text style={styles.title}>React Native!</Text>
        // }
      
       //Abaixo foi colocado o style, inline para colocar as  //configurações do teste*
     //<Text style={{color:"red", fontSize:22}}>Meu App</Text>
    // </View>   

  
  //    )
//}
///////Apenas exemplo. ///////

///////Apenas exemplo. ///////
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
///////Apenas exemplo. ///////

///////Referente ao projeto ///////
export default function Index(){
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require("@/assets/logo.png")} style={styles.logo} />
             <TouchableOpacity activeOpacity={0.5} > 
                <MaterialIcons name="add" size={32} color={colors.green[300]}></MaterialIcons>
              </TouchableOpacity>
        </View>
        <Category name="Projeto" icon="code"  isSelected/>
        <Category name="Site" icon="language" isSelected={false}/>
        <Category name="Video" icon="movie" isSelected={false}/>
    </View>
  )
 }
    