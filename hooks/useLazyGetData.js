import axios from 'axios';
import to from 'await-to-js';

export default function useLazyGetData(route) {
  return async function getData() {
    const url = `https://define-json-server.herokuapp.com/${route}`;
    const [error, { data }] = await to(axios.get(url));
    if (error) return alert(error);
    return data;
  }
}
