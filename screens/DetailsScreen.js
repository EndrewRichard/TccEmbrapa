import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
  FlatList,

} from 'react-native';

import Modal from 'react-native-modal';

import { Ionicons } from '@expo/vector-icons';

const DetailsScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [downloadStatus, setDownloadStatus] = useState(null);
  const [isThreatModalVisible, setThreatModalVisible] = useState(false);
  const threatLevels = [
    { abbreviation: 'EX', description: 'Extinta', color: '#000000', textColor: 'red' },
    { abbreviation: 'EW', description: 'Extinta na natureza', color: '#795548', textColor: 'white' },
    { abbreviation: 'CR', description: 'Criticamente em perigo', color: '#9C27B0', textColor: 'white' },
    { abbreviation: 'EN', description: 'Em perigo', color: '#F44336', textColor: 'white' },
    { abbreviation: 'VU', description: 'Vulnerável', color: '#FF9800', textColor: 'white' },
    { abbreviation: 'NT', description: 'Quase ameaçado', color: '#FFC107', textColor: 'white' },
    { abbreviation: 'LC', description: 'Baixo risco', color: '#4CAF50', textColor: 'white' },
    { abbreviation: 'DD', description: 'Deficiente de dados', color: '#B0BEC5', textColor: 'white' },


    { abbreviation: 'NE', description: 'Não avaliada', color: '#d3d3d3', textColor: 'black' },
    { abbreviation: 'S/I', description: 'Sem informações', color: 'white', textColor: 'black' },

  ];

 


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


  // Função para abrir o link em um navegador externo ou WebView (a ser implementada) (atualmente baixando pdf)
  const handleOpenURL = (url) => {
    Linking.openURL(url)
      .then(() => {
        console.log('Link aberto no navegador:', url);
      })
      .catch((error) => {
        console.error('Erro ao abrir o link:', error);
      });
  };

  // Função para renderizar os ícones dos usos econômicos
  const renderUsageIcon = (usage) => {
    switch (usage) {
      default:
        return null;
    }

  };

  // FUNÇAO PARA COR E TEXTO DE AMEAÇADO

  const getThreatInfo = (threatLevel) => {
    const defaultInfo = { color: '#B0BEC5', textColor: '#000000' };
    const threatInfo = threatLevels.find((info) => info.abbreviation === threatLevel) || defaultInfo;
    return threatInfo;
  };
  const threatInfo = getThreatInfo(item.AMEACADO);

  //função para pegar cor
    const getThreatColor = (threatLevel) => {
      const threatInfo = threatLevels.find((info) => info.abbreviation === threatLevel);
      return threatInfo ? threatInfo.color : '#B0BEC5'; // Cor padrão se não encontrar
    };

  
    // Função para abrir o modal de ameaça
    const openThreatInfoModal = () => {
      setThreatModalVisible(true);
    };
  
    // Função para fechar o modal de ameaça
    const closeThreatInfoModal = () => {
      setThreatModalVisible(false);
    };

  const [mudasSementesOpen, setMudasSementesOpen] = useState(false);
  const [ondeOcorreOpen, setOndeOcorreOpen] = useState(false);
  const [caracteristicasSoloOpen, setCaracteristicasSoloOpen] = useState(false);
  const [relacaoAmbienteOpen, setRelacaoAmbienteOpen] = useState(false);
  const [ciclosOpen, setCiclosOpen] = useState(false);

