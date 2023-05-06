import { memo, ReactNode, VFC } from "react";
import { Box, Stack, Image, Text } from "@chakra-ui/react";

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};
export const UserCard: VFC<Props> = memo((props) => {
  const { imageUrl, userName, fullName, onClick, id } = props;
  return (
    <Box
      onClick={() => onClick(id)}
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
    >
      <Stack textAlign="center">
        <Image
          boxSize="160px"
          borderRadius="full"
          alt={userName}
          m="auto"
          src={imageUrl}
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
