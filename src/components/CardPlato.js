import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { styleSelectOrder } from "../styles/selectOrder.styles";
function CardPlato({data}) {
    return ( 
        <View style={styleSelectOrder.card}>
            <View style={styleSelectOrder.cont}>
                <Text style={styleSelectOrder.text}>
                    Plato:
                </Text>
                <Text style={styleSelectOrder.textRes}>
                    {data.Plato}
                </Text>
            </View>
            <View style={styleSelectOrder.cont}>
                <Text style={styleSelectOrder.text}>
                    Sopa:
                </Text>
                <Text style={styleSelectOrder.textRes}>
                    {data.Sopa}
                </Text>
            </View>
            <View style={styleSelectOrder.cont}>
                <Text style={styleSelectOrder.text}>
                    Arroz:
                </Text>
                <Text style={styleSelectOrder.textRes}>
                    {data.Arroz}
                </Text>
            </View>
            <View style={styleSelectOrder.cont}>
                <Text style={styleSelectOrder.text}>
                    Jugo:
                </Text>
                <Text style={styleSelectOrder.textRes}>
                    {data.Jugo}
                </Text>
            </View>
            <View style={styleSelectOrder.cont}>
                <Text style={styleSelectOrder.text}>
                    Tipo:
                </Text>
                <Text style={styleSelectOrder.textRes}>
                    {data.tipo}
                </Text>
            </View>
            <View style={styleSelectOrder.cont}>
                <Text style={styleSelectOrder.text}>
                    Precio:
                </Text>
                <Text style={styleSelectOrder.textRes}>
                    ${data.price}
                </Text>
            </View>
            {data.status?
                <TouchableOpacity style={styleSelectOrder.btnDes}>
                    <Text>
                        Deshacer
                    </Text>
                </TouchableOpacity>:
                <TouchableOpacity style={styleSelectOrder.btn}>
                    <Text>
                        Marcar como Entregada
                    </Text>
                </TouchableOpacity>
            }
        </View>
     );
}

export default CardPlato;