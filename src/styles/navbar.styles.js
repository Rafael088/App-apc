import { StyleSheet } from 'react-native';

export const styleNavBar = StyleSheet.create({
    container: {
        width: '100%',
        height: '7%',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    btn: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: '#F2E14B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn2: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });