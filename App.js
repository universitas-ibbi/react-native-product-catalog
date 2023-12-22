import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";

import dataProduct from "./products.json";
import ProductItem from "./ProductItem";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {dataProduct.map((product) => (
          <ProductItem {...product} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#eee",
  },
});
