import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Users, Share2, Zap } from 'lucide-react';

const Info = () => {
  const infoContent = {
    title: ['Create Custom Comps', 'Share & Collaborate', 'Quick Analysis'],
    description: [
      'Create team compositions for clash, ranked duos, or casual five-man teams. Build, test, and refine your strategies.',
      'Share your compositions with teammates and the community. Discuss strategies, get feedback, and collaborate on the perfect team.',
      'Analyze champion synergies, role matchups, and team win conditions. Get insights to improve your team compositions.',
    ],
  };

  const icons = [Users, Share2, Zap];

  return (
    <section className="flex flex-col gap-4 items-center w-full">
      <h1 className="text-4xl font-bold pt-8">Everything you need</h1>
      <p className="text-foreground/80">
        A tool for ranked nerds, clash abusers and casual players
      </p>

      <section className="w-[90%] flex justify-center gap-6">
        {infoContent.title.map((title, idx) => {
          const IconComponent = icons[idx];
          return (
            <Card key={idx} className="w-1/4 border-foreground/20">
              <CardHeader>
                <CardTitle className="text-xl flex gap-6 items-center">
                  <span>{title}</span>
                  <div className="bg-accent p-2 rounded">
                    <IconComponent size={20} />
                  </div>
                </CardTitle>
                <CardDescription className="text-foreground/80">
                  {infoContent.description[idx]}
                </CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </section>
    </section>
  );
};

export default Info;
