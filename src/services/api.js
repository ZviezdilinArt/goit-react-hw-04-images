import axios from 'axios';

const API_KEY ='35736305-5d79b99fc6e7e7bd6a57f0349';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  orientation: 'horizontal',
  image_type: 'photo',
  per_page: 12,
  key: API_KEY,
};
export const fetchImages = (value, page = 1) => {
  return axios.get(`?q=${value}&page=${page}`);
};