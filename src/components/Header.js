import {View, Text, Image} from 'react-native'
import { styleHeader } from '../styles/header.styles';
import img from '../../assets/apc1.png'
function Header({text}) {
    return ( 
        <View style={styleHeader.container}>
            <Text style={styleHeader.text}>
                {text}
            </Text>
            <Image source={img} />
        </View>
     );
}

export default Header;