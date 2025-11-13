'use client';
import { useState, useEffect } from 'react';

const CACHE_DURATION = 1000 * 60 * 60 * 24;

export function useData() {
  const [status, setStatus] = useState<'loading' | 'error' | 'success'>(
    'loading'
  );
  const [data, setData] = useState<any>(null);
  const [version, setVersion] = useState<string>('15.21.1');

  useEffect(() => {
    const usefetchChampions = async () => {
      try {
        let latestVersion = version;
        let shouldRefetchData = false;

        // Check if we need to fetch version
        const cachedVersion = localStorage.getItem('version');
        const cachedVersionTime = localStorage.getItem('versionTimestamp');
        const now = Date.now();

        if (
          !cachedVersion ||
          !cachedVersionTime ||
          now - parseInt(cachedVersionTime) > CACHE_DURATION
        ) {
          // Fetch latest version
          const versionResponse = await fetch(
            'https://ddragon.leagueoflegends.com/api/versions.json'
          );
          const versions = await versionResponse.json();
          latestVersion = versions[0];

          // If version changed, mark data for refetch
          if (cachedVersion && cachedVersion !== latestVersion) {
            shouldRefetchData = true;
            console.log(`Version updated: ${cachedVersion} → ${latestVersion}`);
          }

          setVersion(latestVersion);
          localStorage.setItem('version', latestVersion);
          localStorage.setItem('versionTimestamp', now.toString());
          console.log('Version check RAN');
        } else {
          latestVersion = cachedVersion;
          setVersion(latestVersion);
          console.log('Using cached version:', latestVersion);
        }

        // Fetch champion data if needed
        const cachedData = localStorage.getItem('championData');
        if (!cachedData || shouldRefetchData) {
          const response = await fetch(
            `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion.json`
          );
          const championData = await response.json();
          setData(championData);
          localStorage.setItem('championData', JSON.stringify(championData));
          setStatus('success');
          console.log('Champion data fetch RAN');
        } else {
          setData(JSON.parse(cachedData));
          setStatus('success');
          console.log('Using cached champion data');
        }
      } catch (error) {
        setStatus('error');
        console.log(error);
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
