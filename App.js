import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
// import FavoritesContextProvider from "./store/context/favorites-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        //제목부분 배경 색상
        headerTintColor: "white",
        //제목 글자 색상
        sceneContainerStyle: { backgroundColor: "#351401" },
        //뒤 배경 색상
        drawerContentStyle: { backgroundColor: "#351401" },
        //drawer부분 배경 색상
        drawerInactiveTintColor: "white",
        //서랍에 있는 비활성 항목의 아이콘 및 레이블 색상
        drawerActiveTintColor: "#351401",
        //서랍에 있는 활성 항목의 아이콘 및 라벨 색상
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
        //drawer내비게이터로부터 color,size같은 props를 자동으로 받을 수 있다
        name="Categories"
        component={CategoriesScreen}
      />

      <Drawer.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
        name="Favorites"
        component={FavoritesScreen}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              //제목부분 배경 색상
              headerTintColor: "white",
              //제목 글자 색상
              contentStyle: { backgroundColor: "#351401" },
              //뒤 배경 색상
            }}
            // 모든 컴포넌트에 배경색을 통일 시키고 싶다면 Stack.Navigator에 스크린 옵션을 준다
          >
            <Stack.Screen
              name="MealsCategories"
              component={DrawerNavigator}
              options={{ headerShown: false }}
              //헤더 제목 숨기기
            />

            <Stack.Screen
              // options={({ route, navigation }) => {
              //   const catId = route.params.categoryId;
              //   return {
              //     title: catId,
              //   };
              // }}
              name="MealsOverview"
              component={MealsOverviewScreen}
            />

            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              // options={{
              //   headerRight: () => {
              //     return <Button title="Tap me" />;
              //   },
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}
