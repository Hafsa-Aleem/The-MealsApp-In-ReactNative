
import { Pressable,View,Text,StyleSheet,Image } from 'react-native'
import MealsDetails from '../MealsDetails'
import { useNavigation } from '@react-navigation/native'

const MealItem = ({id,title,complexity,duration,imageUrl,affordability}) => {
  const navigation = useNavigation()
  return <View style={styles.mealItem}>
    <Pressable
    android_ripple={{color:'#ccc'}}
    style={({pressed})=>pressed?styles.buttonPressed:null}
    onPress={()=>navigation.navigate('MealDetail',{mealId:id})}
    >
    <View style={styles.innerContainer}>
        <View >
        <Image source={{uri:imageUrl}} style={styles.bgImage}/>
        <Text style={styles.title}>{title}</Text>
        </View>
        <MealsDetails
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        />
      </View>
    </Pressable>
  </View>
}

export default MealItem
const styles = StyleSheet.create({
  mealItem:{
        margin:16,
        borderRadius:8,
        backgroundColor:"#FFF",
        elevation:4,
        shadowColor:"black",
        shadowOffset:{width:0,height:50},
        shadowOpacity:0.25,
        shadowRadius:8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        
},
bgImage:{
  width:'100%',
  height:200,
 
},
title:{
  fontSize:20,
  color:'black',
  backgroundColor:'rgba(0,0,0,0.5)',
  //textAlign:'center',
  fontWeight:"bold",
  
},
innerContainer:{
  borderRadius:8,
  
},
buttonPressed:{
  opacity:0.5
},

})