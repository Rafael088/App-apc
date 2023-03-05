import { StyleSheet } from 'react-native';

export const styleCard = StyleSheet.create({
    container: {
        width: 370,
        height: 200,
        margin: 30,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.4,
        shadowRadius: 0,
        elevation: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    top: {
        width: "100%",
        height: "70%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    topLeft: {
        width: "50%",
        height: "100%",
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    topLeftText: {
        marginLeft: 22,
        fontSize: 15,
    },
    topLeftTextGre: {
        marginLeft: 22,
        color: '#308D34',
        fontSize: 13,
    },
    topRigth: {
        width: "50%",
        height: "100%",
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
    },
    topRigthMes: {
        width: "100%",
        height: "30%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topRigthMesCont: {
        width: 30,
        height: 30,
        marginLeft: 10,
        borderRadius: 100,
        backgroundColor: '#10BCE2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rec: {
        width: "100%",
        height: "30%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    recCont: {
        width: 30,
        height: 30,
        marginRight: 10,
        borderRadius: 100,
        backgroundColor: '#10BCE2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bot: {
        width: "100%",
        height: "30%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    textBot: {
        marginRight: 20,
        color: '#797979'
    },
  });