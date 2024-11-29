//Lista para redenrizar as lista no react native é o FlatList
import { FlatList } from "react-native";

import { styles } from "./styles";
import { categories } from "@/utils/categories";
import { Category } from "@/components/category";

export function Categories() {
    return (
    <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Category name={item.name} icon={item.icon} 
          isSelected={false} />
        )}
        horizontal
        style={styles.container}
        contentContainerStyle={styles.content}
        showsHorizontalScrollIndicator={false} /*Para não mostrar a barra, porém no android não mostra em nenhum momento, só no ihpone.*/ 
    />
    ) 
} 