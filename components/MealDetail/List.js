import { View,Text,StyleSheet } from "react-native"

function List({children}){
return children.map((datapoint,idx)=><View key={idx} style={styles.listItem}>
<Text style={styles.itemText}>{datapoint}</Text>
</View>)
}
export default List
const styles=StyleSheet.create({
    listItem:{
     borderRadius:6,
     backgroundColor:'#e2b497',
     marginHorizontal:12,
     paddingVertical:4,
     marginVertical:4,
     paddingHorizontal:8
    },
    itemText:{
        color:'#351401',
      fontSize:18
    }
})