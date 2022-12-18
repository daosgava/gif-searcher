import { useState, useContext, useEffect } from "react";
import { Heading, Flex, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Gifs from "../components/Gifs";
import GifsContext from "../context/bookmarks/BookmarksContext";

const Bookmarks = () => {
  const [data, setData] = useState([]);
  const { bookmarks, deleteBookmarks } = useContext(GifsContext);

  useEffect(() => {
    setData(bookmarks);
  }, [bookmarks]);

  const handleUpdateGifs = (gif) => {
    deleteBookmarks(gif);
  };

  return (
    <>
      <Box position="absolute">
        <Link to={`/`}>
          <Flex flexDirection="row" alignItems="center" gap="10px">
            <AiOutlineArrowLeft />
            <Text fontSize="12px" fontWeight="600">
              Go back
            </Text>
          </Flex>
        </Link>
      </Box>
      <Heading size="md" textAlign="center">
        My Saved GIFS
      </Heading>
      <Gifs data={data} isBookmarks={true} updateGifs={handleUpdateGifs} />
    </>
  );
};

export default Bookmarks;
