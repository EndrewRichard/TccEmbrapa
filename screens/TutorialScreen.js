import React from 'react';
import styled from 'styled-components/native';
import { View, Text, Image, StyleSheet } from 'react-native'


const TutorialScreen = () => {
  // Conteúdo do componente tutorial
  return (
<Container>
            <Scroller>
           <Text><Text style = {styles.wordBold}>Restaura </Text>
                 É um aplicativo movel que permite recuperar informações sobre espécies nativas da Mata Atlântica. Seu intuito é ser facilmente utilizado por qualquer pessoa.
                 Ele foi concebido e organizado para ser utilizado por leigos ou especialistas em Agropecuaria. Esta aba apresenta uam breve explicação das funcoes contidas no mesmo.
                 {'\n'}{'\n'}
            </Text>
            <Text style = {styles.wordBold}>FUNÇÕES DO APP{'\n'}</Text>


            <Text>{'\n'}
                 <Text style = {styles.wordBold}>CATALOGO:{'\n'}</Text>
                 Exibe todas as expecies ja catalogadas, em ordem alfabetica e respeitando as especies ja  favoritadas, no topo da lista de especies tem um campo onde o usuario pode digitar e fazer buscas mais especificas.
                  Faz buscas aproximadas elvando em consideração o nome popular ou a especie das plantas, aqui tambem é possivel ativar e desativar filtros para consultas mais especificas que consideram coisas como: Biomas, uso economico, ocorrencias e tipos de solos.
                   O Usuario poderá explorar mais informaçoes da especie ao clicar no card que representa a mesma, além de poder salvar/favoritar para consultas posteriores ou compartilhalá por Whatsapp</Text>

            <Text>{'\n'}
               <Text style = {styles.wordBold}>SOBRE: </Text>
                Apresenta informações sobre o projeto, a equipe desenvolvedora a Intituição UFRRJ e a EMBRAPA.
                Nela contem todos os nomes envolvidos no desenvolvimento do app, e os contatos do mesmo, assim como tem tambem contatos para as organizaçoes EMBRAPA e PET-SI.
                        </Text>
            <Text>{'\n'}
               <Text style = {styles.wordBold}>TUTORIAL: </Text>
               
                Apresenta esse conteudo explicando as funçoes das abas do aplicativo. Ou seja, Explica e ensina ao usuario todas as funções do aplicativo.
                {'\n'}{'\n'}</Text>
                


         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
         <Image 
            style={{ width: '20%', height: 100, marginRight: '1%' }}
            resizeMode={'contain'}
            source={require('../assets/ic_pet_si.png')}
          /> 
          <Image 
            style={{ width: '20%', height: 100, marginRight: '1%' }}
            resizeMode={'contain'}
            source={require('../assets/tecnologia_embrapa.png')}
          />         

          <Image 
            style={{ width: '20%', height: 100 }}
            resizeMode={'contain'}
            source={require('../assets/ic_ufrrj_color.png')}
          /> 
        </View>
            

        <Text>{'\n'}{'\n'}</Text>



            </Scroller>
        </Container>
  );
};

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

export const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
      marginTop: 100,
      padding: 20
   },
   text: {
      color: '#41cdf4',
   },
   capitalLetter: {
      color: 'black',
      fontSize: 20
   },
   wordBold: {
      fontWeight: 'bold',
      color: 'black'
   },
   italicText: {
      color: 'black',
      fontStyle: 'italic'
   },
   hyperlinkStyle: {
      color: '#002B7F',
    },
   textShadow: {
      textShadowColor: 'black',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius : 5
   }
})

export default TutorialScreen;