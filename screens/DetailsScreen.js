import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DetailsScreen = ({ route }) => {
  const { item } = route.params;

  // Função para filtrar os estados que contêm valor 1 no JSON
  const filterStates = (data) => {
    const states = [];
    for (const key in data) {
      if (key.length === 2 && data[key] === 1) {
        states.push(key);
      }
    }
    return states;
  };

  // Função para filtrar os usos que contêm valor 1 no JSON
  const filterUsages = (data) => {
    const usages = [];
    for (const key in data) {
      if (key.startsWith('USO_') && data[key] === 1) {
        usages.push(key.substring(4));
      }
    }
    return usages;
  };


  // Função para abrir o link em um navegador externo ou WebView (a ser implementada)
  const handleOpenURL = (url) => {
    // Implemente a lógica aqui para abrir o link externamente
    console.log('Abrir URL:', url);
  };

  // Função para renderizar os ícones dos usos econômicos
  const renderUsageIcon = (usage) => {
    switch (usage) {
      case 'ALIMENTACAO':
        return <Ionicons name="restaurant" size={24} color="green" />;
      case 'ARTESANATO':
        return <Ionicons name="hammer" size={24} color="green" />;
      case 'AROMATICO':
        return <Ionicons name="leaf" size={24} color="green" />;
      case 'CORT':
        return <Ionicons name="cut" size={24} color="green" />;
      case 'COND':
        return <Ionicons name="cloudy" size={24} color="green" />;
      // Adicione mais cases para outros usos econômicos
      default:
        return null;
    }

  };
  

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.ESPECIE}</Text>

            {item.LINK && (
              <TouchableOpacity style={styles.linkIconContainer} onPress={() => handleOpenURL(item.LINK)}>
                <Ionicons name="globe" size={24} color="blue" />
              </TouchableOpacity>
            )}

          </View>
          <Text style={styles.autor}>{item.AUTOR}{'\n'}{'\n'}</Text>


          <View style={styles.infoContainer}>
            <Text style={styles.sectionTitle}>Uso Econômico:</Text>
            <View style={styles.useIconsContainer}>
              {filterUsages(item).map((usage) => (
                <Text key={usage} style={styles.useIcon}>
                  {renderUsageIcon(usage)}
                  {usage}
                </Text>
              ))}
            </View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.sectionTitle}>Estados:</Text>
            <View style={styles.useIconsContainer}>
              {filterStates(item).map((state) => (
                <Text key={state} style={styles.useIcon}>
                  {state}
                </Text>
              ))}
            </View>
          </View>

          {/* Mais informações */}
          <View style={styles.moreInfoContainer}>
            <Text style={styles.moreInfoTitle}>Informações Gerais:</Text>
            <Text style={styles.moreInfoText}><Text style={styles.attributeName}>Nome Vulgar:</Text> {item.NOME_VULGAR}</Text>
            <Text style={styles.moreInfoText}><Text style={styles.attributeName}>Sinonímia Botânica:</Text> {item.SINONIMIA_BOTANICA}</Text>
            <Text style={styles.moreInfoText}><Text style={styles.attributeName}>Família:</Text> {item.FAMILIA}</Text>
            <Text style={styles.moreInfoText}><Text style={styles.attributeName}>Forma Biológica:</Text> {item.FORMA_BIOLOGICA}</Text>
          </View>


          <View>
            <Text style={styles.sectionTitle}>Mudas e sementes:</Text>
            <Text style={styles.moreInfoTextBlack}><Text style={styles.attributeNameBlack}>Dsenvolvimento da muda:</Text> {item.DESENVOL_MUDA_CAMPO}</Text>
            <Text style={styles.moreInfoTextBlack}><Text style={styles.attributeNameBlack}>Tempo médio plantio:</Text> {item.TEMPO_MEDIO_PLANTIO}</Text>
            <Text style={styles.moreInfoTextBlack}><Text style={styles.attributeNameBlack}>Altura média:</Text> {item.ALTURA_MEDIA}</Text>
            <Text style={styles.moreInfoTextBlack}><Text style={styles.attributeNameBlack}>Forma Biológica:</Text> {item.FORMA_BIOLOGICA}</Text>
            <Text style={styles.moreInfoTextBlack}><Text style={styles.attributeNameBlack}>Autor:</Text> {item.AUTOR}</Text>
          </View>

          <View style={styles.referencesContainer}>
          <Text style={styles.referencesTitle}>Referências:</Text>
          <Text style={styles.referenceText}><Text style={styles.attributeNameBlack}></Text> {item.REFERENCIA1}</Text>
          <Text style={styles.referenceText}><Text style={styles.attributeNameBlack}></Text> {item.REFERENCIA2}</Text>
          <Text style={styles.referenceText}><Text style={styles.attributeNameBlack}></Text> {item.REFERENCIA3}</Text>
          <Text style={styles.referenceText}><Text style={styles.attributeNameBlack}></Text> {item.REFERENCIA4}</Text>


          </View>


        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    padding: 0,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold', // Aplica o estilo negrito
    color: 'green',
    marginBottom: 0,
  },
  autor: {
    fontSize: 28,
    fontStyle: 'italic', // Aplica o estilo itálico
    fontWeight: 'bold', // Aplica o estilo negrito
    color: 'green',
    marginBottom: 0,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 60,
    marginTop: '25%', // Afasta o conteúdo do topo em 25% da altura da tela
    padding: 20,
    paddingTop: 35,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 8,
  },
  infoContainer: {
    marginBottom: 16,
  },
  useIconsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  useIcon: {
    marginRight: 8,
    marginBottom: 4,
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreInfoContainer: {
    marginBottom: 16,
    backgroundColor: 'green',
    padding: 16,
    borderRadius: 8,
  },
  moreInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },  
  moreInfoText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 4,
  },
  moreInfoTextBlack: {
    fontSize: 16,
    color: 'black',
    marginBottom: 4,
  },
  attributeName: {
    fontWeight: 'bold',
    color: 'white',
  },
  attributeNameBlack: {
    fontWeight: 'bold',
    color: 'black',
  },
  referencesContainer: {
    marginBottom: 16,
  },
  referencesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green', // Cor do título em preto
    marginBottom: 8,
  },
  referenceBox: {
    backgroundColor: 'black',
    color: 'black',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  referenceText: {
    fontSize: 16,
    color: 'gray', // Cor do texto em cinza
  },
  linkIconContainer: {
    marginLeft: 8,
  },
  
});

export default DetailsScreen;
