import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: '#09090B',
        alignItems:'center',
    },
    titulo: {
        padding: 50,
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
    },
    row: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 65,
        width: 355,
        borderWidth: .3,
        borderColor: '#6D28D9',
        borderRadius: 10,
        marginBottom: 18,
        paddingLeft: 12,
        paddingRight: 12,
        
    },
    nome: {
        color: 'white',
        fontWeight: 'bold',
        left: 20,
    },
    paises: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radio: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderColor: '#e8e8e8',
        height: 54,
        paddingRight: 24,
      },
      radioWrapper: {
        paddingLeft: 24,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      radioImage: {
        width: 30,
        height: 30,
        marginRight: 12,
        alignItems: 'center',
        justifyContent: 'center',
      },
    radioLabel: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222222',
        marginBottom: 2,
      },
      radioCheck: {
        width: 22,
        height: 22,
        borderRadius: 9999,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        borderWidth: 1,
        borderColor: '#999B9A',
      },
      radioCheckActive: {
        borderColor: '#007bff',
        backgroundColor: '#007bff',
      },
});

export default styles