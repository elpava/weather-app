import {useState} from 'react';

export default function useFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function sendRequest(getURL = {}, options = {}, applyData) {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(getURL, options);

      if (!response) throw new error('Request Faild!');

      const data = await response.json();
      console.log(data);

      applyData(data);
    } catch (error) {
      console.error('error: ' + error);
      setError(error || 'Something went wrong!');
    }
    setIsLoading(false);
  }

  return {
    isLoading,
    error,
    sendRequest,
  };
}
