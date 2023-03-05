import { View } from "react-native";
import React, { useState, useContext } from 'react';
import { AuthContext } from "../hooks/AuthContext";
import NavBar from "../components/NavBar";
import { styleHome } from "../styles/home.styles";

import Header from "../components/Header.js";
function Orders() {
    
    const {authU, setAuth } = useContext(AuthContext)
    
    return ( 
        <View style={styleHome.container}>
            
            <Header text="Tomar Pedido" />
            <View style={styleHome.body}>

            </View>
            <NavBar/>
        </View>
     );
}

export default Orders;