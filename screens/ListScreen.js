import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal, FlatList } from 'react-native';
import data from '../data/grad.json';
import FilterDrawer from './FilterDrawer';
import ItemList from '../components/ItemList';
import { FAB } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(data.Dado);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});

  useEffect(() => {
    filterData();
  }, [searchText, selectedFilters]);

  const filterData = async () => {
    const favorites = await getFavorites();

    const filteredItems = data.Dado.filter(
      (item) =>
        (item.ESPÉCIE && item.ESPÉCIE.toLowerCase().includes(searchText.toLowerCase())) ||
        (item.NOME_VULGAR && item.NOME_VULGAR.toLowerCase().includes(searchText.toLowerCase()))
    );

    if (Object.keys(selectedFilters).length > 0) {
      const filteredByFilters = filteredItems.filter((item) =>
        Object.entries(selectedFilters).every(([key, value]) => item[key] === (value === true ? 1 : 0))
      );
      filteredByFilters.sort((a, b) => {
        const isAFavorite = favorites.includes(a.ESPÉCIE);
        const isBFavorite = favorites.includes(b.ESPÉCIE);
        return isBFavorite - isAFavorite;
      });
      setFilteredData(filteredByFilters);
    } else {
      filteredItems.sort((a, b) => {
        const isAFavorite = favorites.includes(a.ESPÉCIE);
        const isBFavorite = favorites.includes(b.ESPÉCIE);
        return isBFavorite - isAFavorite;
      });
      setFilteredData(filteredItems);
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

  const handleItemClick = (item) => {
    navigation.navigate('Details', { item });
  };

  const handleToggleFilterModal = () => {
    setShowFilterModal(!showFilterModal);

  };

  const handleToggleFilter = (filterKey) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterKey]: !prevFilters[filterKey],
    }));
  };

  const handleClearFilters = () => {
    setSelectedFilters({});
  };

  const clearFilters = () => {
    setSelectedFilters({});
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar por espécie ou nome popular..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <Modal visible={showFilterModal} animationType="slide" onRequestClose={handleToggleFilterModal}>
        <FilterDrawer
          selectedFilters={selectedFilters}
          onToggleFilter={handleToggleFilter}
          onClose={handleToggleFilterModal}
          clearFilters={clearFilters} // Passar a função clearFilters para o FilterDrawer
        />
      </Modal>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.ESPÉCIE}
        renderItem={({ item }) => (
          <ItemList item={item} onItemClick={handleItemClick} />
        )}
      />
      <FAB
        style={styles.fab}
        icon={({ color, size }) => <Ionicons name="filter" color={'#006122'} size={size} />}
        onPress={() => {
          handleToggleFilterModal();
          clearFilters(); // Chame a função clearFilters aqui
        }}
/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchInput: {
    height: 50,
    width: '100%',
    borderColor: '#006122',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginBottom: -8,
    marginTop: 13,
    color: 'black',
  },
});

export default ListScreen;
