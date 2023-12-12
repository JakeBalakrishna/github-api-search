import React from "react";
import { Card, Image, Text, XStack, YStack } from "tamagui";
interface InfoCardProps {
  username: string;
  id: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ username, id }) => {
  return (
    <Card
      flex={1}
      alignItems="center"
      justifyContent="center"
      style={{
        boxShadow: "0px 5px 5px 1px rgba(0,0,0,0.15)",
        maxHeight: 150,
        maxWidth: 200,
        margin: 8
      }}
    >
      <XStack flex={1} alignItems="center" justifyContent="center">
        <Image
          source={require("../../assets/logo.png")}
          style={{
            borderRadius: 10,
            width: 100,
            height: 100,
            margin: 6
          }}
        />
        <YStack marginRight="$3">
          <Text>{username}</Text>
          <Text>ID:{id}</Text>
        </YStack>
      </XStack>
    </Card>
  );
};

export default InfoCard;
