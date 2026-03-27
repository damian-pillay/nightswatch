export const getPosterURL = (posterPath: string, size: string = "w500") => {
  if (!posterPath) return null;
  return `https://image.tmdb.org/t/p/${size}${posterPath}`;
};
