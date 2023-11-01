import React, { useState, useEffect } from 'react'

export default function DataFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      });
  },[] );

  return { data, loading };
}
