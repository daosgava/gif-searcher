const GiphyApi = () => {
  const API_KEY = process.env.REACT_APP_GIPHY_SECRET_KEY;
  const BASE_URL = "https://api.giphy.com/v1/gifs";

  const searchByKeyword = (keyword) =>
    fetch(`${BASE_URL}/search?api_key=${API_KEY}&q=${keyword}`);

  return {
    searchByKeyword,
  };
};

export default GiphyApi();
