import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ImageBackground, Image, TouchableOpacity, Button, Pressable } from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();

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
      id: 3,
      nome: 'Rilakkuma e Korilakkuma',
      preco: 'R$ 120,90',
      tamanho: 'Médio',
      icone: require('../assets/3.jpg'),
      descricao: 'A linha Rilakkuma é conhecida por seus personagens relaxados e suas representações fofas de vida cotidiana, com um apelo encantador para aqueles que gostam de colecionáveis de pelúcia.',
      frete: 'Frete: R$ 19,90'
    },
      {
      id: 4,
      nome: 'Kiiroitori de peixinho',
      preco: 'R$ 99,90',
      tamanho: 'Grande',
      icone: require('../assets/4.jpg'),
      descricao: 'Kiiroitori é um personagem da linha Rilakkuma, conhecido por sua aparência adorável de passarinho amarelo. Ele é frequentemente visto como o amigo leal de Rilakkuma e traz um toque de fofura e diversão para a coleção.',
      frete: 'Frete: R$ 19,90'
    },
      {
      id: 5,
      nome: 'Tsum Tsum',
      preco: 'R$ 29,90',
      tamanho: 'Pequeno',
      icone: require('../assets/5.jpg'),
      descricao: 'Os Tsum Tsum são personagens empilháveis e adoráveis, inspirados em personagens da Disney. Eles são conhecidos por suas formas fofas e suas expressões encantadoras. Os Tsum Tsum são perfeitos para colecionar e brincar, trazendo um toque de magia e diversão para o mundo dos brinquedos.',
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
      <Text style={styles.titulo}>Brinquedos & Sonhos</Text>
      
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
              <View style={styles.lugarBotao}>
              <TouchableOpacity
                title="Comprar"
                onPress={ () => navigation.navigate('Carrinho') }
              >
                
                <Text style={styles.botaoComprar}>Comprar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                title="Ver mais"
                onPress={ () => alert(item.descricao + '\n' + item.frete) }
              >
                <Text style={styles.botaoComprar}>Ver mais</Text>
              </TouchableOpacity>
              </View>
            </View>

          </TouchableOpacity>

        }
      />

    </ImageBackground>
  );
}
