import { View, Text, ImageBackground } from 'react-native';
import styles from '../styles';

export default function Finalizar(){

    return (
      <ImageBackground 
      resizeMode='cover' 
      source={require('../assets/brinquedo.jpg')} 
      style={styles.container}
    >
        <View style={styles.container}>
            <Text style={styles.titulo}>Finalizar Compra</Text>
            <Text>Tela de Finalização de Compra do App</Text>
        </View>
    </ImageBackground>
    );

}