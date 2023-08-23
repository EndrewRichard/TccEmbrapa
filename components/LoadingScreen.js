import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LoadingScreen = () => {
  // Use o hook useEffect para simular um carregamento e navegar para a próxima tela após algum tempo

  return (


    <View style={styles.container}>
    <Image 
        style={{width: '100%', height: 100}}
        resizeMode={'contain'}
        source={require('../assets/icon_launcher.png')}
    />
   <Text style={styles.text}>RESTAURA MATA ATLANTICA</Text>


    <Image 
        style={{width: '100%', height: 100}}
        resizeMode={'contain'}
        
        source={require('../assets/ic_logo_embrapa_white.png')}
    />
    <Image 
        style={{width: '100%', height: 100}}
        resizeMode={'contain'}
        bottom={'0%'}
        source={require('../assets/ic_logo_pet_white.png')}
    />

    </View>
    );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006122',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default LoadingScreen;
