'use client';
import { useState, useEffect } from 'react';

export function fetchData() {
  const [status, setStatus] = useState<'loading' | 'error' | 'success'>(
    'loading'
  );
  const [data, setData] = useState<any>(null);
  const [version, setVersion] = useState<string>('15.21.1');

  useEffect(() => {
    const usefetchChampions = async () => {
      try {
        const versionResponse = await fetch(
          'https://ddragon.leagueoflegends.com/api/versions.json'
        );
        const versions = await versionResponse.json();
        const latestVersion = versions[0];
        setVersion(latestVersion);

        const response = await fetch(
          `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion.json`
        );
        const championData = await response.json();
        setData(championData);
        setStatus('success');
      } catch (error) {
        setStatus('error');
        console.log(error);
        return;
      }
    };

    usefetchChampions();
  }, []);

  const getChampionImageUrl = (championId: string) => {
    return `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championId}.png`;
  };

  const getChampionSplashUrl = (championId: string, skinNum: number = 0) => {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_${skinNum}.jpg`;
  };

  const getChampionLoadingUrl = (championId: string, skinNum: number = 0) => {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championId}_${skinNum}.jpg`;
  };

  return {
    data,
    status,
    version,
    getChampionImageUrl,
    getChampionSplashUrl,
    getChampionLoadingUrl,
  };
}
