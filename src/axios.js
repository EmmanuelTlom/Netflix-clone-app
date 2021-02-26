import axios from "axios";

/* base url to make requests to the movie database */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

// this is how it works
// instance.get('/example') -> https://api.themoviedb.org/3/example

export default instance;