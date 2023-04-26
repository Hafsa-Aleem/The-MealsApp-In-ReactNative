
import { FlatList } from 'react-native'
import MealItem from './MealItem'

const MealsList = ({items}) => {
  //console.log("hifhw",items)

  function renderMealItem(itemData){
    const item = itemData.item
    
  const mealItemProps={
    id:item.id,
    title:item.title,
    imageUrl:item.imageUrl,
    affordability:item.affordability,
    complexity:item.complexity,
    duration:item.duration
  }  
  //console.log("hafsa",mealItemProps)
  return <MealItem {...mealItemProps}/>
  }

  return <FlatList
  data={items}
  renderItem={renderMealItem}
  />
}

export default MealsList