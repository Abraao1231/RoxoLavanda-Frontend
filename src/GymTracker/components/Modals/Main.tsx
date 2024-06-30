import { Modal, View, TouchableOpacity, Text,  } from "react-native"
import { X } from "phosphor-react-native"
import colors from "tailwindcss/colors"


interface ModalProps {
    active : boolean
    setActive: Function
    children?: React.ReactNode
    height?: Number
    
}


export default function MainModal({active, setActive, children, height}: ModalProps){
    const altura = height? height :  208 
    return (
        <Modal
            visible={active}
            className="w-full h-full bg-zinc-800 justify-center items-center"
            transparent={true}
            animationType="slide"
        >
            
            <View 
                style={{ height: parseInt(altura.toString()) }}
                className="bg-zinc-950 w-[90%] px-6 py-8 m-auto  border-2 border-violet-600 rounded-xl">
                
                <TouchableOpacity 
                    className="absolute right-4 top-4"
                    onPress={() => setActive(false)}    
                >
                    <X size={20} color={colors.zinc[500]} />
                </TouchableOpacity>
            
               {children}
              
            </View>

        </Modal>
    )
}