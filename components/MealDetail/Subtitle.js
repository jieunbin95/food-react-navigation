import { Text, View, StyleSheet } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.outLine}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
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
    marginHorizontal: 12,
    padding: 2,
  },
});
