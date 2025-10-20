import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ImageBackground, Image, TouchableOpacity, Button, Pressable } from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';
export default function Finalizar() {
   const lista = [
    {
      id: 1,
      nome: 'Sylvanian Families- Flora Baby Rabbit',
      preco: 'R$ 59,90',
      tamanho: 'Pequeno',
      icone: require('../assets/1.jpg'),
      descricao: 'A Flora Baby Rabbit da linha Sylvanian Families é uma personagem adorável e charmosa, representando um coelhinho fofinho com traços delicados. Flora é uma coelha bebê, com uma pelagem branca suave e orelhas grandes e fofas. Ela tem olhos brilhantes e um olhar doce, típico de muitos personagens dessa coleção.',
      frete: 'Frete: R$ 19,90'
    },
      {
      id: 2,
      nome: 'Sylvanian Families- Strawberry Babies',
      preco: 'R$ 59,90',
      tamanho: 'Pequeno',
      icone: require('../assets/2.jpg'),
      descricao: 'Os Strawberry Babies da linha Sylvanian Families são um grupo adorável de bebês animais, cada um com seu próprio charme e personalidade. Eles são conhecidos por suas pelagens macias e suas expressões fofas. Esses bebês são perfeitos para brincar e colecionar, trazendo um toque de doçura e diversão para o mundo dos Sylvanian Families.',
      frete: 'Frete: R$ 19,90'
    },
      {
      id: 6,
      nome: 'Popplio de pelúcia',
      preco: 'R$ 59,90',
      tamanho: 'Médio',
      icone: require('../assets/6.jpg'),
      descricao: 'Popplio é um Pokémon da linha Alola, conhecido por sua aparência adorável de focinha azul. Ele é frequentemente visto como um personagem brincalhão e amigável, trazendo um toque de fofura e diversão para a coleção.',
      frete: 'Frete: R$ 19,90'
    },
      ]
       return (
    <ImageBackground source={require('../assets/brinquedo.jpg')} resizeMode='cover' style={styles.container}>
      <Text style={styles.titulo}>Carrinho</Text>
      
      <FlatList 
        data={lista}
        renderItem={ ({item}) => 

          <TouchableOpacity style={styles.viewItem} >
            <Image source={item.icone} style={styles.icone} />

            <View>

              <Text style={styles.textoItem}>
                <Text style={styles.textoBold}></Text> {item.nome} 
              </Text>

              <Text style={styles.textoItem}>
                <Text style={styles.textoBold}></Text> {item.preco}
              </Text>

              <Text style={styles.textoItem}>
                <Text style={styles.textoBold}></Text> {item.tamanho} 
              </Text>
        
            </View>

          </TouchableOpacity>

        }
      />
            <View style={{ justifyContent: 'center', marginBottom: 100 }}>
            
              <TouchableOpacity
                title="Finalizar Compra"
                onPress={ () => alert("Pedido finalizado!!!") }
              >
                <Text style={{ width: 200, textAlign: 'center', padding: 12, backgroundColor: '#3b77d1ff', color: 'white', borderRadius: 60 }}>Finalizar Compra</Text>
              </TouchableOpacity>
              </View>

    </ImageBackground>
  );
}