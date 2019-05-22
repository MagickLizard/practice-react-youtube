import axios from 'axios';
const KEY = "AIzaSyDgq8Q6diyIiOUSsdlUukWX9z7rHlw1M7M";

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY
  }
})