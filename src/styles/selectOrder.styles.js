import { StyleSheet } from 'react-native';

export const styleSelectOrder = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        width: "100%",
        height: "20%",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    status: {
        fontSize: 20,
    },
    time: {
        fontSize: 13,
        color: '#308D34'
    },
    total: {
        fontSize: 17,
        marginTop: 20,
    },
    body: {
        width: "100%",
        height: "80%",
        alignItems: 'center',
        justifyContent: 'center',
    },
     card: {
        width: 350,
        flex: 1,
        margin: 30,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
    },
    textRes: {
        fontSize: 16,
        color: "#797979",
        marginLeft: 100,
    },
    cont: {
        width: "80%",
        height: 30,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    btn: {
        width: 300,
        height: 50,
        margin: 30,
        borderRadius: 25,
        backgroundColor: '#F2E14B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnDes: {
        width: 300,
        height: 50,
        margin: 30,
        borderRadius: 25,
        backgroundColor: '#9A9A9A',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });