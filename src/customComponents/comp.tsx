'use client';
import { cn } from '@/lib/utils';
import { useData } from '@/hooks/useData';

interface CompProps extends React.ComponentProps<'section'> {
  selectedChampions?: string[];
}

const Comp = ({ selectedChampions, className, ...props }: CompProps) => {
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
    <section
      className={cn('flex gap-4 border-2 py-2 px-4 rounded-md', className)}
      {...props}
    >
      {displayChampions?.map((champion, idx) => (
        <div key={idx}>
          <span className="font-semibold uppercase">
            {exampleData.roles[idx]}
          </span>
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