console.log('Valor de item.AMEACADO:', item.AMEACADO);
const threatColor = getThreatColor(item.AMEACADO);
console.log('Cor do nível de extinção:', threatColor);
  

  

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* funçoes de voltar, botao de downlaod e botao de informaçoes
        sobre a extinção, além da exibição da especie e autor da mesma*/}
      <TouchableOpacity
          style={styles.goBackContainer}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.ESPÉCIE}</Text>

            {item.LINK && (
            <View>
              <TouchableOpacity onPress={() => handleOpenURL(item.LINK)}>
                {downloadStatus ? (
                  downloadStatus === 'Fazendo download...' ? (
                    <ActivityIndicator size="small" color="#00FF00" />
                  ) : (
                    <Ionicons name="arrow-down-circle" size={30} color="#006122" />
                  )
                ) : (
                  <Ionicons name="arrow-down-circle" size={30} color="#006122" />
                )}
              </TouchableOpacity>

            </View>
          )}


        </View>
        <View style={styles.titleContainer}>
        <Text style={styles.autor}>{item.AUTOR}</Text>


        {/* mudar cor da bola e do texto em ameaça de extinção (é igual no modal)*/}

        <TouchableOpacity
            style={[
              styles.threatCircle,
              {
                backgroundColor: threatInfo.color,
              },
            ]}
            onPress={() => openThreatInfoModal(item.AMEACADO)}
          >
            <Text style={[styles.threatText, { color: threatInfo.textColor }]}>
              {threatInfo.abbreviation}
            </Text>
          </TouchableOpacity>
        </View>

        
          


          <View style={styles.infoContainer}>
            <Text style={styles.sectionTitle}>{'\n'}Uso Econômico:</Text>
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


          {/* Seção Mudas e Sementes */}
          <TouchableOpacity
            style={styles.sectionTitleContainer}
            onPress={() => setMudasSementesOpen(!mudasSementesOpen)}
          >
            <Text style={styles.sectionTitle}>Mudas e Sementes</Text>
            <Ionicons
              name={mudasSementesOpen ? 'chevron-down' : 'chevron-forward'}
              size={24}
              color="#006122"
            />
          </TouchableOpacity>
          {mudasSementesOpen && (
            <View style={styles.sectionContent}>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Crescimento:</Text> {item.DESENVOL_MUDA_CAMPO}
              </Text>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Desenvolvimento da muda (2 anos):</Text>
                {item.LENTO === 1 ? ' Lento; ' : ''}
                {item.RAPIDO === 1 ? ' Rapido; ' : ''}
                {item.MUITO_RAPIDO === 1 ? ' Muito rapido; ' : ''}

              </Text>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Coleta e processamento:</Text> {item.COLETA_PROCESSAMENTO}
              </Text>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Tempo médio para o plantio:</Text> {item.TEMPO_MEDIO_PLANTIO}
              </Text>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Altura média para ir ao campo:</Text> {item.ALTURA_MEDIA}
              </Text>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Forma Biológica:</Text> {item.FORMA_BIOLOGICA}
              </Text>

              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Sementes/kg:</Text> {item.SEMENTE_P_KG}
              </Text>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Peso fresco/1000 sementes (g):</Text> {item.PESO_FRESCO}
              </Text>

              
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameGreen}>{'\n'}CONDIÇÕES DE ARMAZENAMENTO</Text> 
              </Text>

              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Caracteristicas observadas:</Text> {item.CONDICOES_ARMAZENAMENTO}
              </Text>

              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Prazo para armazenamento:</Text> {item.PRAZO_ARMAZENAMENTO}
              </Text>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Tolerancia a dessecação:</Text> {item.TOL_DESSECACAO}
              </Text>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Tolerancia ao frio:</Text> {item.TOL_FRIO}
              </Text>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Tipo dormência:</Text> {item.TIPO_DORMENCIA}
              </Text>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Tratamento para germinação:</Text> {item.TRAT_GERMINACAO}
              </Text>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Padronização:</Text> {item.PADRONIZACAO}
              </Text>


              
            </View>
          )}

          {/* Seção Onde Ocorre */}
          <TouchableOpacity
            style={styles.sectionTitleContainer}
            onPress={() => setOndeOcorreOpen(!ondeOcorreOpen)}
          >
            <Text style={styles.sectionTitle}>Onde ocorre</Text>
            <Ionicons
              name={ondeOcorreOpen ? 'chevron-down' : 'chevron-forward'}
              size={24}
              color="#006122"
            />
          </TouchableOpacity>
          {ondeOcorreOpen && (
            <View style={styles.sectionContent}>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Região Fitoecologica:</Text>
                {item.FLORESTA_OMBROFILA_DENSA === 1 ? ' Floresta Ombrófila Densa; ' : ''}
                {item.FLORESTA_OMBROFILA_ABERTA === 1 ? ' Floresta Ombrófila Aberta; ' : ''}
                {item.FLORESTA_OMBROFILA_MISTA === 1 ? ' Floresta Ombrófila Mista; ' : ''}
                {item.FLORESTA_ESTACIONAL_SEMIDECIDUAL === 1 ? ' Floresta Estacional Semi Decidual; ' : ''}
                {item.FLORESTA_ESTACIONAL_DECIDUAL === 1 ? ' Floresta Estacional Decidual; ' : ''}
              </Text>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Sistema Edafico de primeira ocupação:</Text> 
                {item.SISTEMA_EDAFICO_PRIMEIRA_OCUPACAO === 1 ? ' Sim; ' : 'Não'}
              </Text>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Influencia marinha:</Text> 
                {item.VEGETACAO_INFLUENCIA_MARINHA === 1 ? ' Sim; ' : 'Não'}
              </Text>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Influencia fluviomarinha:</Text> 
                {item.VEGETACAO_INFLUENCIA_FLUVIOMARINHA === 1 ? ' Sim; ' : 'Não'}
              </Text>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Influencia fluvial:</Text> 
                {item.VEGETACAO_INFLUENCIA_FLUVIAL === 1 ? ' Sim; ' : 'Não'}
              </Text>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Campos rupestres:</Text> 
                {item.CAMPOS_RUPESTRES === 1 ? ' Sim; ' : 'Não'}
              </Text>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Sistemas de áreas sem vegetação:</Text> 
                {item.SASV === 1 ? ' Sim; ' : 'Não'}
              </Text>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Areas antropizadas:</Text> 
                {item.AREAS_ANTROPIZADAS === 1 ? ' Sim; ' : 'Não'}
              </Text>
            </View>
          )}

          {/* Seção Características do Solo */}
          <TouchableOpacity
            style={styles.sectionTitleContainer}
            onPress={() => setCaracteristicasSoloOpen(!caracteristicasSoloOpen)}
          >
            <Text style={styles.sectionTitle}>Características do Solo</Text>
            <Ionicons
              name={caracteristicasSoloOpen ? 'chevron-down' : 'chevron-forward'}
              size={24}
              color="#006122"
            />
          </TouchableOpacity>
          {caracteristicasSoloOpen && (
            <View style={styles.sectionContent}>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Textura</Text>
                {item.TEXTURA_CASCALHO === 1 ? ' Cascalho; ' : ''}
                {item.TEXTURA_ARENOSO === 1 ? ' Arenoso; ' : ''}
                {item.TEXTURA_MEDIO === 1 ? ' Médio; ' : ''}
                {item.TEXTURA_ARGILOSO === 1 ? ' Argiloso; ' : ''}
              </Text>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Drenagem:</Text>
                {item.BEM_DRENADO === 1 ? ' Solos bem drenados (não saturados); ' : ''}
                {item.MAL_DRENADO === 1 ? ' Solos mal drenados; ' : ''}
                {item.MODERADAMENTE_DRENADO === 1 ? ' Solos moderadamente drenados; ' : ''}
                {item.SUJEITO_ALAGAMENTO === 1 ? ' Sujeito a alagamentos; ' : ''}
              </Text>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Profundidade do solo:</Text>
                {item.RASO_ROCHA === 1 ? ' Raso em rochas; ' : ''}
                {item.RASO_CASCALHO === 1 ? ' Raso em cascalhos; ' : ''}
                {item.PROFUNDO === 1 ? ' Profundo; ' : ''}
              </Text>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Características observadas:</Text> {item.OBSERVACAO_SOLO}
              </Text>
            </View>
          )} 
            {/* // Seção Relação com Ambiente */}
          <TouchableOpacity
            style={styles.sectionTitleContainer}
            onPress={() => setRelacaoAmbienteOpen(!relacaoAmbienteOpen)}
          >
            <Text style={styles.sectionTitle}>Relação com o Ambiente</Text>
            <Ionicons
              name={relacaoAmbienteOpen ? 'chevron-down' : 'chevron-forward'}
              size={24}
              color="#006122"
            />
          </TouchableOpacity>
          {relacaoAmbienteOpen && (
            <View style={styles.sectionContent}>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Tolerancia a sombra:</Text> {item.TOL_SOMBRA}
              </Text>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Ocupação na área plantada:</Text> {item.ESTRATEGIA_OCUPACAO}
              </Text>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Persisténcia da folhagem:</Text> {item.PERSISTENCIA_FOLHAGEM}
              </Text>

              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameGreen}>{'\n'}ATRAÇÃO DA FAUNA</Text> 
              </Text>

              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Animal Atraido:</Text> {item.ANIMAL_ATRAIDO}
              </Text>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Tipo de interação:</Text> {item.TIPO_INTERACAO}
              </Text>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Estratégia de dispersão:</Text> {item.ESTRATEGIA_DISPERSAO}
              </Text>
            
            </View>
          )}

            {/* // Seção Relação ciclos  */}
        <TouchableOpacity
          style={styles.sectionTitleContainer}
          onPress={() => setCiclosOpen(!ciclosOpen)}
        >
          <Text style={styles.sectionTitle}>Ciclos</Text>
          <Ionicons
            name={ciclosOpen ? 'chevron-down' : 'chevron-forward'}
            size={24}
            color="#006122"
          />
        </TouchableOpacity>
        {ciclosOpen && (
          <View style={styles.sectionContent}>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Periodo de floração:</Text> {item.PERIODO_FLORACAO}
              </Text>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Periodo de frutificação:</Text> {item.PERIODO_FRUTIFICACAO}
              </Text>
              <Text style={styles.moreInfoTextBlack}>
                <Text style={styles.attributeNameBlack}>Periodo de coleta de sementes no campo:</Text> {item.PERIODO_COLETA_SEMENTE}
              </Text>
                </View>
        )}


          <View style={styles.referencesContainer}>
          <Text style={styles.referencesTitle}>Referências:</Text>
          <Text style={styles.referenceText}><Text style={styles.attributeNameBlack}></Text>{item.REFERENCIA}</Text>
          <Text style={styles.referenceText}><Text style={styles.attributeNameBlack}></Text>{item.REFERENCIA1}</Text>
          <Text style={styles.referenceText}><Text style={styles.attributeNameBlack}></Text>{item.REFERENCIA2}</Text>
          <Text style={styles.referenceText}><Text style={styles.attributeNameBlack}></Text>{item.REFERENCIA3}</Text>
          <Text style={styles.referenceText}><Text style={styles.attributeNameBlack}></Text>{item.REFERENCIA4}</Text>


          </View>

        
        </View>
      </ScrollView>

      <Modal isVisible={isThreatModalVisible} onBackdropPress={closeThreatInfoModal}>
        <View style={styles.threatModal}>
          <Text style={styles.threatModalTitle}>Riscos de Extinção</Text>
          <FlatList
            data={threatLevels}
            keyExtractor={(item) => item.abbreviation}
            renderItem={({ item }) => (
              <View style={styles.threatModalItem}>
                <View
                  style={[
                    styles.threatModalCircle,
                    { backgroundColor: item.color },
                  ]}
                >
                  <Text style={[styles.threatModalAbbreviation, { color: item.textColor }]}>
                    {item.abbreviation}
                  </Text>
                </View>
                <Text style={styles.threatModalDescription}>{item.description}</Text>
              </View>
            )}
          />
          <TouchableOpacity style={styles.threatModalCloseButton} onPress={closeThreatInfoModal}>
            <Text style={styles.threatModalCloseButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>





      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006122',
    padding: 0,
  },
  title: {
    fontSize: 28,
    fontStyle: 'italic', // Aplica o estilo italico
    color: '#006122',
    marginBottom: 0,
  },
  threatCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'red',  // Defina a cor padrão ou use uma função para determinar a cor com base no valor de AMEACADO
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 0,
    marginTop: 0,

  },
  
  threatText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  autor: {
    fontSize: 28,
    //fontStyle: '', // Aplica o estilo itálico
    //fontWeight: '', // Aplica o estilo negrito
    color: '#006122',
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
    color: '#006122',
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
    backgroundColor: '#006122',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreInfoContainer: {
    marginBottom: 16,
    backgroundColor: '#006122',
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
  attributeNameGreen: {
    fontWeight: 'bold',
    color: '#006122',
  },
  referencesContainer: {
    marginBottom: 16,
  },
  referencesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#006122', // Cor do título em preto
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
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  sectionContent: {
    paddingLeft: 16,
    marginBottom: 16,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  
  goBackContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1, // Para garantir que o ícone fique acima do conteúdo
  },
  // modal de informaçoes
  threatModal: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },

  threatModalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  threatModalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  threatModalCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16, // Ajuste conforme necessário
  },
  
  threatModalAbbreviation: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },

  threatModalDescription: {
    flex: 1,
  },

  threatModalCloseButton: {
    marginTop: 10,
    backgroundColor: '#006122',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },

  threatModalCloseButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },


});

export default DetailsScreen;
