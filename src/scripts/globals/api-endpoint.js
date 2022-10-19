import CONFIG from './config';

const API_ENDPOINT = {
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  LIST: `${CONFIG.BASE_URL}list`,
};

export default API_ENDPOINT;
