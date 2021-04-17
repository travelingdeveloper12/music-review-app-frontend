import axios from 'axios';

const SONGS_ENDPOINT_BASE_URL = "http://localhost:8082/songs/";

class SongsService{
getSongs(){
    return axios.get(SONGS_ENDPOINT_BASE_URL);
}
}

export default new SongsService();