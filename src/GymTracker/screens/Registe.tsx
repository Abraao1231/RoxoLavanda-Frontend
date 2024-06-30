import React, {useState} from 'react';
import { StatusBar, setStatusBarHidden } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import colors from 'tailwindcss/colors';
import { BackButton } from "../components/BackButton";
import { EnvelopeSimple, EyeSlash, LockKey} from "phosphor-react-native";
import { LockSimple} from "phosphor-react-native";
import{ IdentificationCard } from "phosphor-react-native";
import { At } from "phosphor-react-native";
import { Eye } from "phosphor-react-native";
import { EjectSimple } from "phosphor-react-native";
import { CheckBox } from "../components/CheckBox";
import {z  } from 'zod';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//dividir layout com flex
export default function Cadastro() {


  const {navigate} = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmesenha, setConfirmesenha] = useState('');
  const [viewPass, setViewPass] = useState(true)
  const [viewConfirmPass, setViewConfirmPass] = useState(true)
  

  const cadastro = () => {
    try {
      // if (email.trim() !== confirmesenha.trim())
      //   Alert.alert("Senhas diferentes")
  
      const validator = z.object({
        "userName": z.string().min(3, {message: "O nome de usuario deve ter ao menos 3 digitos"}),
        "email": z.string().email({message: "Email invalido"}),
        "password": z.string().min(5, {message: "A senha deve ter no minimo 5 caracteres"}),
      })
      
       const  data = {
        "userName": nome,
        "email": email,
        "password": senha,
       }  
       const isValidate = validator.parse(data)
       navigate("CompletePerfil", {dadosUser: data})
    } catch (error) {
        const erro = JSON.parse(error.message)[0].message
        Alert.alert(erro)
       }
    
  }
//console.log(senha, confirmesenha)
  return (
    <View className="h-full w-full bg-zinc-900 items-center">
      <ScrollView>
      <View className="pt-11 pl-7">
        <BackButton size={36}/>
      </View>
      <View className="top-[-43] left-[208]">
          <Image className=" h-11 w-11"
          source={require('../assets/logoNova.png')}/>
          <Text className=" w-full font-bold pr-4 text-white left-11 top-[-30]"
          numberOfLines={1}
          >etapa 1 de 3</Text>
      </View>
      <View style={styles.criar} className='top-[-31]'>
        <Text className="font-bold mt-[10px] mb-1 text-white"
        style={{fontSize:34}}
        >Criar conta</Text>
        <Text className="w-[270] top-[-5] text-[#A1A1AA] mb-8"
        style={{fontSize:19}}
        numberOfLines={2}
        >Cadastre-se para ter acesso ao
        app 
        </Text>
      </View>
      <View style={styles.textInput}> 
        <View className='h-[65px] px-4 flex-row w-[90%] rounded-xl bg-[#27272A] items-center mb-[26px] mt-[-39]'>
          <IdentificationCard size={30} color="white"/>
          <TextInput 
            className='h-[65px] w-[90%] pl-2 text-[#A1A1AA]'
            placeholder='Nome'
            placeholderTextColor='#A1A1AA' 
            onChangeText={text=>setNome(text)}
          />
        </View>
        <View className='h-[65px] px-4 flex-row w-[90%] rounded-xl bg-[#27272A] items-center mb-[26px]'>
          <EnvelopeSimple size={30} color='white'/>
          <TextInput className=' h-[65px] w-[90%] pl-2 text-[#A1A1AA]'
          placeholder='E-mail'
          placeholderTextColor='#A1A1AA' 
          onChangeText={text=>setEmail(text)}
          />
        </View>
        <View className='h-[65px] px-4 flex-row w-[90%] rounded-xl bg-[#27272A] items-center mb-[26px]'>
          <LockKey size={30} color='white'/>
          <TextInput className='h-[65px] w-[90%] pl-2 text-[#A1A1AA]'
          secureTextEntry={viewPass}
          placeholder='Senha' 
          placeholderTextColor='#A1A1AA' 
          onChangeText={text=>setSenha(text)} 
          />
          <TouchableOpacity className='right-9' onPress={() => setViewPass(prevState => !prevState)}>
            {
              viewPass ? <Eye size={30} color='white'/> : <EyeSlash size={30} color='white'/> 
            }
          </TouchableOpacity>
        </View>
        <View className='h-[65px] px-4 flex-row w-[90%] rounded-xl bg-[#27272A] items-center'>
          <LockKey size={30} color='white'/>
          <TextInput className='h-[65px] w-[90%] pl-2 text-[#A1A1AA]'
          secureTextEntry={viewConfirmPass} 
          placeholder='Confirme a senha' 
          placeholderTextColor='#A1A1AA' 
          onChangeText={text=>setConfirmesenha(text)}
          />
          <TouchableOpacity className='right-9'
            onPress={() => setViewConfirmPass(prevState => !prevState)}
          >
            {
              viewConfirmPass ? <Eye size={30} color='white'/> : <EyeSlash size={30} color='white'/> 
            }
            
          </TouchableOpacity>
        </View>
        
          
      </View>
      </ScrollView>
        <TouchableOpacity className='absolute bottom-8' style={styles.btnCadastro} onPress={()=>cadastro()}>
            <Text style={{color:'#FFFFFF',textAlign:'center', fontWeight: 'bold', fontSize:18}}>Continuar</Text>
          </TouchableOpacity> 
        
      </View>

  );
}

const styles = StyleSheet.create({
  textInput:{
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    paddingStart: '2%',
    paddingEnd: '2%',
    backgroundColor:'#18181B',
    marginTop:-17,
    flex: 4,
  },
  btnCadastro:{
    width: '90%',
    height:65,
    backgroundColor:'#6D28D9',
    borderRadius:10,
    justifyContent:'center'
  },
  criar:{
    flex: 1,
    backgroundColor: '#18181B',
    paddingStart: '8%',
    paddingEnd: '6%'
  },
});