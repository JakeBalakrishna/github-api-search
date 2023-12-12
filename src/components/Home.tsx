import React, { useEffect, useState } from "react";
import {
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
import Api from "./Api";

export default function Home() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({ username: "", id: "" });

  const handleInputChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handleSearchClick = () => {
    Api.getUserDetails(username)
      .then(response => {
        setUserData({
          username: response.data.login,
          id: response.data.id.toString()
        });
      })
      .catch(error => console.error(error));
  };

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
          <Input
            flex={1}
            id="name"
            placeholder="Enter a username"
            value={username}
            onChange={handleInputChange}
          />
          <Button
            onPress={handleSearchClick}
            style={{ boxShadow: "5px 5px 5px 1px rgba(0,0,0,0.15)" }}
          >
            Search
          </Button>
        </YStack>
        <XStack flex={1}>
          {/* // Its 870 because thats the width of 4 info cards */}
          <ScrollView style={{ maxWidth: 870, padding: 8 }} horizontal>
            <InfoCard username={userData.username} id={userData.id} />
          </ScrollView>
        </XStack>
      </Stack>
    </View>
  );
}
