'use client';
import { cn } from '@/lib/utils';
import { useData } from '@/hooks/useData';

interface CompProps extends React.ComponentProps<'section'> {
  selectedChampions?: string[];
  compName?: string;
  compDescription?: string;
}

const Comp = ({
  selectedChampions,
  className,
  compName,
  compDescription,
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
      className={cn(
        'border-2 border-foreground/20 py-2 px-4 rounded-md flex flex-col gap-2',
        className
      )}
      {...props}
    >
      <h3 className="text-xl text-accent italic font-semibold underline">
        {compName}
      </h3>
      <section className="flex gap-4">
        {displayChampions?.map((champion, idx) => (
          <div key={idx}>
            <span className="font-semibold capitalize">
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
      <p>
        <span className="pr-1">Description:</span>
        {compDescription
          ? compDescription
          : 'WINS EVERY GAME NO DESCRIPTION NEEDED'}
      </p>
    </section>
  );
};

export default Comp;
