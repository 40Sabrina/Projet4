import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import logo from "../assets/logo.jpg"
import * as RootNavigation from "../RootNavigation.js";


function Navbar() {

const handleImagePress = () => {
  RootNavigation.navigate('Home');
};

  return (
    <View style={styles.containerNav}>
      <TouchableOpacity onPress={handleImagePress}>
      <Image source={logo} style={styles.logo}/>
      </TouchableOpacity>
      <Text onPress={() => alert('Bouton cliqué')} style={styles.login}>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({ // Utilisez StyleSheet.create pour définir vos styles
  containerNav: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 20,
    marginRight: 40,
    marginBottom: 20,
    marginLeft: 20,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 45,
  },
  login: {
  fontSize: 24,
  fontWeight: "bold",
  }
});

export default Navbar;