'use client';
import { cn } from '@/lib/utils';
import { useData } from '@/hooks/useData';

interface CompProps extends React.ComponentProps<'section'> {
  selectedChampions?: string[];
  compName?: string;
}

const Comp = ({
  selectedChampions,
  className,
  compName,
  ...props
}: CompProps) => {
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
      className={cn('border-2 py-4 px-4 rounded-md', className)}
      {...props}
    >
      <h3 className="text-xl text-accent italic font-semibold underline">
        {compName}
      </h3>
      <section className="flex gap-4">
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
    </section>
  );
};

export default Comp;
