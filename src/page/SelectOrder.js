import { Text, View, FlatList } from "react-native";
import CardPlato from "../components/CardPlato";
import { styleSelectOrder } from "../styles/selectOrder.styles";
import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from "../hooks/AuthContext";
import moment from 'moment';
function SelectOrder() {
    
    const {selectOrder } = useContext(AuthContext)
    const [price, setPrice] = useState(0);
    const [timeLast, setTimeLast] = useState(0);
    useEffect(() => {
        getTime()
        getPrice()
      }, [])
    function getTime() {
        // Obtenemos la fecha del pedido
        const fechaPedido = moment(selectOrder.createDate)

        // Obtenemos la fecha actual
        const fechaActual = moment(Date.now())

        // Calculamos la diferencia de tiempo en minutos
        setTimeLast(fechaActual.diff(fechaPedido, 'minutes'))
    }
    function getPrice() {
        let pri = 0
        selectOrder.listProducts.forEach(element => {
            pri = element.price + pri
        });
        setPrice(pri)
    }
    return ( 
        <View style={styleSelectOrder.container}>
            <View style={styleSelectOrder.header}>
                <Text style={styleSelectOrder.status}>
                    Estado: {selectOrder.state}
                </Text>
                <Text style={styleSelectOrder.time}>
                    Hace {timeLast} Minutos
                </Text>
                <Text style={styleSelectOrder.total}>
                    {selectOrder.listProducts.length} Platos en total
                </Text>
                <Text style={styleSelectOrder.total}>
                    ${price} Precio Total
                </Text>
            </View>
            <View style={styleSelectOrder.body}>
                <FlatList
                    data={selectOrder.listProducts}
                    keyExtractor={(item) => Math.random()}
                    renderItem={({ item }) => (
                        <CardPlato data={item}/>
                    )}
                    />
            </View>
        </View>
     );
}

export default SelectOrder;