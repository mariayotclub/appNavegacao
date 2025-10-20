import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 20,
    color: '#4668ffff'
  },
  botao: {
    backgroundColor: '#000000ff',
    borderColor: '#000000ff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10
  }, 
  botaoTexto: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 700
  },
  input: {
    padding: 10,
    width: '80%',
    backgroundColor: '#e7e7e7ff',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10
  },
  textoSobre: {
    fontSize: 16,
    margin: 10,
    padding: 20,
    textAlign: 'center',
    color: '#000000ff',
    
  },
  userFoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20
  },
    viewItem: {
    backgroundColor: '#0053cf5d',    
    marginBottom: 15,
    padding: 10,
    borderWidth: 2,
    borderColor: '#002499ff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textoItem: {
    fontSize: 18,
    color: '#fff'
  },
  textoBold: {
    fontWeight: 900
  },
  icone: {
    width: 80,
    height: 80
  }
});