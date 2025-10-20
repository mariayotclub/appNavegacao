import { View, Text, ImageBackground } from 'react-native';
import styles from '../styles';

export default function Config(){

    return (
      <ImageBackground 
      resizeMode='cover' 
      source={require('../assets/brinquedo.jpg')} 
      style={styles.container}
    >
        <View style={styles.container}>
            <Text style={styles.titulo}>Configurações</Text>
            <Text>Tela de Configurações do App</Text>
        </View>
    </ImageBackground>
    );

}