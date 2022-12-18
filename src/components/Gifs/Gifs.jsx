import { Wrap, WrapItem, Text } from "@chakra-ui/react";
import Gif from "./Gif";

const Gifs = ({ data, updateGifs, isBookmarks = false }) => {
  const handleOnClick = (gif) => () => {
    updateGifs(gif);
  };

  return (
    <Wrap spacing="30px" justify="center">
      {data.length ? (
        data.map(({ id, isChecked, image, title, username }) => (
          <WrapItem key={`gif-${id}`}>
            <Gif
              isBookmarks={isBookmarks}
              isChecked={isChecked}
              url={image}
              title={title}
              username={username}
              onClick={handleOnClick({
                id,
                image,
                title,
                username,
                isChecked,
              })}
            />
          </WrapItem>
        ))
      ) : (
        <WrapItem>
          <Text fontStyle="oblique">
            {isBookmarks ? "No bookmarks..." : "No results..."}
          </Text>
        </WrapItem>
      )}
    </Wrap>
  );
};

export default Gifs;
