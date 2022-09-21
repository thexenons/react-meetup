import { useEffect, useState } from "react";

export const useFetch = (options) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(options.url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [options.url]);

  return {
    data,
    isLoading,
  };
};
