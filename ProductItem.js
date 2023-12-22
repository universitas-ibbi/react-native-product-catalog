import { View, Text, Image, StyleSheet } from "react-native";
import { Rating } from "react-native-ratings";

export default function ProductItem(props) {
  return (
    <View style={styles.productItem}>
      <View style={styles.justifyBetween}>
        <Text style={styles.textTitle}>Today's Combo Over</Text>
        <Text style={styles.textOffer}>{props.offer}</Text>
      </View>
      <Image
        source={{
          uri: props.image,
        }}
        width={"100%"}
        height={240}
        resizeMode="contain"
      />
      <View style={styles.justifyBetween}>
        <Text style={styles.textCategory}>{props.type}</Text>
        <Text style={styles.textPriceBefore}>{props.priceBefore}</Text>
      </View>
      <View style={styles.justifyBetween}>
        <Text style={styles.textProductName}>{props.productName}</Text>
        <Text style={styles.textPriceAfter}>{props.priceAfter}</Text>
      </View>
      <View style={styles.justifyBetween}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textAvailable}>Available: </Text>
          <Text style={styles.textStock}>{props.stock}</Text>
        </View>
        <Rating ratingCount={5} startingValue={props.rating} imageSize={30} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productItem: {
    borderColor: "rgba(0, 0, 0, 0.175)",
    borderWidth: 1,
    backgroundColor: "white",
    marginHorizontal: 15,
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  justifyBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    alignItems: "center",
  },
  textTitle: {
    fontSize: 23,
  },
  textOffer: {
    backgroundColor: "rgb(13, 202, 240)",
    color: "white",
    width: 50,
    height: 50,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 50,
    padding: 10,
    fontSize: 20,
  },
  textCategory: {
    fontSize: 25,
    textDecorationLine: "underline",
  },
  textPriceBefore: {
    fontSize: 20,
    color: "red",
    textDecorationLine: "line-through",
  },
  textProductName: {
    fontSize: 30,
    fontWeight: "bold",
  },
  textPriceAfter: {
    fontSize: 30,
  },
  textStock: {
    fontSize: 25,
    fontWeight: "bold",
  },
  textAvailable: {
    fontSize: 25,
  },
});
