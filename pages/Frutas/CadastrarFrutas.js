import React, {useState} from "react";
import { Text,View,Stylesheet,Alert,TouchableOpacity, TextInput } from 'react-native';
import {salvarNovaFruta} from './ModelFrutas';

export default function CadastrarFruta({navigation}){
    const [idp,setIdp] = useState('');
    const [frutap,setFrutap] = useState('');
    const [valorp,setValorp] = useState('');
    const [fotop,setFotop] = useState('');

   async function cadastro(){
        const resultado = await salvarNovaFruta(idp,frutap,valorp,fotop);
        if(resultado == 'Sucesso'){
            Alert.alert('Fruta cadastrada com Sucesso!!!');
            navigation.goBack();
        }else{
            Alert.alert('Erro ao cadastrar a Fruta ');
        }
    }

    return(
        <View style={estilo.container}>
            <TextInput
                value={idp}
                placeholder="Digite o código da Fruta"
                style={estilo.textInputTodos}
                onChangeText={setIdp}
            />
            <TextInput
                value={Frutap}
                placeholder="Digite o nome da Fruta"
                style={estilo.textInputTodos}
                onChangeText={setFrutap}
            />
            <TextInput
                value={valorp}
                placeholder="Digite o valor da Fruta"
                style={estilo.textInputTodos}
                onChangeText={setValorp}
            /> 
            <TextInput
                value={Fotop}
                placeholder="Digite o link da Fruta"
                style={estilo.textInputTodos}
                onChangeText={setFotop}
            /> 
            
            <TouchableOpacity style={estilo.botaoCadastrar} onPress={cadastro}>
                <Text style={estilo.textBotaoCadastrar}>Cadastrar</Text>
            </TouchableOpacity>

        </View>
    );
}

const estilo = Stylesheet.create({
    container:{
        flex: 1,
        backgroundColor: '#e9c46a',
        paddingTop:50
    },
    botaoCadastrar:{
        backgroundColor:'',
        margin: 15,
        padding: 5,
        borderRadius: 10,
    },
    textInputTodos:{
        fontSize: 18
    },
})