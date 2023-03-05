import { View, FlatList, Text, RefreshControl   } from "react-native";
import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from "../hooks/AuthContext";
import NavBar from "../components/NavBar";
import { styleHome } from "../styles/home.styles";
import Header from "../components/Header.js";
import CardOrder from "../components/CardOrder";
function Home() {
    
    const {authU, setAuth } = useContext(AuthContext)
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    useEffect(() => {
      conectDb()
    }, [])
    async function conectDb() {
        setRefreshing(true);
        let url = 'http://192.168.1.12:5000/order'
        await fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.message === "order succes geting") {
                setData(data.orders)
                setRefreshing(false);
            }
            })
        .catch(err => console.log(err))

    }

    return ( 
        <View style={styleHome.container}>
            <Header text="Ordenes Activas" />
            <View style={styleHome.body}>
                    <FlatList
                    data={data}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <CardOrder data={item}/>
                    )}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={conectDb} />
                      }
                    />
            </View>
            <NavBar/>
        </View>
     );
}

export default Home;