const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGZlMTZiY2Y0MjIwNTc2MjdmZWRkMWU1N2QyMWMwMyIsIm5iZiI6MTcyMjY5Nzc0Ni4zMzMzMywic3ViIjoiNjU2MTUzNDk3ZGZkYTYwMGUxNzJmODkxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.YXcDZhJs92zn5Lkp33C8uWfPb7EsOMDtgd4tpk-JT8M",
  },
};
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  id: number;
}

export interface IGetMoviesResult {
  dates: {
    maximum: "string";
    minimum: "string";
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing`, options).then((response) =>
    response.json()
  );
}
