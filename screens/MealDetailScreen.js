import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect, useContext } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context.js";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites.js";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  // const favoriteMealsCtx = useContext(FavoritesContext);
  //const mealFavorite = favoriteMealsCtx.ids.includes(mealId);

  const favoriteMealItem = useSelector((state) => state.favoriteMeals.ids);
  const mealFavorite = favoriteMealItem.includes(mealId);

  const selecteMeal = MEALS.find((item) => item.id === mealId);

  const dispatch = useDispatch();

  function changeFavoriteStatusHandler() {
    if (mealFavorite) {
      //favoriteMealsCtx.removeFavorites(mealId);
      dispatch(removeFavorite({ id: mealId }));
      console.log("아웃라인");
    } else {
      //favoriteMealsCtx.addFavorites(mealId);
      dispatch(addFavorite({ id: mealId }));
      console.log("별");
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selecteMeal.imageUrl }} />
      <Text style={styles.title}>{selecteMeal.title}</Text>
      <View>
        <MealDetails
          duration={selecteMeal.duration}
          complexity={selecteMeal.complexity}
          affordability={selecteMeal.affordability}
          textStyle={styles.detailText}
        />
      </View>

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selecteMeal.ingredients} />

          <Subtitle>Steps</Subtitle>
          {selecteMeal.steps.map((item) => (
            <View style={styles.listItem} key={item}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 30,
  },

  image: {
    width: "100%",
    height: 350,
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },

  detailText: {
    color: "white",
  },

  subtitle: {
    color: "#e2b497",
    fontSize: 20,
    fontWeight: "bold",
    margin: 4,
    padding: 6,
    textAlign: "center",
  },

  outLine: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginHorizontal: 90,
    padding: 2,
  },

  listOuterContainer: {
    alignItems: "center",
  },

  listContainer: {
    width: "80%",
  },

  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },

  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
