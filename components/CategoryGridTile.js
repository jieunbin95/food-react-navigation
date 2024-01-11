import { View, Pressable, Text, StyleSheet, Platform } from "react-native";
//import {useNavigation} from "@react-navigation/native";
//Stack.screen 컴포넌트인 경우 navigation을 받을 수 있지만
//만일 다른 컴포넌트에서 실행하고자 한다면
//1.props로 전달전달 받아 사용할 수 있고
//2.useNavigation 훅을 통해 전달 받을 수 있다

function CategoryGridTile({ title, color, onPress }) {
  //const navigation=useNavigation()

  return (
    <View style={styles.gridItem}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    // 그림자효과의 경우 안드로이드는 elevation
    //ios는 shadow스타일을 주고 backgroundColor를 주어야 ui로 보일 수 있다
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    //ios의 경우 overflow:'hidden'을 주면 그림자 스타일이 적용되지 않는다
    //따라서 내부컨테이너를 만들고 거기에 스타일(overflow:'hidden')를 주면 된다
  },

  button: {
    flex: 1,
  },

  buttonPressed: {
    opacity: 0.5,
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
