/*Pressable, é um componente de toque, porém não tem o efeito
visual de opacidade, igual o do botão do touchtable.*/
import {Text, Pressable} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/styles/colors"
import { styles } from "./styles"


/*Na vídeo aula ele explica que usa o export sem default
para os componentes para ser chamado com o mesmo nome no index da pasta app*/
export function Category() {
    return (
        <Pressable>
            <MaterialIcons name="code" size={16} color={colors.gray[400]}/>
            <Text style={styles.name}>Projetos</Text>
        </Pressable>
    )
}