import React from "react";

function useGenres(selectedGenres) {
  if (selectedGenres.length < 1) return "";
  const GenreId = selectedGenres.map((g) => {
    return g.id;
  });
  return GenreId.reduce((previousValue, currentValue) => {
    return previousValue + "," + currentValue;
  });
}

export default useGenres;
