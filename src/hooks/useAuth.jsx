import Cookies from 'universal-cookie';
import { instance as axios } from '../axios/configuration';
import { FastAverageColor } from 'fast-average-color';

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
    const expireTime = new Date(expires_in + 3300 * 1000);
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
  const removeToken = () => {
    const cookies = new Cookies();
    cookies.remove('access_token');
    cookies.remove('expires_in');
  };
  const DateConverter = (zuluTime) => {
    const date = new Date(zuluTime);
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();
    return `${day} ${month} ${year}`;
  };
  const msToTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);

    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };
  const predictColor = (url, callback) => {
    const fac = new FastAverageColor();
    fac
      .getColorAsync(url)
      .then((color) => {
        callback(color);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return {
    fetchData,
    spotifyAuthReturnParams,
    setToken,
    getToken,
    removeToken,
    DateConverter,
    msToTime,
    predictColor,
  };
};
