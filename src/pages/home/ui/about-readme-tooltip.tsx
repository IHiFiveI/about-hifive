import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/tooltip";
import { Info } from "lucide-react";

export const AboutReadmeTooltip = () => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Info />
      </TooltipTrigger>
      <TooltipContent>
        <aside className="max-w-[300px]">
          <h3>And what is that?</h3>
          <p>
            i've never thought about how people customize their github profiles
            until i've tried a "profile generator" myself and realized the
            widgets they create are just hosted on vercel so i went and did all
            this myself
          </p>
        </aside>
      </TooltipContent>
    </Tooltip>
  );
};
