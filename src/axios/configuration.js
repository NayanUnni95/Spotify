import axios from 'axios';
import { Base_URL } from '../constants/constant';

export const instance = axios.create({
  baseURL: Base_URL,
});
