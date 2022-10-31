import { useState } from 'react';
import validate from '../helpers/validate';

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(200);

  const sendRequest = async (requestConfig, responseHandler) => {
    console.log(requestConfig.body);
    const response = await fetch(requestConfig.url, {
      method: 'POST',
      body: requestConfig.body,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status == 422) {
      //   const data = await response.json();
      responseHandler(422);
      setLoading(false);
    } else {
      const data = await response.json();
      responseHandler(data);
      setLoading(false);
    }
  };
  return [loading, error, sendRequest];
};

export default useFetch;
