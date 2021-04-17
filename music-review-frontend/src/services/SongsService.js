import axios from 'axios';

const SONGS_ENDPOINT_BASE_URL = "http://localhost:8082/songs/";
const SONGS_ENDPOINT_BASE_URL_FOR_CREATE = "http://localhost:8082/songs/add"

class SongsService{
getSongs(){
    return axios.get(SONGS_ENDPOINT_BASE_URL);
}
createSong(song){
return axios.post(SONGS_ENDPOINT_BASE_URL_FOR_CREATE, song);
}
}

export default new SongsService();