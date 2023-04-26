import { View,Text,StyleSheet,Image } from "react-native"
import { useContext, useEffect } from "react"
import { AntDesign } from '@expo/vector-icons';
import IconButton from "../components/IconButton";
import { MEALS } from "../data/dummy-data";
import { ScrollView } from "react-native-gesture-handler";
import MealsDetails from "../components/MealsDetails";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import { FavoritesContext } from "../store/context/favorites-context";


const MealDetailScreen = ({navigation,route}) => {
  const mealId = route.params.mealId
  const selectedMeal = MEALS.find(meal=>meal.id === mealId)
  
  const favoriteMealCtx = useContext(FavoritesContext)
 // console.log(favoriteMealCtx)
  const mealIsFavorite = favoriteMealCtx.ids.includes(mealId)
  //console.log(mealIsFavorite)

  function changeFavoritesStatusHandler (){
    if(mealIsFavorite){
      favoriteMealCtx.removeFavorite(mealId)
    }else{
      favoriteMealCtx.addFavorite(mealId)
    }
  }

  useEffect(()=>{
      navigation.setOptions({
        headerRight:()=><IconButton icon={mealIsFavorite ?"star":"star-outline"} color="black" onPress={changeFavoritesStatusHandler} size={24}/>
      })
  },[navigation,changeFavoritesStatusHandler])
  
  return <ScrollView style={styles.rootContainer}>
    <Image source={{uri:selectedMeal.imageUrl}} style={styles.img}/>
    <Text style={styles.title}>{selectedMeal.title}</Text>
    <MealsDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
    />
    {/* <Text>{JSON.stringify(selectedMeal.ingredients)}</Text> */}
    <View style={styles.listOuterContainer}>
      <View style={styles.listContainer}>
        <SubTitle>Ingredients</SubTitle>
        <List>{selectedMeal.ingredients}</List>
        <SubTitle>Steps</SubTitle>
        <List>{selectedMeal.steps}</List>
      </View>
    </View>
  </ScrollView>
}
export default MealDetailScreen
const styles = StyleSheet.create({
  img:{
    width:"100%",
    height:350
  },
  listOuterContainer:{
alignItems:'center'
  },
  listContainer:{
  width:"80%"
  },
  title:{
  fontWeight:"bold",
  fontSize:24,
  margin:8,
  textAlign:'center',
  color:"#e2b497"
  },
  rootContainer:{
    marginBottom:52,

  }

})