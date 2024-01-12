import MealsList from "../components/MealsList/MealsList";
//import { useContext } from "react";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";

function FavoritesScreen() {
  //const favoriteMealsCtx = useContext(FavoritesContext);

  // const favoriteMeals = MEALS.filter((item) =>
  //   favoriteMealsCtx.ids.includes(item.id)
  // );

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((item) =>
    favoriteMealIds.ids.includes(item.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>즐겨찾기 한 음식이 없습니다</Text>
      </View>
    );
  }

  return <MealsList item={favoriteMeals} />;
}
export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
