import React from "react";
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { fontSizes, spacing } from "../utils/sizes";
import { colors } from "../utils/colors";

export const FocusHistory = ({ history }) => {

  if (!history || !history?.length) return <Text style={styles.title}>We haven't focused on anything yet!</Text>;

  const renderItem = ({item}) => {
    return (
      <Text style={styles.item}>- {item}</Text>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList 
        data={history}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item}-${index}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold'
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingTop: spacing.sm
  }
})