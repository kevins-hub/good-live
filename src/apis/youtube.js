import axios from 'axios';  //axios library to help HTTP requests


const KEY = 'AIzaSyAUetPSRF5dgH56JT8mBK4F0NkLeR1OgMs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 3,
        key: KEY,
        type: 'video',
        videoEmbeddable: 'true'
    }
})