import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const FilterDrawer = ({ selectedFilters, onToggleFilter, onClose, clearAllFilters, onFilterGroupChange }) => {




  const filters = [
    { key: "FLORESTA_OMBROFILA_DENSA", label: "Floresta Ombrófila Densa" },
    { key: "FLORESTA_OMBROFILA_ABERTA", label: "Floresta Ombrófila Aberta" },
    { key: "FLORESTA_OMBROFILA_MISTA", label: "Floresta Ombrófila Mista" },
    { key: "FLORESTA_ESTACIONAL_SEMIDECIDUAL", label: "Floresta Estacional Semidecidual" },
    { key: "FLORESTA_ESTACIONAL_DECIDUAL", label: "Floresta Estacional Decidual" },
    { key: "SISTEMA_EDAFICO_PRIMEIRA_OCUPACAO", label: "Sistema Edáfico Primeira Ocupação" },
    { key: "VEGETACAO_INFLUENCIA_MARINHA", label: "Vegetação com Influência Marinha" },
    { key: "VEGETACAO_INFLUENCIA_FLUVIOMARINHA", label: "Vegetação com Influência Fluvio-Marinha" },
    { key: "VEGETACAO_INFLUENCIA_FLUVIAL", label: "Vegetação com Influência Fluvial" },
    { key: "CAMPOS_RUPESTRES", label: "Campos Rupestres" },
    { key: "SASV", label: "SASV" },
    { key: "AREAS_ANTROPIZADAS", label: "Áreas Antropizadas" },
    { key: "TEXTURA_CASCALHO", label: "Textura Cascalho" },
    { key: "TEXTURA_ARENOSO", label: "Textura Arenoso" },
    { key: "TEXTURA_MEDIO", label: "Textura Médio" },
    { key: "TEXTURA_ARGILOSO", label: "Textura Argiloso" },
    { key: "FERTILIDADE_ALTA", label: "Fertilidade Alta" },
    { key: "FERTILIDADE_BAIXA", label: "Fertilidade Baixa" },
    { key: "BEM_DRENADO", label: "Bem Drenado" },
    { key: "MAL_DRENADO", label: "Mal Drenado" },
    { key: "MODERADAMENTE_DRENADO", label: "Moderadamente Drenado" },
    { key: "SUJEITO_ALAGAMENTO", label: "Sujeito a Alagamento" },
    { key: "RASO_CASCALHO", label: "Raso Cascalho" },
    { key: "RASO_ROCHA", label: "Raso Rocha" },
    { key: "PROFUNDO", label: "Profundo" },
    { key: "AC", label: "Acre" },
    { key: "AL", label: "Alagoas" },
    { key: "AM", label: "Amazonas" },
    { key: "AP", label: "Amapá" },
    { key: "BA", label: "Bahia" },
    { key: "CE", label: "Ceará" },
    { key: "DF", label: "Distrito Federal" },
    { key: "ES", label: "Espírito Santo" },
    { key: "GO", label: "Goiás" },
    { key: "MA", label: "Maranhão" },
    { key: "MG", label: "Minas Gerais" },
    { key: "MS", label: "Mato Grosso do Sul" },
    { key: "MT", label: "Mato Grosso" },
    { key: "PA", label: "Pará" },
    { key: "PE", label: "Pernambuco" },
    { key: "PI", label: "Piauí" },
    { key: "PB", label: "Paraíba" },
    { key: "PR", label: "Paraná" },
    { key: "RJ", label: "Rio de Janeiro" },
    { key: "RN", label: "Rio Grande do Norte" },
    { key: "RO", label: "Rondônia" },
    { key: "RR", label: "Roraima" },
    { key: "RS", label: "Rio Grande do Sul" },
    { key: "SE", label: "Sergipe" },
    { key: "SC", label: "Santa Catarina" },
    { key: "SP", label: "São Paulo" },
    { key: "TO", label: "Tocantins" },
    { key: "LENTO", label: "Lento" },
    { key: "RAPIDO", label: "Rápido" },
    { key: "MUITO_RAPIDO", label: "Muito Rápido" },
    { key: "USO_ALIMENTACAO", label: "Uso Alimentação" },
    { key: "USO_ARTESANATO", label: "Uso Artesanato" },
    { key: "USO_AROMATICO", label: "Uso Aromático" },
    { key: "USO_CORT", label: "Uso Cort" },
    { key: "USO_COND", label: "Uso Cond" },
    { key: "USO_COSMETICO", label: "Uso Cosmético" },
    { key: "USO_FORRAGEM", label: "Uso Forragem" },
    { key: "USO_FIBRAS", label: "Uso Fibras" },
    { key: "USO_LATEX", label: "Uso Látex" },
    { key: "USO_MADEIRA", label: "Uso Madeira" },
    { key: "USO_MEDICINAL", label: "Uso Medicinal" },
    { key: "USO_MELIFERA", label: "Uso Melífera" },
    { key: "USO_OLEO", label: "Uso Óleo" },
    { key: "USO_ORNAMENTAL", label: "Uso Ornamental" },
    { key: "USO_RESINA", label: "Uso Resina" },
    { key: "USO_RAD", label: "Uso Rad" },
    { key: "USO_TANINO", label: "Uso Tanino" },
    { key: "USO_TINTURA", label: "Uso Tintura" },
    { key: "USO_TOXICO", label: "Uso Tóxico" },
    { key: "AMEACADO", label: "Ameaçado" },
    { key: "TOL_SOMBRA", label: "Tolerância à Sombra" },
    { key: "ESTRATEGIA_OCUPACAO", label: "Estratégia de Ocupação" },
    { key: "ESTRATEGIA_DISPERSAO", label: "Dispersão de Frutos" }
  ];
  const getFullText = (abbreviation) => {
    const textMappings = {
      'EX': 'Extinta',
      'EW': 'Extinta na natureza',
      'CR': 'Criticamente em perigo',
      'EN': 'Em perigo',
      'VU': 'Vulnerável',
      'NT': 'Quase ameaçado',
      'LC': 'Baixo risco',
      'DD': 'Deficiente de dados',
      'NE': 'Não avaliada',
    };
    return textMappings[abbreviation] || abbreviation;
  };


  // Grupos de filtros
  const groups = [
    { title: 'Onde ocorre', filters: filters.slice(25, 52) },
    { title: 'Tipos de vegetação', filters: filters.filter(filter => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].includes(filters.indexOf(filter))) },
    { title: 'Caracteristicas do solo', filters: filters.slice(12, 16) },
    { title: 'Fertilidade', filters: filters.slice(16, 18) },
    { title: 'Drenagem', filters: filters.slice(18, 22) },
    { title: 'Caracteristicas ecologicas', filters: filters.slice(99, 100) },
    { title: 'Profundidade do Solo', filters: filters.slice(22, 25) },


    { title: 'Velocidade Crescimento', filters: filters.slice(52, 55) },
    { title: 'Uso Econômico', filters: filters.slice(55, 74) },
    { title: 'Ameaçado de Extinção', filters: filters.slice(95, 96) },

  ];




  // Estado para controlar os filtros marcados em cada grupo
  const [expandedGroupIndex, setExpandedGroupIndex] = useState(null);
  const [selectedGroupFilters, setSelectedGroupFilters] = useState({});
  const [tolSombraValue, setTolSombraValue] = useState(selectedFilters['TOL_SOMBRA'] || null);
  const [OcupValue, setOcupValue] = useState(selectedFilters['ESTRATEGIA_OCUPACAO'] || null);
  const [DispValue, setDispValue] = useState(selectedFilters['ESTRATEGIA_DISPERSAO'] || null);
  const [AmeacValue, setAmeacValue] = useState(selectedFilters['AMEACADO'] || null);







  const handleSelectSombra = () => {
    setTolSombraValue('');
    onToggleFilter('TOL_SOMBRA', '');
  };


  const handleSelectOcupacao = () => {
    setOcupValue('');
    onToggleFilter('ESTRATEGIA_OCUPACAO', '');
  };



  const handleSelectDispersao = () => {
    setDispValue('');
    onToggleFilter('ESTRATEGIA_DISPERSAO', '');
  };

  const handleSelectAmeac = () => {
    setAmeacValue('');
    onToggleFilter('AMEACADO', '');
    //console.log('Filtros Selecionados:', selectedFilters);

  };
  console.log('Filtros Selecionados:', selectedFilters);



  // Função para tratar a marcação/desmarcação de filtros em cada grupo
  const handleToggleFilterGroup = (groupIndex, filterKey) => {
    const newSelectedGroupFilters = { ...selectedGroupFilters };



    newSelectedGroupFilters[filterKey] = !newSelectedGroupFilters[filterKey];
    setSelectedGroupFilters(newSelectedGroupFilters);



    onFilterGroupChange(newSelectedGroupFilters);

    console.log('Novos filtros de grupo selecionados:', newSelectedGroupFilters);

  };
  // Função para limpar todos os filtros selecionados e redefinir o estado dos grupos
  const handleClearFilters = () => {
    clearAllFilters();
    onClose();
    // Limpar os filtros chamando a função recebida como prop
  };




  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}></Text>
        <TouchableOpacity onPress={onClose} style={styles.backButtonContainer}>
          <Text style={styles.closeButtonText}>Filtrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClearFilters}>
          <Text style={styles.clearFiltersButton}>Voltar</Text>
        </TouchableOpacity>
      </View>


