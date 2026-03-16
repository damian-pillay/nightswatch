import { defineStore } from "pinia";
import type { Movie, MovieWithoutId } from "../types";

export const useMovieStore = defineStore("movie", {
  state: () => ({
    movies: [
      {
        id: "1",
        title: "The Dark Knight",
        year: 2008,
        poster:
          "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      },
      {
        id: "2",
        title: "Inception",
        year: 2010,
        poster:
          "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
      },
      {
        id: "3",
        title: "Interstellar",
        year: 2014,
        poster:
          "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      },
      {
        id: "4",
        title: "The Prestige",
        year: 2006,
        poster:
          "https://image.tmdb.org/t/p/w500/bdN3gXuIZYaJP7ftKK2sU0nPtEA.jpg",
      },
    ] as Movie[],
  }),

  actions: {
    addMovie(movie: MovieWithoutId) {
      const newMovie: Movie = {
        ...movie,
        id: Date.now().toString(),
      };
      this.movies.push(newMovie);
    },

    deleteMovie(id: string) {
      const index = this.movies.findIndex((m) => m.id === id);
      if (index !== -1) {
        this.movies.splice(index, 1);
      }
    },
  },
});
