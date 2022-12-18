import { useState, useCallback, useContext } from "react";
import { Flex, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GiphyApi } from "../services";
import Gifs from "../components/Gifs";
import Searcher from "../components/Searcher";
import GifsContext from "../context/bookmarks/BookmarksContext";

const Home = () => {
  const [data, setData] = useState([]);
  const { bookmarks, updateBookmarks } = useContext(GifsContext);

  const handleSearchByKeyword = useCallback(async (keyword) => {
    try {
      const res = await GiphyApi.searchByKeyword(keyword);
      const { data } = await res.json();
      const newGifs = data.map(({ id, title, username, images }) => ({
        id,
        title,
        username,
        image: images.fixed_width.url,
        isChecked: bookmarks.some((gif) => gif.id === id),
      }));
      setData(newGifs);
    } catch (error) {
      console.error(error);
    }
  }, [bookmarks]);

  const handleUpdateGifs = (newGif) => {
    const newUpdate = data.map((gif) =>
      gif.id === newGif.id ? { ...gif, isChecked: !gif.isChecked } : gif
    );
    setData(newUpdate);
    updateBookmarks(newGif);
  };

  return (
    <>
      <Flex flexDirection="row" gap="20px" justifyContent="center">
        <Searcher searchByKeyword={handleSearchByKeyword} />
        <Center>
          <Link fontSize="12px" textDecoration="underline" to={`bookmarks`}>
            My Saved Gifs
          </Link>
        </Center>
      </Flex>
      <Gifs data={data} updateGifs={handleUpdateGifs} />
    </>
  );
};

export default Home;
