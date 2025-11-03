'use client';
import { useState, useEffect } from 'react';

export function fetchData() {
  const [status, setStatus] = useState<'loading' | 'error' | 'success'>(
    'loading'
  );
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const usefetchChampions = async () => {
      try {
        const response = await fetch(
          'https://ddragon.leagueoflegends.com/cdn/15.21.1/data/en_US/champion.json'
        );
        const data = await response.json();
        setData(data);
        setStatus('success');
      } catch (error) {
        setStatus('error');
        console.log(error);
        return;
      }
    };

    usefetchChampions();
  }, []);

  return { data, status };
}
