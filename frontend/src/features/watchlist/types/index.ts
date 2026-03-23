export interface Movie {
  _id: string;
  title: string;
  year: number;
  poster?: string;
}

export type MovieWithoutId = Omit<Movie, "_id">;
