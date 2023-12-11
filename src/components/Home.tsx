import {
  Text,
  View,
  Stack,
  Input,
  YStack,
  Button,
  Image,
  XStack,
  ScrollView
} from "tamagui";
import InfoCard from "./Card";

export default function Home() {
  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <Stack alignItems="center">
        <Image
          source={require("../../assets/logo.png")}
          style={{
            borderRadius: 100,
            boxShadow: "5px 5px 5px 1px rgba(0,0,0,0.15)",
            width: 400,
            height: 400
          }}
        />
        <YStack padding="$5" minWidth={300} space="$4">
          <Input flex={1} id="name" placeholder="Enter a username" />
          <Button style={{ boxShadow: "5px 5px 5px 1px rgba(0,0,0,0.15)" }}>
            Search
          </Button>
        </YStack>
        <XStack flex={1}>
          {/* // Its 870 because thats the width of 4 info cards */}
          <ScrollView style={{ maxWidth: 870, padding: 8 }} horizontal>
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </ScrollView>
        </XStack>
      </Stack>
    </View>
  );
}
