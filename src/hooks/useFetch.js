import { useState } from 'react';
import validate from '../helpers/validate';

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(200);
  

  const sendRequest = async (requestConfig, responseHandler) => {
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
      //   console.log(400);
      responseHandler(400);
      setLoading(false);
    }
    // const data = await response.json();
    // responseHandler(data);
  };
  return [loading, error, sendRequest];
};

export default useFetch;
