import { View, Text, Image, ImageBackground} from 'react-native';
import styles from '../styles';

export default function Perfil(){

    return (
         <ImageBackground 
              resizeMode='cover' 
              source={require('../assets/brinquedo.jpg')} 
              style={styles.container}
            >
        <View style={styles.container}>
             <Image source={require('../assets/user.jpeg')} style={styles.userFoto} />
            <Text style={styles.titulo}>Nome de Usuário</Text>
            <Text></Text>
        </View>
        </ImageBackground>
    );

}