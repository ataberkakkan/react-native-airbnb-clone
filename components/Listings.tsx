import { useEffect } from "react";
import { View, Text } from "react-native";

interface ListingsProps {
  listings: any[];
  category: string;
}

const Listings = ({ listings, category }: ListingsProps) => {
  useEffect(() => {}, [category]);

  return (
    <View>
      <Text>Listings</Text>
    </View>
  );
};

export default Listings;
