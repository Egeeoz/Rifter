import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

const Info = () => {
  return (
    <section className="flex flex-col gap-4 items-center">
      <h1 className="text-3xl font-bold pt-8">Everything you need</h1>
      <p className="text-foreground/80">
        A tool for ranked nerds, clash abusers and casual players
      </p>

      <section className="w-full flex justify-center">
        <Card className="w-1/3">
          <CardHeader>
            <CardTitle>Create custom comps</CardTitle>
            <CardDescription>
              Create team compositions for clash, for your duo Q in ranked or
              just a five man team
            </CardDescription>
          </CardHeader>
        </Card>
      </section>
    </section>
  );
};

export default Info;
