import React, {useState} from "react";
import { Text,View,Stylesheet,Alert,TouchableOpacity, TextInput } from 'react-native';
import {alterarFrutas, deletarFrutas} from './ModelFrutas';

export default function AlterarFrutas(){
    const [idp,setIdp] = useState('');
    const [frutap,setFrutap] = useState('');
    const [valorp,setValorp] = useState('');
    const [fotop,setFotop] = useState('');

   async function alterar(){
        const resultado = await alterarFrutas(idp, frutap, valorp, fotop);
        if(resultado == 'Sucesso'){
            Alert.alert('Fruta alterada com Sucesso!!!')
        }else{
            Alert.alert('Erro ao alterar a Fruta ');
        }
    }

    async function deletar(){
        const resultado = await deletarFrutas(idp);
        if (resultado == 'Sucesso') {
            Alert.alert('Fruta deletada com Sucesso!!');
        }else{
            Alert.alert('Erro ao deletar a Fruta');
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
            
            <TouchableOpacity style={estilo.botaoCadastrar} onPress={alterar}>
                <Text style={estilo.textBotaoCadastrar}>Alterar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilo.botaoCadastrar} onPress={deletar}>
                <Text style={estilo.textBotaoCadastrar}>Excluir</Text>
            </TouchableOpacity>
        
        </View>
    );
}

const estilo = Stylesheet.create({
    container:{
        flex: 1,
        backgroundColor: '#e9c46a',
        marginTop:20,
    },
    botaoCadastrar:{
        backgroundColor:'#2a9d8f',
        margin: 15,
        padding: 5,
        borderRadius: 10,
    },
    textInputTodos:{
        fontSize: 18
    },
})