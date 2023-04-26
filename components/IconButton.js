import { Ionicons } from "@expo/vector-icons"
import { Pressable } from "react-native"

const IconButton = ({icon,color,onPress,size})=>{
return <Pressable>
    <Ionicons name={icon} color={color} onPress={onPress} size={size}/>
</Pressable>
}
export default IconButton