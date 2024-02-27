import { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Modal, FlatList } from 'react-native';
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
  const [selectedGroupFilters, setSelectedGroupFilters] = useState({});

  useEffect(() => {
    filterData();
  }, [searchText, selectedFilters]);

  const handleFilterChange = (newSelectedGroupFilters) => {
    console.log(
      'listdata 1:',
    );
    setSelectedGroupFilters(newSelectedGroupFilters);
    filterData();
  };

  const filterData = async () => {
    const favorites = await getFavorites();

    const filteredItems = data.Dado.filter(
      (item) =>
        (item.ESPÉCIE &&
          item.ESPÉCIE.toLowerCase().includes(searchText.toLowerCase())) ||
        (item.NOME_VULGAR &&
          item.NOME_VULGAR.toLowerCase().includes(searchText.toLowerCase()))
    );

    let filteredByFilters = [...filteredItems];

  Object.keys(selectedGroupFilters).forEach((groupKey) => {
    const selectedFiltersInGroup = selectedGroupFilters[groupKey];
    if (selectedFiltersInGroup) {
      // Ajuste para considerar apenas os itens com valor 1
      filteredByFilters = filteredByFilters.filter((item) => {
        const itemGroupValues = item[groupKey];

        // Verifique se o valor do item é 1
        return itemGroupValues && itemGroupValues === 1;
      });
    }
  });


    if (selectedFilters['TOL_SOMBRA']) {
      filteredByFilters = filteredByFilters.filter(
        (item) =>
          item['TOL_SOMBRA'].toLowerCase() ===
          selectedFilters['TOL_SOMBRA'].toLowerCase()
      );
    }

    if (selectedFilters['ESTRATEGIA_DISPERSAO']) {
      filteredByFilters = filteredByFilters.filter(
        (item) =>
          item['ESTRATEGIA_DISPERSAO'].toLowerCase() ===
          selectedFilters['ESTRATEGIA_DISPERSAO'].toLowerCase()
      );
    }

    if (selectedFilters['ESTRATEGIA_OCUPACAO']) {
      filteredByFilters = filteredByFilters.filter(
        (item) =>
          item['ESTRATEGIA_OCUPACAO'].toLowerCase() ===
          selectedFilters['ESTRATEGIA_OCUPACAO'].toLowerCase()
      );
    }
    if (selectedFilters['AMEACADO']) {
      filteredByFilters = filteredByFilters.filter(
        (item) => item['AMEACADO'] === selectedFilters['AMEACADO']
      );
    }

    filteredByFilters.sort((a, b) => {
      const isAFavorite = favorites.includes(a.ESPÉCIE);
      const isBFavorite = favorites.includes(b.ESPÉCIE);
      return isBFavorite - isAFavorite;
    });



    setFilteredData(filteredByFilters);
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
    setSelectedFilters((prevFilters) => {
      if (filterKey === 'ESTRATEGIA_OCUPACAO') {
        const occupationOptions = ['diversidade', 'recobrimento', ''];
        const currentIndex = occupationOptions.indexOf(prevFilters[filterKey]);
        const newValue =
          occupationOptions[(currentIndex + 1) % occupationOptions.length];
        return {
          ...prevFilters,
          [filterKey]: newValue,
        };
      }

      if (filterKey === 'TOL_SOMBRA') {
        const shadeOptions = ['sim', 'não', 'indiferente', ''];
        const currentIndex = shadeOptions.indexOf(prevFilters[filterKey]);
        const newValue = shadeOptions[(currentIndex + 1) % shadeOptions.length];
        return {
          ...prevFilters,
          [filterKey]: newValue,
        };
      }

      if (filterKey === 'ESTRATEGIA_DISPERSAO') {
        const dispersaoOptions = [
          'autocórica',
          'zoocórica',
          'anemocórica',
          'endozoocórica',
          'hidrocórica',
          '',
        ];
        const currentIndex = dispersaoOptions.indexOf(prevFilters[filterKey]);
        const newValue =
          dispersaoOptions[(currentIndex + 1) % dispersaoOptions.length];
        return {
          ...prevFilters,
          [filterKey]: newValue,
        };
      }
      if (filterKey === 'AMEACADO') {
        const ameacadoOptions = [
          'LC',
          'NT',
          'VU',
          'EN',
          'CR',
          'EW',
          'EX',
          'DD',
          'NE',
          '',
        ];
        const currentIndex = ameacadoOptions.indexOf(prevFilters[filterKey]);
        const newValue =
          ameacadoOptions[(currentIndex + 1) % ameacadoOptions.length];
        return {
          ...prevFilters,
          [filterKey]: newValue,
        };
      }

      // Outras chaves podem ser tratadas aqui, se necessário

      return prevFilters; // Retorna os filtros inalterados para outras chaves
    });
  };

  const handleClearFilters = () => {
    setSelectedFilters({});
  };

  const clearFilters = () => {
    setSelectedFilters({});
  };
  
  const clearAllFilters = () => {
    setSelectedFilters({});
    setSelectedGroupFilters({});
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

      <Modal
        visible={showFilterModal}
        animationType="slide"
        onRequestClose={handleToggleFilterModal}>
        <FilterDrawer
          selectedFilters={selectedFilters}
          onToggleFilter={handleToggleFilter}
          onClose={handleToggleFilterModal}
          clearAllFilters={clearAllFilters} // Passar a função clearFilters para o FilterDrawer
          onFilterChange={handleFilterChange}
          onFilterGroupChange={handleFilterChange}
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
        icon={({ color, size }) => (
          <Ionicons name="filter" color={'#006122'} size={size} />
        )}
        onPress={() => {
          handleToggleFilterModal();
          clearAllFilters(); // Chame a função clearFilters aqui
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
    width: 65, // Ajuste o tamanho do botão aumentando o valor de width
    height: 65, // Ajuste o tamanho do botão aumentando o valor de height
    borderRadius: 16, // Certifique-se de que a borda seja metade do valor da altura para manter um formato circular
    alignItems: 'center',
    justifyContent: 'center',
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
