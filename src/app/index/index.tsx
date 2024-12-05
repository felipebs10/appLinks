///import { Text, View} from "react-native"

import {View, Image, TouchableOpacity, FlatList, Modal, Text} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import {styles} from "./styles"
import {colors} from "@/styles/colors"
import { Categories } from "@/components/categories"
import {Option} from "@/components/option"
import { Link } from "@/components/link"
//import { categories } from "@/utils/categories"

/*Import sem o defautl do componente tem que ser o mesmo nome*/
//import {Category} from "@/components/category"



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
    {/*Formato inicial colocando o nome em cada componente*/ }
    {/*    <Category name="Projeto" icon="code"  isSelected/>
        <Category name="Site" icon="language" isSelected={false}/>
        <Category name="Video" icon="movie" isSelected={false}/>

        */ }
        {/*usando o categories para facilitar, apenas para exmplificar*/}
    {/*
        <Category name={categories[0].name} icon={categories[0].icon}  isSelected/>
        <Category name={categories[1].name} icon={categories[1].icon} isSelected={false}/>
        <Category name={categories[2].name} icon={categories[2].icon} isSelected={false}/>
        <Category name={categories[3].name} icon={categories[3].icon} isSelected={false}/>
        <Category name={categories[4].name} icon={categories[4].icon} isSelected={false}/>
        <Category name={categories[5].name} icon={categories[5].icon} isSelected={false}/>
       */ } 
       
       <Categories />

       
        <FlatList
          data={["1", "2", "3", "4", "5"]}
          keyExtractor={(item) => item}
          renderItem={() => (
            <Link
            name="Rocketseat" 
            url="https://www.rocketseat.com.br/"
            onDetails={() => console.log("Clicou!")}
           />
          )}
     style={styles.links}   
     contentContainerStyle={styles.linksContent}  
     showsVerticalScrollIndicator={false}
    />


    <Modal transparent visible={true}>
         <View style={styles.modal}> {/*Toda a área da modal*/}
          <View style={styles.modalContent}> {/*Onde tem conteudo*/}
            <View style={styles.modalHeader}> {/*Header da modal*/}
              <Text style={styles.modalCategory}>
                Curso
              </Text>
                <TouchableOpacity>
                  <MaterialIcons name="close" size={20} color={colors.gray[400]} />
                </TouchableOpacity> 
            </View>
            <Text style={styles.modalLinkName}>Rocketseat</Text>
            <Text style={styles.modalUrl}>https://www.rocketseat.com.br/</Text>  

            <View style={styles.modalFooter}>
              <Option name="Excluir" icon="delete" variant="secondary"/>
              <Option name="Abrir" icon="language"/>
            </View>
          </View>
         </View>
    </Modal>
    </View>
  )
 }
    