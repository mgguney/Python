import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");

  const [result, setResult] = useState(null);  
  const [errorMessage, setErrorMessage] = useState('');

  console.log(result);

  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
      setErrorMessage("");

      console.log(result);
    } catch (err) {
      setErrorMessage("Somethings went wrong: " + err);
      setResult(null);
      console.log(err);
    }
  };

  useEffect(()=>{
    getResult(id);

  }, []);

  if(!result)
  {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo} 
        renderItem={({item})=>{
        return <Image style={styles.image} source = {{uri:item}}/>
        
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image : {
    height:200,
    width:300
  }
});

export default ResultsShowScreen;
