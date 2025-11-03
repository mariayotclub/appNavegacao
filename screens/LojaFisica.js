import { View, Text, Image, ImageBackground, Button, TouchableOpacity } from 'react-native';
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
      <TouchableOpacity  title="Mais Detalhes" onPress={() => alert("📍 Sergipe – Aracaju\nRua das Palmeiras, nº 245, Bairro Atalaia\nAracaju – SE, CEP 49037-000\n\n📍 Rio de Janeiro – Rio de Janeiro\nAvenida Atlântica, nº 1200, Bairro Copacabana\nRio de Janeiro – RJ, CEP 22021-001\n\n📍 São Paulo – São Paulo\nRua Augusta, nº 1500, Bairro Consolação\nSão Paulo – SP, CEP 01305-100\n\n📍 Amazonas – Manaus\nAvenida Djalma Batista, nº 1850, Bairro Chapada\nManaus – AM, CEP 69050-010\n\n📍 Rio Grande do Sul – Porto Alegre\nRua dos Andradas, nº 950, Bairro Centro Histórico\nPorto Alegre – RS, CEP 90020-007")} >
        <Text style={{ width: 150, textAlign: 'center', padding: 12, backgroundColor: '#3b77d1ff', color: 'white', borderRadius: 60 }}>Mais Detalhes</Text>
        </TouchableOpacity>
    </ImageBackground>

  );
}