{groups.map((group, groupIndex) => (
        <View key={groupIndex} style={[styles.card, expandedGroupIndex === groupIndex && styles.cardExpanded]}>
          <TouchableOpacity
            onPress={() => setExpandedGroupIndex(expandedGroupIndex === groupIndex ? null : groupIndex)}
            style={styles.cardTitleContainer}
          >
            <Text style={styles.cardTitle}>{group.title}</Text>
          </TouchableOpacity>
          {expandedGroupIndex === groupIndex && (
            <View style={styles.cardContent}>
              {group.filters.map((filter) => (
                <TouchableOpacity
                  key={filter.key}
                  style={styles.filterItem}
                  onPress={() => handleToggleFilterGroup(groupIndex, filter.key)}
                >
                  <Text style={styles.filterLabel}>{filter.label}</Text>
                  <View style={styles.checkbox}>
                    {selectedGroupFilters[filter.key] ? <Text style={styles.checkmark}>✓</Text> : null}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}
          {groupIndex === 5 && expandedGroupIndex === groupIndex && (
            <View style={styles.ecologicas}><Text>{'\n'}{'\n'}</Text>
              <TouchableOpacity onPress={handleSelectSombra}>
                <View style={styles.filterRow}>
                  <Text style={styles.filterLabel}>Tolerancia a sombra:      </Text>
                  <Text style={styles.selectedFilter}>
                    {selectedFilters['TOL_SOMBRA'] || 'Selecione uma opção'}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}

          {groupIndex === 5 && expandedGroupIndex === groupIndex && (
            <View style={styles.ecologicas}><Text>{'\n'}{'\n'}</Text>
              <TouchableOpacity onPress={handleSelectOcupacao}>
                <View style={styles.filterRow}>
                  <Text style={styles.filterLabel}>Estratégia de Ocupação:</Text>
                  <Text style={styles.selectedFilter}>
                    {selectedFilters['ESTRATEGIA_OCUPACAO'] || 'Selecione uma opção'}

                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}

          {groupIndex === 5 && expandedGroupIndex === groupIndex && (
            <View style={styles.ecologicas}><Text>{'\n'}</Text>
              <TouchableOpacity onPress={handleSelectDispersao}>
                <View style={styles.filterRow}>
                  <Text style={styles.filterLabel}>Estratégia de Disperção: </Text>
                  <Text style={styles.selectedFilter}>
                    {selectedFilters['ESTRATEGIA_DISPERSAO'] || 'Selecione uma opção'}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}

          {groupIndex === 9 && expandedGroupIndex === groupIndex && (
            <View style={styles.ecologicas}><Text>{'\n'}</Text>
              <TouchableOpacity onPress={handleSelectAmeac}>
                <View style={styles.filterRow}>
                  <Text style={styles.filterLabel}>Nivel extinção: </Text>
                  <Text style={styles.selectedFilter}>
                    {getFullText(selectedFilters['AMEACADO']) || 'Selecione uma opção'}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>


      ))}

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  selectedFilter: {
    marginLeft: 10, // Ajuste conforme necessário
  },
  filterRow: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'center',
  },

  backButtonContainer: {

    position: 'absolute',
    left: 16, // Ajuste conforme necessário
  },
  ecologicas: {
    flexDirection: 'row',
    marginLeft: 16,

  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006122',
    textAlign: 'center',


  },
  clearFiltersButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006122',
    textAlign: 'center',

  },
  card: {
    backgroundColor: 'white',
    marginBottom: 16,
    padding: 0,
    borderRadius: 10,

    borderColor: '#006122',

  },
  cardExpanded: {
    borderWidth: 1,
    borderTopColor: '#006122',
  },
  cardTitleContainer: {
    backgroundColor: '#006122',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 8,
  },
  cardContent: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    padding: 8, // Adiciona espaçamento interno quando o card está aberto
  },
  filterItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: 'bold',

  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    fontSize: 18,
  },
});

export default FilterDrawer;