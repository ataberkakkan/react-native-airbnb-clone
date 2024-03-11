import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import { useMemo, useState } from "react";
import ListingsMap from "@/components/ListingsMap";
import listingsData from "@/assets/data/airbnb-listings.json";
import listingDataGeo from "@/assets/data/airbnb-listings.geo.json";
import ListingsBottomSheet from "@/components/ListingsBottomSheet";

const Page = () => {
  const [category, setCategory] = useState("Tiny homes");
  const items = useMemo(() => listingsData as any, []);

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, marginTop: 80 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />

      <ListingsMap listings={listingDataGeo} />
      <ListingsBottomSheet listings={items} category={category} />

      <StatusBar style="dark" />
    </View>
  );
};
export default Page;
