import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ImageBackground, Image, TouchableOpacity, Button } from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();

      const lista = [
    {
      id: 1,
      nome: 'Sylvanian Families- Flora Baby Rabbit',
      preco: 'R$ 99,90',
      tamanho: 'Pequeno',
      icone: require('../assets/1.jpg'),
      descricao: 'A Flora Baby Rabbit da linha Sylvanian Families é uma personagem adorável e charmosa, representando um coelhinho fofinho com traços delicados. Flora é uma coelha bebê, com uma pelagem branca suave e orelhas grandes e fofas. Ela tem olhos brilhantes e um olhar doce, típico de muitos personagens dessa coleção.',
      frete: 'Frete: R$ 19,90'
    },
      {
      id: 1,
      nome: 'Sylvanian Families- Flora Baby Rabbit',
      preco: 'R$ 120,90',
      tamanho: 'Pequeno',
      icone: require('../assets/2.jpg'),
      descricao: 'A Flora Baby Rabbit da linha Sylvanian Families é uma personagem adorável e charmosa, representando um coelhinho fofinho com traços delicados. Flora é uma coelha bebê, com uma pelagem branca suave e orelhas grandes e fofas. Ela tem olhos brilhantes e um olhar doce, típico de muitos personagens dessa coleção.',
      frete: 'Frete: R$ 19,90'
    },
      {
      id: 1,
      nome: 'Sylvanian Families- Flora Baby Rabbit',
      preco: 'R$ 120,90',
      tamanho: 'Pequeno',
      icone: require('../assets/3.jpg'),
      descricao: 'A Flora Baby Rabbit da linha Sylvanian Families é uma personagem adorável e charmosa, representando um coelhinho fofinho com traços delicados. Flora é uma coelha bebê, com uma pelagem branca suave e orelhas grandes e fofas. Ela tem olhos brilhantes e um olhar doce, típico de muitos personagens dessa coleção.',
      frete: 'Frete: R$ 19,90'
    },
      {
      id: 1,
      nome: 'Sylvanian Families- Flora Baby Rabbit',
      preco: 'R$ 99,90',
      tamanho: 'Pequeno',
      icone: require('../assets/4.jpg'),
      descricao: 'A Flora Baby Rabbit da linha Sylvanian Families é uma personagem adorável e charmosa, representando um coelhinho fofinho com traços delicados. Flora é uma coelha bebê, com uma pelagem branca suave e orelhas grandes e fofas. Ela tem olhos brilhantes e um olhar doce, típico de muitos personagens dessa coleção.',
      frete: 'Frete: R$ 19,90'
    },
      {
      id: 1,
      nome: 'Sylvanian Families- Flora Baby Rabbit',
      preco: 'R$ 99,90',
      tamanho: 'Pequeno',
      icone: require('../assets/5.jpg'),
      descricao: 'A Flora Baby Rabbit da linha Sylvanian Families é uma personagem adorável e charmosa, representando um coelhinho fofinho com traços delicados. Flora é uma coelha bebê, com uma pelagem branca suave e orelhas grandes e fofas. Ela tem olhos brilhantes e um olhar doce, típico de muitos personagens dessa coleção.',
      frete: 'Frete: R$ 19,90'
    },
      {
      id: 1,
      nome: 'Sylvanian Families- Flora Baby Rabbit',
      preco: 'R$ 99,90',
      tamanho: 'Pequeno',
      icone: require('../assets/6.jpg'),
      descricao: 'A Flora Baby Rabbit da linha Sylvanian Families é uma personagem adorável e charmosa, representando um coelhinho fofinho com traços delicados. Flora é uma coelha bebê, com uma pelagem branca suave e orelhas grandes e fofas. Ela tem olhos brilhantes e um olhar doce, típico de muitos personagens dessa coleção.',
      frete: 'Frete: R$ 19,90'
    },
      ]
       return (
    <ImageBackground source={require('../assets/brinquedo.jpg')} resizeMode='cover' style={styles.container}>
      <Text style={styles.titulo}>Brinquedos & Sonhos</Text>
      
      <FlatList 
        data={lista}
        renderItem={ ({item}) => 

          <TouchableOpacity style={styles.viewItem} onPress={ () => alert(item.descricao + '\n' + item.frete) }>
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
              <Button
                title="Comprar"
                onPress={ () => navigation.navigate('Finalizar') }
              />
            </View>

          </TouchableOpacity>

        }
      />

    </ImageBackground>
  );
}
