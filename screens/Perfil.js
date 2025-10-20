import { View, Text, Image, ImageBackground, TextInput, Button, Pressable, TouchableOpacity} from 'react-native';
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
            <Text style={styles.titulo}>Usuário</Text>
            <TextInput style={styles.input} placeholder="Nome" />
            <TextInput style={styles.input} placeholder="E-mail" />
            <TextInput style={styles.input} placeholder="Endereço" />
            <TextInput style={styles.input} placeholder="Telefone" />
               <TouchableOpacity
                           title="Salvar"
                           onPress={ () => alert('Dados salvos com sucesso!') }
                         >
                           <Text style={styles.botaoComprar}>Salvar</Text>
                         </TouchableOpacity>
        </View>
        </ImageBackground>
    );

}