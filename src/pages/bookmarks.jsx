import { useState, useContext, useEffect } from "react";
import { Heading, Flex, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Gifs from "../components/Gifs";
import GifsContext from "../context/bookmarks/BookmarksContext";

const Bookmarks = () => {
  const [data, setData ] = useState([]);
  const { bookmarks, deleteBookmarks } = useContext(GifsContext);

  useEffect(() => {
    setData(bookmarks);
  }, [bookmarks]);

  const handleUpdateGifs = (gif) => {
    deleteBookmarks(gif);
  };

  return (
    <Flex flexDirection="column" gap="20px">
      <Box position="absolute">
        <Flex flexDirection="row" alignItems="center" gap="10px">
          <AiOutlineArrowLeft />
          <Link fontSize="12px" textDecoration="underline" to={`/`}>
            Go back
          </Link>
        </Flex>
      </Box>
      <Flex flexDirection="row" gap="20px" justifyContent="center">
        <Heading size="md" textAlign="center">My Saved GIFS</Heading>
      </Flex>
      <Gifs data={data} isBookmarks={true} updateGifs={handleUpdateGifs} />
    </Flex>
  );
};

export default Bookmarks;
