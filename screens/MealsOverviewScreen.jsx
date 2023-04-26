import { View,Text } from "react-native"
import { MEALS } from "../data/dummy-data"
import MealsList from "../components/MealsList/MealsList"

const MealsOverviewScreen = ({route}) => {

  const mealId = route.params.categoryId
  const selectedMeal = MEALS.filter(meal => meal.categoryIds.indexOf(mealId) >=0)
  //console.log("sele",selectedMeal)
  //return <View><Text>MealsOverviewScreen-{selectedMeal.title}</Text></View>

  return <MealsList items={selectedMeal}/>

}

export default MealsOverviewScreen