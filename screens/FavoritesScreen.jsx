import { Text,View,StyleSheet } from "react-native"
import { FavoritesContext } from "../store/context/favorites-context"
import { useContext } from "react"
import { MEALS } from "../data/dummy-data"
import MealsList from "../components/MealsList/MealsList"
const FavoritesScreen = () => {

  const favoriteMealCtx = useContext(FavoritesContext)
  const favoriteMeals = MEALS.filter(meal => favoriteMealCtx.ids.includes(meal.id))
  //console.log(favoriteMeals)
  
  if(favoriteMeals.length===0){
    return <View style={styles.rootContainer}>
      <Text style={styles.text}>You have no Favorite meals yet.</Text>
    </View>
  }

  return <MealsList items={favoriteMeals}/>
}

export default FavoritesScreen
const styles= StyleSheet.create({
  rootContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
    fontSize:18,
    fontWeight:"bold",
    color:"white"
  }
})