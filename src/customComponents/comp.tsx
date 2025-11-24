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
    <section className="flex gap-4 border-2 py-2 px-4 rounded-md">
      {displayChampions?.map((champion, idx) => (
        <div key={idx}>
          <span>{exampleData.roles[idx]}</span>
          <div className="border-2 overflow-hidden rounded-sm">
            <img
              key={idx}
              src={getChampionLoadingUrl(champion)}
              alt={`${champion} Loading screen img`}
              className="w-full h-full object-cover scale-120"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Comp;
