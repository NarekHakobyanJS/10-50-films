export type GenresType = {
  id: number,
  name: string
}

export interface FilmsType {
  adult: boolean,
  backdrop_path: string,
  genre_ids: Array<number>,
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

type BelongsToCollection = {
  id: number,
  name: string,
  poster_path: string,
  backdrop_path: string
}

type ProductionCompanies = {
  id: number,
  logo_path: string,
  origin_country: string,
  name: string
}
export interface OneFilmType extends FilmsType {
  belongs_to_collection: BelongsToCollection
  budget: number,
  genres: Array<GenresType>,
  homepage: string,
  imdb_id: string,
  origin_country: Array<string>,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: Array<ProductionCompanies>,
  production_countries: Array<{ iso_3166_1: string, name: string }>,
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: Array<any>,
  status: string,
  tagline : string,

}