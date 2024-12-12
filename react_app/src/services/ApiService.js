import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL || "";
axios.interceptors.request.use((config) => {
  const innerConfig = config;
	// get auth token and assign it to token
  const token = "put auth token here"; 
  if (token) {
    innerConfig.headers.Authorization = `Bearer ${token}`;
  }
  return innerConfig;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
		// ypu can also handle error here
    if (error?.response?.status === 401) {
			// do somting when status code is 401
    }
    return Promise.reject(error);
  }
);

const tryCatchWrapper = async (axiosObject) => {
  try {
    const { data } = await axios(axiosObject);
    return data;
  } catch (error) {
    return error.response ? error.response.data : {};
  }
};

const ApiService = {
  get: (url, params) => tryCatchWrapper({ method: "GET", url, params }),
  post: (url, body) => tryCatchWrapper({ method: "POST", url, data: body }),
  put: (url, body) => tryCatchWrapper({ method: "PUT", url, data: body }),
  delete: (url, body) => tryCatchWrapper({ method: "DELETE", url, data: body }),
};

export default ApiService;