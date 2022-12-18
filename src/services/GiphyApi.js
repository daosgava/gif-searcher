const GiphyApi = () => {
  const API_KEY = "WnTEYVz8yJSXIH1ZF4mLgRF33Ey4oC1g";
  const BASE_URL = "https://api.giphy.com/v1/gifs";

  const searchByKeyword = (keyword) =>
    fetch(`${BASE_URL}/search?api_key=${API_KEY}&q=${keyword}`);

  return {
    searchByKeyword,
  };
};

export default GiphyApi();
