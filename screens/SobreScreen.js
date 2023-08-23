import React from 'react';
import styled from 'styled-components/native';
import { View, Text, Image, StyleSheet } from 'react-native'

const SobreScreen = () => {
  // Conteúdo do componente Sobre
  return (
    <Container>
    <Scroller>
    <Text style = {styles.wordBold}>Realização</Text>

    <Image 
        style={{width: '100%', height: 100}}
        resizeMode={'contain'}
        source={require('../assets/tecnologia_embrapa.png')}
    />
    <Text><Text style = {styles.wordBold}>Restaura </Text>
         é um aplicativo movel que permite recuperar informações sobre espécies nativas da Mata Atlântica. Seu intuito é facilmente ser utilizado.
         Ele foi concebido e organizado para ser utilizado por leigos ou especialistas em Agropecuaria.
    </Text>
    <Text>{'\n'}
         As informações fornecidas pelo <Text style = {styles.wordBold}>Restaura </Text> são públicas e podem facilmente
         ser utilizadas por pessoas ou organizações que tenham interesse em contribuir na recuperação desse importante bioma brasileiro.
    </Text>
    <Text>{'\n'}
       O <Text style = {styles.wordBold}>Restaura </Text> tem como objetivo facilitar a difusão de informações sobre as especies vegetais que podem ser utilizadas em projetos de reflorestamento
    </Text>
    <Text>{'\n'}
       A primeira versão do <Text style = {styles.wordBold}>Restaura </Text> foi totalmente concebido, projetado e desenvolvido por uma euqipe multidisciplinar 
       de alunos da <Text style = {styles.wordBold}>Universidade Federal Rural do Rio de Janeiro (UFRRJ) </Text>
       durante as etapas da hackathon Academico da Embrapa. Os desenvolvedores sao membros dos cursos de Sistemas de Informação e Agronomia da universidade e membros do programa
       {' '} 
       <Text 
          style={styles.hyperlinkStyle} 
          onPress={() => { 
             Linking.openURL('https://r1.ufrrj.br/petsi'); 
          }}> 
        PET-SI da UFRRJ.</Text> 
        {'\n'}
        A Equipe de desenvolvimento levava o titulo de Dobereiner, uma homenagem a grande pesquisadora Johanna Dobereiner, que iniciou um programa de pesquisas
         sobre aspectos limitantes da fixação biologia de nitrogenio (FBN), tendo seu nome presente na lista de indicaçoes do premio Nobel.
    </Text>

    <Text  style = {{textAlignVertical: 'center', textAlign: "center"}}>{'\n'}{'\n'}
    <Text style = {styles.wordBold}>Equipe de desenvolvimento 1° versão {'\n'}</Text>
    <Text 
          style={styles.hyperlinkStyle} 
          onPress={() => { 
             Linking.openURL('https://www.linkedin.com'); 
          }}> 
        Filipe Klinger Marques da Lima</Text>
    {'\n'}
    <Text 
          style={styles.hyperlinkStyle} 
          onPress={() => { 
             Linking.openURL('https://www.linkedin.com'); 
          }}> 
        Gabriel Santiago Rizzo</Text>
    {'\n'}
    <Text 
          style={styles.hyperlinkStyle} 
          onPress={() => { 
             Linking.openURL('https://www.linkedin.com'); 
          }}> 
        Pedro Vieira Cruz</Text>
    {'\n'}
    <Text 
          style={styles.hyperlinkStyle} 
          onPress={() => { 
             Linking.openURL('https://www.linkedin.com'); 
          }}> 
        Renan Carvalho Tavora Miranda</Text>
    {'\n'}{'\n'}
    <Text style = {styles.wordBold}>Equipe de desenvolvimento 2° versão {'\n'}</Text>

    <Text 
          style={styles.hyperlinkStyle} 
          onPress={() => { 
             Linking.openURL('https://www.linkedin.com'); 
          }}> 
        Endrew Richard Moraes Batista Ferreira</Text>
    {'\n'}{'\n'}

                
    <Text style = {styles.wordBold}>Padrinho da equipe Dobereiner e do projeto {'\n'}</Text>
    <Text>Dr. Luiz Ferbabdi Duarte de Moraes (EMBRAPA){'\n'}</Text>
        <Text 
        style={styles.hyperlinkStyle} 
        onPress={() => { 
            Linking.openURL('https://www.linkedin.com'); 
        }}> 
        Linkedin   </Text>
        <Text 
        style={styles.hyperlinkStyle} 
        onPress={() => { 
            Linking.openURL('https://www.researchgate4.net/profile/luiz_moraes3'); 
        }}> 
        ReseachGate</Text>
    {'\n'}{'\n'}
    <Text style = {styles.wordBold}>Tutor do grupo PET-SI {'\n'}</Text>
    <Text> Prof. Dr. Sergio Serra (UFRRJ){'\n'}</Text>

    <Text 
    style={styles.hyperlinkStyle} 
    onPress={() => { 
        Linking.openURL('https://www.linkedin.com'); 
    }}> 
    Linkedin   </Text>
    <Text 
    style={styles.hyperlinkStyle} 
    onPress={() => { 
        Linking.openURL('https://www.researchgate.net/profile/Sergio_cruz7'); 
    }}> 
    ReseachGate</Text>
    {'\n'}{'\n'}


        
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
    


    <Text style = {{textAlignVertical: 'center', textAlign: "center"}}>{'\n'}
    <Text style = {styles.wordBold}>Embrapa Agrobiologia {'\n'}{'\n'}</Text> 
    <Text style = {styles.wordBold}>Gustavo Ribeiro Xavier{'\n'} </Text> 
    Chefe Geral da Embrapa Agrobiologia{'\n'}{'\n'}

    <Text style = {styles.wordBold}>Maria Elizabeth Fernandes Correia{'\n'} </Text> 
    Chefe Adjunta de Pesquisa e Desenvolvimento{'\n'}{'\n'}

    <Text style = {styles.wordBold}>Ana Cristina Siwert Garofolo{'\n'} </Text> 
    Chefe Adjunta de Transferencia de Tecnologia{'\n'}{'\n'}

    <Text style = {styles.wordBold}>Joyce Aparecida Marques{'\n'} </Text> 
    Chefe Adjunta de Administração{'\n'}{'\n'}
    </Text>

    <Text>Embrapa Agrobiologia - BR 465, km7, Seropédica, RJ {'\n'}
    Tel:
    <Text 
        style={styles.hyperlinkStyle} 
        onPress={() => { 
            Linking.openURL('tel:+2134411500'); 
        }}>  
        (21) 3441-1500   
    </Text>
     / Fax: (21) 2682-1230 {'\n'}
     CEP: 23891-000{'\n'}
     SITE:  
     <Text 
        style={styles.hyperlinkStyle} 
        onPress={() => { 
            Linking.openURL('www.embrapa.br/agrobiologia'); 
        }}>  
       www.embrapa.br/agrobiologia   
    </Text> {'\n'}
    SAC:  
    <Text 
        style={styles.hyperlinkStyle} 
        onPress={() => { 
            Linking.openURL('wwww.embrapa.br/fale-conosco/sac'); 
        }}>  
        wwww.embrapa.br/fale-conosco/sac
          
    </Text>
        {'\n'}{'\n'}{'\n'}

     </Text> 




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

export default SobreScreen;