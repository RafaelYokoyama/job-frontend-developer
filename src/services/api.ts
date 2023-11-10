import axios from 'axios';

const youtubeApi = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { youtubeApi };

const ticketmasterApi = axios.create({
  baseURL: 'https://app.ticketmaster.com/discovery/v2/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { ticketmasterApi };
