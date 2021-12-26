import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  
} from "react-native";
import { withNavigation } from "react-navigation";

import ResultDetail from "./ResultsDetail";

const ResultList = ({ title, results, navigation }) => {

  if(!results.length)
  {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsVerticalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ResultsShow', {id:item.id})}
            >
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />

      <Text style={styles.title}>Results : {results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultList);
