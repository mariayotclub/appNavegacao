import { View, Text, Touchable, ImageBackground} from 'react-native';
import styles from '../styles';

export default function Sobre(){

    return (
        <ImageBackground 
              resizeMode='cover' 
              source={require('../assets/brinquedo.jpg')} 
              style={styles.container}
            >
        <View style={styles.container}>
            <Text style={styles.titulo}>Brinquedos & Sonhos - A Magia do Brincar!</Text>
            <Text style={styles.textoSobre}>Na Brinquedos & Sonhos, cada cantinho é pensado para despertar a imaginação e a alegria das crianças! Nossa loja é um verdadeiro paraíso para os pequenos, oferecendo uma vasta seleção de brinquedos que estimulam o aprendizado, a criatividade e o desenvolvimento infantil de forma divertida e segura.

Aqui, você encontra desde brinquedos educativos, como jogos de montar e quebra-cabeças, até os brinquedos mais interativos, como bonecas, carrinhos, e itens para aventuras ao ar livre. Cada produto é cuidadosamente selecionado para garantir qualidade e segurança, para que os pais possam confiar no que oferecem aos seus filhos.

Além disso, nosso espaço é acolhedor, com uma decoração encantadora que transporta as crianças para um mundo mágico de diversão. Temos uma área especial onde os pequenos podem testar alguns brinquedos, garantindo a escolha perfeita para o presente ideal.

Visite-nos e descubra o universo encantado que a Brinquedos & Sonhos criou especialmente para você e sua família!</Text>
        </View>
        </ImageBackground>
    );

}