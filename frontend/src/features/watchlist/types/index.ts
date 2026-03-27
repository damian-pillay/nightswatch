export interface Watchlist {
  movies: Movie[];
}

export interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  poster?: string;
}

export type MovieWithoutId = Omit<Watchlist, "_id">;
