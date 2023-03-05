import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Ionicons, Feather  } from '@expo/vector-icons';
import { styleNavBar } from "../../styles/navbar.styles";
import { useRoute, useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react';

function NavBar() {
    
    const router = useRoute();
    const navigation = useNavigation();
    const [rout, setRout] = useState(1);
    useEffect(() => {
      if (router.name === 'HomeScreen') {
        setRout(1)
      }
      if (router.name === 'OrderScreen') {
        setRout(2)
      }
      if (router.name === 'OptionsScreen') {
        setRout(3)
      }
      
    }, [])
    
    function goTo(go) {
        navigation.navigate(go)
    }

    return ( 
        <View style={styleNavBar.container}>
            <TouchableOpacity style={rout === 1 ?styleNavBar.btn: styleNavBar.btn2} onPress={() => goTo("HomeScreen")}>
                <Ionicons name="ios-home-outline" size={24} color={rout === 1?"white":"black"} />
            </TouchableOpacity>
            <TouchableOpacity style={rout === 2 ?styleNavBar.btn: styleNavBar.btn2} onPress={() => goTo("OrderScreen")}>
                <Feather name="clipboard" size={24} color={rout === 2?"white":"black"}/>
            </TouchableOpacity>
            <TouchableOpacity style={rout === 3 ?styleNavBar.btn: styleNavBar.btn2} onPress={() => goTo("OptionsScreen")}>
                <Feather name="menu" size={24} color={rout === 3?"white":"black"} />
            </TouchableOpacity>
        </View>
     );
}

export default NavBar;