/*Pressable, é um componente de toque, porém não tem o efeito
visual de opacidade, igual o do botão do touchtable.*/
import {Text, Pressable, PressableProps} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { colors } from "@/styles/colors"
import { styles } from "./styles"

type Props = PressableProps /*Essa propriedade é igual a pressabe props e o resto abaixo*/  & {
    name: string
    isSelected: boolean //Mais uma propriedade adicionada, se for selecionado
    icon: keyof typeof MaterialIcons.glyphMap //Tipagem de todos os ícones para impoartar
}

/*Na vídeo aula ele explica que usa o export sem default
para os componentes para ser chamado com o mesmo nome no index da pasta app*/
 export function Category({ name , icon, isSelected, ...rest /*o rest pega todo o restante das propriedades passadas aqui*/ }: Props) {
    //If ternário para mudar a cor se estiver selecionado.
    const color = isSelected ? colors.green[300] : colors.gray[400]
    return (
        <Pressable style={styles.container} {...rest}>
            <MaterialIcons name={icon} size={16} color={colors.gray[400]}/>
            <Text style={[styles.name, { color }]}>{name}</Text>
        </Pressable>
    )
}