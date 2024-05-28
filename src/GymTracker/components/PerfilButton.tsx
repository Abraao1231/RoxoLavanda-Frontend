import { View , TouchableOpacity, Text, StyleSheet} from "react-native";
import { CaretRight } from "phosphor-react-native";
import {PencilSimple} from "phosphor-react-native";
import { ReactNode } from "react";

interface PerfilButtonProps {
    title: string
    icon: ReactNode
}


export function PerfilButton(props: PerfilButtonProps){



    return (
        <TouchableOpacity onPress={() => { // handle onPress
        }} style={styles.row}>
            <View style={styles.rowIcon}>
                {props.icon}
            </View>
            <Text style={styles.rowLabel}>{props.title}</Text>
            <View style={styles.rowSpacer}/>
            <CaretRight size={30} weight="bold" color='#52525B'/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
    rowIcon: {
        width: 32,
        height: 32,
        borderRadius: 9999,
        marginRight: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    rowSpacer: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    rowLabel: {
        fontSize: 20,
        fontWeight: '700',
        color: 'white',
    },
})