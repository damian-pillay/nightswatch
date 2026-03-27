export const getPosterURL = (posterPath: string, size: string = "original") => {
  if (!posterPath) return null;
  return `https://image.tmdb.org/t/p/${size}${posterPath}`;
};
