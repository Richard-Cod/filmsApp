// API/TMDBApi.js
import {API_TOKEN} from './token.js'

export function getFilmsFromApiWithSearchedText (text) {
  console.log(API_TOKEN);
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getImageFromApi(name) {
  return 'https://image.tmdb.org/t/p/w500'+name

}
