import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="flex">
      <section>
        <span className="border-1 rounded-xl px-4 py-1 text-xs flex w-fit items-center gap-1.5">
          <Sparkles size={15} color="#FF7518" />
          Join in on building a new league of legends community
        </span>
        <h1>Create, customize and share your own compositions</h1>
        <p>
          A creative space to build your next clash composition or ranked flex
          comp, share your ideas with others, discuss have fun
        </p>
        <section>
          <Button>Create your comp</Button>
          <Button>Learn more</Button>
        </section>
        <section>
          <span>Completely Free</span>
          {/* Add current users & total comps here in future when data exists (hopefully) */}
        </section>
      </section>
      <section>
        <h2>Comp of the month</h2>
        {/* Insert images of 5 dravens in comp format */}
      </section>
    </div>
  );
};

export default Hero;
