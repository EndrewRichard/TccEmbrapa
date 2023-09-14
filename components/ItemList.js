import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ItemList = ({ item, onItemClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    checkIsFavorite();
  }, []);

  const checkIsFavorite = async () => {
    try {
      const favorites = await getFavorites();
      setIsFavorite(favorites.includes(item.ESPÉCIE));
    } catch (error) {
      console.error('Erro ao carregar os favoritos com AsyncStorage:', error);
    }
  };

  const getFavorites = async () => {
    try {
      const favoritesString = await AsyncStorage.getItem('@favorites');
      return favoritesString ? JSON.parse(favoritesString) : [];
    } catch (error) {
      console.error('Erro ao buscar os favoritos com AsyncStorage:', error);
      return [];
    }
  };

  const saveFavorites = async (favorites) => {
    try {
      const favoritesString = JSON.stringify(favorites);
      await AsyncStorage.setItem('@favorites', favoritesString);
    } catch (error) {
      console.error('Erro ao salvar os favoritos com AsyncStorage:', error);
    }
  };

  const handleItemClick = () => {
    onItemClick(item);
  };

  const handleFavoriteToggle = async () => {
    try {
      const favorites = await getFavorites();
      if (isFavorite) {
        const newFavorites = favorites.filter((ESPÉCIE) => ESPÉCIE !== item.ESPÉCIE);
        setIsFavorite(false);
        saveFavorites(newFavorites);
      } else {
        const newFavorites = [...favorites, item.ESPÉCIE];
        setIsFavorite(true);
        saveFavorites(newFavorites);
      }
    } catch (error) {
      console.error('Error toggling favorite item:', error);
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handleItemClick}>
      <View style={styles.content}>
        <Text style={styles.species}>{item.ESPÉCIE}</Text>
        <Ionicons
          name={isFavorite ? 'heart' : 'heart-outline'}
          size={24}
          color={isFavorite ? 'lightgreen' : 'black'}
          onPress={handleFavoriteToggle}
        />
      </View>
      <Text style={styles.commonName}><Text style={styles.family}>Nome popular: </Text>{item.NOME_VULGAR}</Text>
      <Text style={styles.commonName}><Text style={styles.family}>Família: </Text>{item.FAMILIA}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#006122',
    padding: 16,
    marginBottom: 8,
    borderRadius: 20,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  species: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  commonName: {
    fontSize: 14,
    color: 'white',
  },
  family: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold', // Aplica o estilo negrito
    color: '#006122',
    marginBottom: 0,
  },
  autor: {
    fontSize: 28,
    fontStyle: 'italic', // Aplica o estilo itálico
    fontWeight: 'bold', // Aplica o estilo negrito
    color: '#006122',
    marginBottom: 0,
  },
});

export default ItemList;
