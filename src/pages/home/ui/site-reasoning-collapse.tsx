import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { Separator } from '@/ui/separator';

export const SiteReasoningCollapse = () => {
  return (
    <Collapsible className="bg-accent text-card-foreground flex flex-col rounded-xl border shadow-sm">
      <CollapsibleTrigger className="group flex w-full items-center justify-between p-6 py-3">
        <h3 className="flex items-center gap-2 text-left text-sm font-semibold">
          i actually wasn't planning on doing the site{' '}
        </h3>
        <span className="text-muted-foreground ml-auto font-thin">why?</span>
        <ChevronDown className="text-muted-foreground h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent className="p-6 py-3 pt-0">
        <Separator className="bg-muted-foreground mb-3" />
        <aside>
          <p>
            i've never thought about how people customize their github profiles
            until i've tried a "profile generator" myself and realized the
            widgets they create are just hosted on vercel so i went and did all
            this myself
          </p>
          <br />
          <p>
            aaand only after my first deploy i realized all the stuff that i've
            seen hosted on vercel is literally just svg images and there's no
            way github allowing users to embed iframes on their profiles
          </p>
          <br />
          😭😭😭
          <br />
          <span>kinda should've known</span>
        </aside>
      </CollapsibleContent>
    </Collapsible>
  );
};
