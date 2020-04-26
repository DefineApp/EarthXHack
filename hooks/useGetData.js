import { useState, useEffect } from 'react';
import axios from 'axios';
import to from 'await-to-js';

export default function useGetData(route, initialState = null) {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    (async () => {
      const url = `https://define-json-server.herokuapp.com/${route}`;
      const [error, {data}] = await to(axios.get(url));
      if (error) return alert(error);
      setData(data);
    })();
  }, []);

  return data;
}
