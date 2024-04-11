import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; // Importez StyleSheet de 'react-native'
import axios from 'axios';
import * as RootNavigation from "../RootNavigation.js";


function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = () => {
    axios.get("http://192.168.1.113:3310/api/article")
      .then(response => {
        setArticles(response.data);
        console.log("mes articles:", response.data)
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des articles :", error);
      });
  };

  const navigateToPageDescription =() => {
    RootNavigation.navigate('PageDescription')
  }

  return (
    <View>
      <View>
        {articles?.map((article) => (
          <View key={article.id}>
            <TouchableOpacity style={styles.cardArticle} onPress={navigateToPageDescription}>
                <Text>{article.name}</Text>
                <Text>stock: {article.stock}</Text>
              </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ // Utilisez StyleSheet.create pour définir vos styles
  cardArticle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    width: 300,
    padding: 10,
    borderRadius: 5,
    marginBottom: 40,
  },
});

export default Home;