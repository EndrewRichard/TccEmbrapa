import React from 'react';
import styled from 'styled-components/native';
import { View, Text, Image, StyleSheet } from 'react-native'


const TutorialScreen = () => {
  // Conteúdo do componente tutorial
  return (
<Container>
            <Scroller>
           <Text><Text style = {styles.wordBold}>Restaura </Text>
                 é um aplicativo movel que permite recuperar informações sobre espécies nativas da Mata Atlântica. Seu intuito é ser facilmente utilizado por qualquer pessoa.
                 Ele foi concebido e organizado para ser utilizado por leigos ou especialistas em Agropecuaria. Esta aba apresenta uam breve explicação das funcoes contidas no mesmo.
                 {'\n'}{'\n'}
            </Text>
            <Text style = {styles.wordBold}>FUNÇÕES DO APP{'\n'}</Text>


            <Text>{'\n'}
                 <Text style = {styles.wordBold}>CATALOGO:{'\n'}</Text>
                  Faz buscas aproximadas elvando em consideração o nome popular ou a especie das plantas, aqui tambem é possivel ativar e desativar filtros para consultas mais especificas que consideram coisas como: Biomas, uso economico, ocorrencias e tipos de solos.
                   O Usuario poderá explorar mais informaçoes da especie ao clicar no card que representa a mesma, al´me de poder salvar/favoritar para consultas posteriores ou compartilhalá por Whatsapp</Text>
            <Text>{'\n'}
               <Text style = {styles.wordBold}>ESTADO: </Text>
               Faz buscas considerando a distribuição por estados da federação Brasileira, apresenta tambem
                todas as funçoes de subconsultas assim como a busca por catalogo. 
                </Text>
            <Text>{'\n'}
               <Text style = {styles.wordBold}>FAVORITOS: </Text>
               lista todas as especies marcadas cmo favoritas no APP.
            </Text>
            <Text>{'\n'}
               <Text style = {styles.wordBold}>TUTORIAL: </Text>
                Apresenta esse conteudo explicando as funçoes das abas do aplicativo
                </Text>
            <Text>{'\n'}
               <Text style = {styles.wordBold}>SoBRE: </Text>
                Apresenta informações sobre o projeto, a equipe desenvolvedora a Intituição UFRRJ e a EMBRAPA.
                        </Text>

            <Image 
                style={{width: '100%', height: 100}}
                resizeMode={'contain'}
                source={require('../assets/tecnologia_embrapa.png')}
            />         
            
            <Image 
                style={{width: '100%', height: 100}}
                resizeMode={'contain'}
                source={require('../assets/ic_pet_si.png')}
            /> 
            <Image 
                style={{width: '100%', height: 100}}
                resizeMode={'contain'}
                source={require('../assets/ic_ufrrj_color.png')}
            /> 
            





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
      color: 'blue',
    },
   textShadow: {
      textShadowColor: 'black',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius : 5
   }
})

export default TutorialScreen;