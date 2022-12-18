import { useState } from "react";
import BookmarksContext from "./BookmarksContext";

const BookmarksProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const updateBookmarks = (gif) => {
    const isFound = bookmarks.find((bookmark) => bookmark.id === gif.id);
    if (isFound) {
      deleteBookmarks(gif);
      return;
    }
    setBookmarks([...bookmarks, gif]);
  };

  const deleteBookmarks = (gif) => {
    const newBookmarks = bookmarks.filter((bookmark) => bookmark.id !== gif.id);
    setBookmarks(newBookmarks);
  };

  const value = {
    bookmarks,
    updateBookmarks,
    deleteBookmarks,
  };

  return (
    <BookmarksContext.Provider value={value}>
      {children}
    </BookmarksContext.Provider>
  );
};

export default BookmarksProvider;
