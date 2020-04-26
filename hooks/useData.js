import { useState, useEffect } from 'react';
import axios from 'axios';
import to from 'await-to-js';

export default function useGetData(route, initialState = null) {
  const [data, setData] = useState(initialState);

  return function getData() {
    useEffect(() => {
      (async () => {
        const url = `http://localhost:3000/${route}`;
        const [error, {data}] = await to(axios.get(url));
        if (error) return alert(error);
        setData(data);
      })();
    });

    return {data};
  }
}