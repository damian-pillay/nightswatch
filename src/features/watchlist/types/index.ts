export interface Movie {
  id: string;
  title: string;
  year: number;
  poster?: string;
}

export type MovieWithoutId = Omit<Movie, "id">;
