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
      setIsFavorite(favorites.includes(item.ESPECIE));
    } catch (error) {
      console.error('Error loading favorite items from AsyncStorage:', error);
    }
  };

  const getFavorites = async () => {
    try {
      const favoritesString = await AsyncStorage.getItem('@favorites');
      return favoritesString ? JSON.parse(favoritesString) : [];
    } catch (error) {
      console.error('Error getting favorites from AsyncStorage:', error);
      return [];
    }
  };

  const saveFavorites = async (favorites) => {
    try {
      const favoritesString = JSON.stringify(favorites);
      await AsyncStorage.setItem('@favorites', favoritesString);
    } catch (error) {
      console.error('Error saving favorites to AsyncStorage:', error);
    }
  };

  const handleItemClick = () => {
    onItemClick(item);
  };

  const handleFavoriteToggle = async () => {
    try {
      const favorites = await getFavorites();
      if (isFavorite) {
        const newFavorites = favorites.filter((ESPECIE) => ESPECIE !== item.ESPECIE);
        setIsFavorite(false);
        saveFavorites(newFavorites);
      } else {
        const newFavorites = [...favorites, item.ESPECIE];
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
        <Text style={styles.species}>{item.ESPECIE}</Text>
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
    backgroundColor: 'green',
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
    fontSize: 16,
    color: 'white',
  },
  family: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
  },
});

export default ItemList;
