import { View } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { styleCard } from "../styles/cardOrder.styles";
import {  useNavigation } from '@react-navigation/native'
import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';

import { AuthContext } from "../hooks/AuthContext";
function CardOrder({data}) {
    const navigation = useNavigation();
    const [timeLast, setTimeLast] = useState(0);
    const [countEst, setCountEst] = useState(0);
    const [countPar, setCountPar] = useState(0);
    const {setSelectOrder } = useContext(AuthContext)
    function getOrder() {
        setSelectOrder(data)
        navigation.navigate("SelectOrderScreen")
    }
    useEffect(() => {
      getTime()
      getTipe()
    }, [data])
    function getTime() {
        // Obtenemos la fecha del pedido
        const fechaPedido = moment(data.createDate)

        // Obtenemos la fecha actual
        const fechaActual = moment(Date.now())

        // Calculamos la diferencia de tiempo en minutos
        setTimeLast(fechaActual.diff(fechaPedido, 'minutes'))
    }
    function getTipe() {
        let countEst = 0
        let countPar = 0
        data.listProducts.forEach(element => {
            if (element.tipo === "Estudiante") {
                countEst = countEst + 1
            }else{
                countPar = countPar + 1
            }
        });
        setCountPar(countPar)
        setCountEst(countEst)
    }
    return ( 
        <TouchableOpacity style={styleCard.container} onPress={() => getOrder()}>
            <View style={styleCard.top}>
                <View style={styleCard.topLeft}>
                    <Text style={styleCard.topLeftText}>
                        {data.listProducts.length} Platos
                    </Text>
                    <Text style={styleCard.topLeftTextGre}>
                        Hace {timeLast} Minutos
                    </Text>
                </View>
                <View style={styleCard.topRigth}>
                    <View style={styleCard.topRigthMes}>
                        <Text>
                            Mesa
                        </Text>
                        <View style={styleCard.topRigthMesCont}>
                            <Text>
                                {data.numeroMesa}
                            </Text>
                        </View>
                    </View>

                    <View style={styleCard.rec}>
                        <View style={styleCard.recCont}>

                        </View>
                        <Text>
                            {data.state}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styleCard.bot}>
                <Text style={styleCard.textBot}>
                    {countPar} Particulares
                </Text>
                <Text style={styleCard.textBot}>
                    {countEst} Estudiante
                </Text>
            </View>

        </TouchableOpacity>
     );
}

export default CardOrder;