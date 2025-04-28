import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const Categories = ({ categories, selectedCategory, onCategoryPress }) => {
  return (
    <FlatList
      horizontal
      data={categories}
      keyExtractor={(item) => String(item?.value)}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      style={{ marginTop: 12 }}
      renderItem={({ item }) => {
        const selected = selectedCategory === item?.value;

        return (
          <TouchableOpacity
            onPress={() => onCategoryPress(item?.value)}
            style={[
              styles.itemContainer,
              selected && styles.selectedItemContainer,
            ]}
            activeOpacity={0.85}
          >
            <Text
              style={[styles.itemText, selected && styles.selectedItemText]}
            >
              {item?.label}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default React.memo(Categories);
