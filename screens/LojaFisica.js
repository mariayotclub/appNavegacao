import { View, Text, Image, ImageBackground } from 'react-native';
import styles from '../styles';
import MapView, { Marker } from 'react-native-maps';

export default function LojaFisica() {
  return (
      <ImageBackground 
                  resizeMode='cover' 
                  source={require('../assets/brinquedo.jpg')} 
                  style={styles.container}
                >

      <Text style={styles.titulo}>Nossas lojas físicas!</Text>

      <MapView 
        style={{ width: '90%', height: '90%' }} 
        region={{
          latitude: -23.5505,  
          longitude: -46.6333,
          latitudeDelta: 30,
          longitudeDelta: 30
        }}
        mapType="hybrid"
      >
        
        <Marker 
          title="Loja Rio de Janeiro"
          description="Rio de Janeiro, RJ"
          coordinate={{
            latitude: -22.9068,
            longitude: -43.1729
          }}
        />
        
        <Marker 
          title="Loja São Paulo"
          description="São Paulo, SP"
          coordinate={{
            latitude: -23.5505,
            longitude: -46.6333
          }}
        />
        
        <Marker 
          title="Loja Salvador"
          description="Salvador, BA"
          coordinate={{
            latitude: -12.9714,
            longitude: -38.5014
          }}
        />
        
        <Marker 
          title="Loja Manaus"
          description="Manaus, AM"
          coordinate={{
            latitude: -3.1190,
            longitude: -60.2128
          }}
        />
        
        <Marker 
          title="Loja Porto Alegre"
          description="Porto Alegre, RS"
          coordinate={{
            latitude: -30.0346,
            longitude: -51.2177
          }}
        />
        
      </MapView>
    </ImageBackground>

  );
}
