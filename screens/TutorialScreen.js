import styled from 'styled-components/native';
import { View, Text, Image, StyleSheet } from 'react-native';

function TutorialScreen() {
  return (
    <Container>
      <Scroller>
        <Text>
          <Text><Text style={styles.wordBold}>Restaura </Text>
            é um aplicativo móvel que permite recuperar informações sobre espécies nativas da 
            Mata Atlântica, e foi desenvolvido a partir de uma lista de espécies arbóreas nativas 
            elaborada por pesquisadores da Embrapa Agrobiologia. Ele foi concebido e organizado 
            para ser utilizado facilmente por leigos ou especialistas em meio ambiente e agropecuária.
          </Text>
          {'\n'}
          {'\n'}
        </Text>
        <Text style={styles.wordBold}>FUNÇÕES DO APP{'\n'}</Text>

        <Text>
          {'\n'}
          <Text style={styles.wordBold}>CATÁLOGO:</Text>
          Exibe todas as espécies já catalogadas, em ordem alfabética,
          respeitando as espécies já favoritadas. No topo da lista de espécies,
          há um campo onde o usuário pode digitar e fazer buscas mais
          específicas. Faz buscas aproximadas levando em consideração o nome
          popular ou o nome científico das espécies arbóreas. Aqui também é
          possível ativar e desativar filtros para consultas mais específicas
          que consideram informações como estados do país onde as espécies
          ocorrem e em quais tipos de vegetação, informações sobre a condição de
          drenagem do solo em que as espécies ocorrem preferencialmente, bem
          como em que profundidade, textura e fertilidade do solo,
          características ecológicas e taxa de crescimento das espécies, além de
          informações sobre possíveis usos e o grau de ameaça de extinção a que
          as espécies estão submetidas. O usuário poderá explorar mais
          informações da espécie ao clicar no card que a representa, além de
          poder salvar/favoritar a espécie para consultas posteriores ou
          compartilhar a espécie por Whatsapp.{' '}
        </Text>

        <Text>
          {'\n'}
          <Text style={styles.wordBold}>TUTORIAL: </Text>
          Apresenta esse conteúdo explicando as funções das abas do aplicativo.
          Ou seja, explica e ensina ao usuário todas as funções do aplicativo.
        </Text>

        <Text>
          {'\n'}
          <Text style={styles.wordBold}>SOBRE: </Text>
          Apresenta informações sobre o projeto, a equipe desenvolvedora a
          Instituição UFRRJ e a Embrapa Agrobiologia. Este item contém todos os
          nomes dos envolvidos no desenvolvimento do app e os respectivos contatos,
          assim como contém os contatos para as organizações EMBRAPA e PET-SI.
        </Text>


        <Text>
          {'\n'}
          <Text style={styles.wordBold}>CARD:</Text>
          Exibe os detalhes da espécie e dispõe de um botão de download. Quando
          disponível, o botão baixa o PDF do capítulo do livro 'Espécies
          Arbóreas Brasileiras', que contém mais detalhes e fotos sobre a
          espécie.
          {'\n'}
          {'\n'}
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image
            style={{ width: '22%', height: 113, marginRight: '1%' }}
            resizeMode="contain"
            source={require('../assets/PET_SI_Logo_10anos.png')}
          />
          <Image
            style={{ width: '20%', height: 100, marginRight: '1%' }}
            resizeMode="contain"
            source={require('../assets/tecnologia_embrapa.png')}
          />

          <Image
            style={{ width: '20%', height: 100 }}
            resizeMode="contain"
            source={require('../assets/ic_ufrrj_color.png')}
          />
        </View>

        <Text>
          {'\n'}
          {'\n'}
        </Text>
      </Scroller>
    </Container>
  );
}
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const HeaderArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderTitle = styled.Text`
  width: 250px;
  font-size: 23px;
  font-weight: bold;
  color: #01791a;
`;

export const styles = StyleSheet.create({

  wordBold: {
    fontWeight: 'bold',
    color: 'black',
  },

});

export default TutorialScreen;
