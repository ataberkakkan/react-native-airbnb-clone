import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

const Page = () => {
  return (
    <View>
      <Link href={"/(modals)/login"}>Log in</Link>
      <Link href={"/(modals)/booking"}>Booking</Link>
      <Link href={"/listing/222"}>Listing details</Link>

      <StatusBar style="dark" />
    </View>
  );
};
export default Page;
