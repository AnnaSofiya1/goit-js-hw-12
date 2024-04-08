import axios from 'axios';

const API_KEY = '43274193-b0157717e654dc920b3fc7520';
const baseURL = 'https://pixabay.com/api/';

export async function fetchImages(searchQuery, page = 1, perPage = 15) {
 try {
    const response = await axios.get(baseURL, {
      params: {
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: perPage,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}