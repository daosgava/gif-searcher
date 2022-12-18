import { Image, Text, Stack, IconButton, Box } from "@chakra-ui/react";
import { AiOutlineHeart, AiTwotoneHeart, AiFillDelete } from "react-icons/ai";

const setIcon = (isBookmarks, isChecked) => {
  if (isBookmarks) {
    return <AiFillDelete />;
  }

  const addToFavorites = {
    checked: <AiTwotoneHeart />,
    unchecked: <AiOutlineHeart />,
  };

  return addToFavorites[isChecked ? "checked" : "unchecked"];
};

const Gif = ({ url, title, username, isChecked, isBookmarks, onClick }) => (
  <Box maxW="200px" maxH="200px" p="0px" fontSize="12px" position="relative">
    <IconButton
      backgroundColor="unset"
      position="absolute"
      right="0px"
      variant="ghost"
      size="lg"
      color="white"
      _hover={{ background: "unset" }}
      _active={{ background: "unset" }}
      icon={setIcon(isBookmarks, isChecked)}
      onClick={onClick}
    />
    <Image src={url} alt={title} h="130px" w="200px" objectFit="cover" />
    <Stack spacing="3">
      <Box h="10px">
        {title ? <Text>{title.slice(0, 20)}...</Text> : <>No title</>}
      </Box>
      <Box>{username ? <Text>{username}</Text> : <>Anonymous</>}</Box>
    </Stack>
  </Box>
);

export default Gif;
