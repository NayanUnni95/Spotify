import Cookies from 'universal-cookie';
import { instance as axios } from '../axios/configuration';

export const useAuth = () => {
  const fetchData = async (endpoint) => {
    const token = getToken();
    if (token) {
      const config = {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      };
      const maxRetries = 3; // Maximum number of attempts
      const timeDuration = 1000; // Api call duration in seconds
      for (let retries = 0; retries < maxRetries; retries++) {
        try {
          const response = await axios.get(endpoint, config).catch((error) => {
            if (error.response && error.response.status === 403) {
              console.error('Access forbidden: Check your scopes and token.');
            } else {
              console.error('An error occurred:', error.message);
            }
          });
          return response.data;
        } catch (err) {
          console.log(err);
          if (retries === maxRetries - 1) {
            return null;
          } else {
            await new Promise((resolve) => {
              setTimeout(resolve, timeDuration);
            });
          }
        }
      }
    }
  };
  const spotifyAuthReturnParams = (hash) => {
    const strAfterHash = hash.substring(1);
    const paramsInUrl = strAfterHash.split('&');
    const paramsSplitUp = paramsInUrl.reduce((accumulator, currValue) => {
      const [key, value] = currValue.split('=');
      accumulator[key] = value;
      return accumulator;
    }, {});
    return paramsSplitUp;
  };
  const setToken = (access_token, expires_in) => {
    const cookies = new Cookies();
    const expireTime = new Date(expires_in + 3600 * 1000);
    cookies.set('access_token', access_token, {
      path: '/',
      expires: expireTime,
    });
    cookies.set('expires_in', expires_in, {
      path: '/',
      expires: expireTime,
    });
  };
  const getToken = () => {
    const cookies = new Cookies();
    const access_token = cookies.get('access_token');
    const expires_in = cookies.get('expires_in');
    if (!access_token || expires_in > new Date()) {
      return null;
    }
    return access_token;
  };
  return {
    fetchData,
    spotifyAuthReturnParams,
    setToken,
    getToken,
  };
};
