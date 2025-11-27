import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Users } from 'lucide-react';

const Info = () => {
  const infoContent = {
    title: ['Create Custom comps', 'Placeholder 1', 'Placeholder 2'],
    description: [
      ' Create team compositions for clash, for your duo Q in ranked or just a five man team',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dignissimos deleniti, sunt vel ducimus qui?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dignissimos deleniti, sunt vel ducimus qui?',
    ],
  };

  return (
    <section className="flex flex-col gap-4 items-center w-full">
      <h1 className="text-4xl font-bold pt-8">Everything you need</h1>
      <p className="text-foreground/80">
        A tool for ranked nerds, clash abusers and casual players
      </p>

      <section className="w-[90%] flex justify-center gap-6">
        {infoContent.title.map((title, idx) => (
          <Card key={idx} className="w-1/4 border-foreground/20">
            <CardHeader>
              <CardTitle className="text-xl flex gap-6 items-center">
                <span>{title}</span>
                <div className="bg-accent p-2 rounded">
                  <Users size={20} />
                </div>
              </CardTitle>
              <CardDescription className="text-foreground/80">
                {infoContent.description[idx]}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>
    </section>
  );
};

export default Info;
