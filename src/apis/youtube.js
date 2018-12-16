import axios from 'axios';

const KEY = 'AIzaSyA5eszWRLsWxv5PnxqeDbtB_rvaaFRomyE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key : KEY,
  }
})