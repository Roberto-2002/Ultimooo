import React, {useState,useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import Api from '../Api';


export default function ListaFrutas(){

const[dadosFruta,setdadosFruta] = useState([]);

async function getFrutas(){
  try{
    const resultado = await Api.get(`/hortfruit`);
    return resultado.data
  }catch(error){
    console.log(error)
    return []
  }
}

useEffect(() => {
  Api.get(`/`).then(response => {
    setNomeFruta(response.data);
  });
},[]);

return (
  <View style={estilo.container}>

    <Text style={estilo.titulo}>Lista de Frutas</Text>

    <TouchableOpacity style={estilo.botaoCadFruta} onPress={() => NavigationPreloadManager.navigate('Cadastrar')}>
      <Text style={estilo.botaoTextoCadFruta}>Cadastrar Fruta</Text>
    </TouchableOpacity>
    <StatusBar style="auto"/>

    <FlatList
      data={dadosFrutas}
      keyExtractor={dadosFrutas => dadosFrutas.id}
      renderItem={({ item }) =>
        <TouchableOpacity>
          <View style={estilo.grupoFrutas}>

            <Text style={estilo.textoBotaoFruta}>{item.fruta}</Text>
            <Text style={estilo.textoBotaoValor}>{item.valor}</Text>

          </View>
        </TouchableOpacity>

      }
    />

    <StatusBar style="auto" />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9c46a',
  },
  titulo: {
    fontSize: 30,
    color: "#2a9d8f",
    textAlign: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },
  grupoFrutas: {
    backgroundColor: '#2a9d8f',
    margin: 15,
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotaoFruta: {
    fontSize: 20
  },
  textoBotaoValor: {
    fontSize: 20
  },
  botaoCadFruta:{
    backgroundColor: '#2a9d8f',
    margin: 15,
    padding: 5,
    borderRadius: 10,
  },
  botaoTextoCadFruta:{
    fontSize: 18
  }
});