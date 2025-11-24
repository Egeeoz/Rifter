'use client';

import { useData } from '@/hooks/useData';

const Comp = () => {
  const example = {
    champion: ['Draven', 'Draven', 'Draven', 'Draven', 'Draven'],
    roles: ['Top', 'Jungle', 'Mid', 'Adc', 'Support'],
  };

  const { getChampionLoadingUrl } = useData();
  return (
    <section className="flex">
      {example.champion.map((champion, idx) => (
        <div>
          <span>{example.roles[idx]}</span>
          <img
            key={idx}
            src={getChampionLoadingUrl(champion)}
            alt={`${champion} Loading screen img`}
          />
        </div>
      ))}
    </section>
  );
};

export default Comp;
