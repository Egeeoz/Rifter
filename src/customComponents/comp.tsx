'use client';

import { useData } from '@/hooks/useData';

interface CompProps {
  selectedChampions?: string[];
}

const Comp = ({ selectedChampions }: CompProps) => {
  const exampleData = {
    champions: ['Draven', 'Draven', 'Draven', 'Draven', 'Draven'],
    roles: ['Top', 'Jungle', 'Mid', 'Adc', 'Support'],
  };

  const { getChampionLoadingUrl } = useData();

  const displayChampions =
    selectedChampions && selectedChampions.length > 0
      ? selectedChampions
      : exampleData.champions;

  return (
    <section className="flex">
      {displayChampions?.map((champion, idx) => (
        <div key={idx}>
          <span>{exampleData.roles[idx]}</span>
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
