import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";

function CategoriesScreen({ navigation }) {
  //app.js에서 Stack.screen컴포넌트를 통해 화면으로 사용되는 컴포넌트들은
  //navigation 프로퍼티를 받는다(자식컴포넌트는 받을 수 없다)

  function pressHandler(itemData) {
    navigation.navigate("MealsOverview", {
      categoryId: itemData.item.id,
    });
  }

  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      //두줄로 스타일을 줄때 사용
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={pressHandler.bind(this, itemData)}
        />
      )}
    />
  );
}

export default CategoriesScreen;
