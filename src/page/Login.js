import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styleLogin } from "../styles/login.styles";
import img from '../../assets/login.png';
import img1 from '../../assets/apc1.png';
import { useNavigation } from '@react-navigation/native'

import {useForm, Controller } from'react-hook-form';
import React, { useState, useContext } from 'react';
import { AuthContext } from "../hooks/AuthContext";

function Login() {
    
    const [fails, setFails] = useState("");
    const navigation = useNavigation();
    const {control, handleSubmit} = useForm();
    const {authU, setAuth } = useContext(AuthContext)


    async function conectDb(db) {
        let url = 'http://192.168.1.12:5000/users/auth'
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(db)
          })
        .then(res => res.json())
        .then(data => {
            if (data.message === "user succes auth ") {
                setAuth(data.user)
                navigation.navigate("HomeScreen")
            }else{
                setFails('Error al Iniciar Sesion')
            }
            })
        .catch(err => console.log(err))
    }
    return ( 
        <View style={styleLogin.container}>
            <View style={styleLogin.top}>
                <Image source={img} style={styleLogin.img}/>
            </View>
            <View style={styleLogin.logo}>
                <Image source={img1} style={styleLogin.imgLogo}/>
                <Text style={styleLogin.title}>Bienvenido A Pura Costa</Text>
            </View>
            <View style={styleLogin.body}>
                <Text style={styleLogin.text}>
                    Usuario:
                </Text>
                <Controller
                    control={control}
                    name="email"
                    rules={{required: true}}
                    render={({field: {value, onChange, onBlur}}) => <TextInput value={value} onChangeText={onChange} onBlur={onBlur} style={styleLogin.input} placeholder=""/>
                    }
                />
                <Text style={styleLogin.text}>
                    Contraseña:
                </Text>
                <Controller
                    control={control}
                    name="password"
                    rules={{required: true}}
                    render={({field: {value, onChange, onBlur}}) => <TextInput value={value} onChangeText={onChange} onBlur={onBlur} style={styleLogin.input} placeholder="" secureTextEntry={true}/>
                    }
                />
                <Text style={styleLogin.fails}>{fails}</Text>
                <View style={styleLogin.btnCont}>
<TouchableOpacity style={styleLogin.button} onPress={handleSubmit(conectDb)}>
                    <Text>
                        Comenzar
                    </Text>
                </TouchableOpacity>
                </View>
                
            </View>
            
        </View>
     );
}

export default Login;