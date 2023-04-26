import { Pressable } from "react-native"
import { Text,View } from "react-native"
import { StyleSheet } from "react-native"

const CategoryGridTile = ({item,onPress}) => {
  return <View style={styles.gridItem}>
    <Pressable 
    android_ripple={{color:"#ccc"}}
    style={({pressed})=>[styles.button,pressed?styles.buttonPressed:null]}
    onPress={onPress}
    >
    <View style={[styles.innerItem,{backgroundColor:item.color}]}>
    <Text style={styles.title}>{item.title}</Text>
    </View>
    </Pressable>
  </View>
// return console.log(item)
}

export default CategoryGridTile
const styles = StyleSheet.create({
    gridItem:{
    flex:1,
    borderWidth:2,
    margin:16,
    height:150,
    elevation:4,
    shadowColor:'black',
    shadowOpacity:0.25,
    shadowOffset:{width:0,height:12},
    shadowRadius:8,
    overflow:Platform.OS ==='android' ? 'hidden':'visible'

    },
    title:{
      
        fontSize:20,
        fontWeight:"bold",
    },
    innerItem:{
     flex:1,
     justifyContent:"center",
     alignItems:"center"
    },
    button:{
        flex:1
    },
    buttonPressed:{
        opacity:0.5
    }
})