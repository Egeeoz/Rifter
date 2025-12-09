import { Button } from '@/components/ui/button';
import { Sparkles, BadgeDollarSign } from 'lucide-react';
import Comp from '../comp';

const Hero = () => {
  return (
    <div className="flex flex-col max-w-screen items-center md:flex-row md:w-[95%] m-auto pt-10">
      <section className="flex flex-col md:gap-8 md:w-2/4 w-[95%] pb-8 gap-6">
        <span className="border-1 rounded-xl px-4 py-1 text-xs flex w-fit items-center gap-1.5">
          <Sparkles size={15} color="#FF7518" />
          Join in on building a new league of legends community
        </span>
        <h1 className="text-4xl md:text-left md:text-6xl font-bold">
          Create, customize <br /> and share your own <br />
          compositions
        </h1>
        <p className="w-3/4 text-foreground/80 text-lg">
          A creative space to build your next clash composition or ranked flex
          comp, share your ideas with others, discuss have fun
        </p>
        <section className="flex gap-4">
          <Button className="rounded-sm bg-accent hover:bg-accent/80 text-background text-lg py-5">
            Create your comp
          </Button>
          <Button className="rounded-sm text-lg bg-inherit border-1 border-border/60 py-5 hover:bg-background hover:text-foreground/80 ">
            Learn more
          </Button>
        </section>
        <section>
          <span className="flex items-center gap-1.5 text-sm">
            <BadgeDollarSign size={18} color="#1847c9" />
            Completely Free
          </span>
          {/* Add current users & total comps here in future when data exists (hopefully) */}
        </section>
      </section>
      {/*  */}
      <section className="md:w-2/4 w-[95%]">
        <h2 className="text-2xl font-semibold pb-1 text-center md:text-left">
          Comp of the month
        </h2>
        <section>
          <Comp className="bg-card" compName="BEST TEAM EVER" />
        </section>
      </section>
    </div>
  );
};

export default Hero;
