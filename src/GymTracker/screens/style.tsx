import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: '#09090B',
        alignItems:'center',
    },
    titulo: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    teste: {
        backgroundColor: '#09090B',
        alignItems: 'center',
        paddingBottom: 100,
    },
    teste2: {
        backgroundColor: '#09090B',
        alignItems: 'center',
        paddingBottom: 20,
    },
    row: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 65,
        width: 355,
        backgroundColor: '#27272A',
        borderRadius: 10,
        marginBottom: 18,
        paddingLeft: 12,
        paddingRight: 12,
    },
    rowLabel: {
        fontSize: 16,
        fontWeight: '700',
        color: '#D4D4D8',
    },
    rowValue: {
        position: 'absolute',
        right: 50,
        fontSize: 16,
        fontWeight: '600',
        color: '#A1A1AA',
    },
    dados: {

        flexDirection: 'column',
    },
    BackButton: {
        backgroundColor:'#09090B',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    rowSpacer: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },

   });

export default styles