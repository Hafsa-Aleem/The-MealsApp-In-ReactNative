import { View,Text,FlatList } from "react-native"
import { CATEGORIES } from "../data/dummy-data"
import CategoryGridTile from "../components/CategoryGridTile"

const CategoriesScreen = ({navigation}) => {

function renderCategoryItem(itemData){
function pressHandler(){
  navigation.navigate('MealOverview',{categoryId:itemData.id})
}
  return <CategoryGridTile item={itemData} onPress={pressHandler}/>
}

  return <FlatList
  data={CATEGORIES}
  renderItem={({item})=>renderCategoryItem(item)}
  numColumns={2}
  />
}

export default CategoriesScreen