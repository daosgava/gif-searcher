import { useState, useEffect } from "react";
import { useCallback } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout";
import Gifs from "./components/Gifs";
import Header from "./components/Header";

const App = () => {
  const [data, setData] = useState([]);
  const handleUpdateData = useCallback((newData) => setData(newData), []);

  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmarks = (id) => {
    const newData = data.map((gif) => {
      if (gif.id === id) {
        gif.isChecked = !gif.isChecked;
      }
      return gif;
    });
    setData(newData);

    const newBookmarks = data.filter((gif) => gif.isChecked);
    setBookmarks(newBookmarks);
  };

  useEffect(() => {
    console.log({ bookmarks });
  }, [bookmarks]);

  return (
    <ChakraProvider>
      <Layout>
        <Header updateData={handleUpdateData} />
        <Gifs data={data} addToBookmarks={handleAddToBookmarks} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
