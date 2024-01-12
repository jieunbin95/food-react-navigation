import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealIds((currentFav) => [...currentFav, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealIds((currentFav) =>
      currentFav.filter((item) => item !== id)
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavorites: addFavorite,
    removeFavorites: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
