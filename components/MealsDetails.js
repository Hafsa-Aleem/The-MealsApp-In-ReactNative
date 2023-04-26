import {Text,View,StyleSheet} from 'react-native'
const MealsDetails = ({duration,complexity,affordability}) => {
  return <View style={styles.details}>
    <Text style={styles.textDetail}>{duration}min</Text>
    <Text style={styles.textDetail}>{complexity.toUpperCase()}</Text>
    <Text style={styles.textDetail}>{affordability.toUpperCase()}</Text>
  </View>
}
export default MealsDetails
const styles = StyleSheet.create({
    details:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        padding:9
    },
    textDetail:{
fontSize:12,
marginHorizontal:10
    }

})