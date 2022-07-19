import React, { useState, useEffect } from 'react';

export default function getData(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError();
      const newData = await fetch(url)
        .then(res => res.json())
        .catch(err => {
          setError(err);
        });
      setData(newData);
      setLoading(false);
    }
    fetchData();
  }, [url]);
  return {
    data,
    loading,
    error,
  };
}