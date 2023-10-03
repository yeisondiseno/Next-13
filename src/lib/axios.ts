import axios from 'axios';
// Globals
import { baseUrl } from '@/config/url';

export default axios.create({
  baseURL: baseUrl.url,
  headers: { 'Content-Type': 'application/json' },
});
