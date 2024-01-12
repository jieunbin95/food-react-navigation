import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((item) => item.id === catId).title;
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);
  // 애니메이션이 진행하는 동안 부수 효과를 설정하거나 실행할 때 사용하는 훅->useLayoutEffect
  // useEffect사용시 화면이 전화되고나서 title이 바뀐다->부자연스러운 현상

  const displayMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(catId) >= 0;
  });

  return <MealsList item={displayMeals} />;
}
export default MealsOverviewScreen;
