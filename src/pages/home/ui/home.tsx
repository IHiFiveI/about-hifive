import Marquee from "react-fast-marquee";
import { GREETINGS } from "../lib/greetings";
import { AboutMeCard } from "./about-me-card";
import { ModeToggle } from "@/ui/mode-toggle";

export const Home = () => {
  return (
    <>
      <Marquee className="scroll-m-20 text-primary overflow-hidden text-center font-extrabold tracking-tight text-balance text-4xl  flex gap-4 [&_.rfm-child]:pr-4">
        {GREETINGS}
      </Marquee>
      <div className="flex flex-col gap-8 p-8">
        <AboutMeCard />
        <div className="flex gap-4">
          You can switch the theme at any time:
          <ModeToggle />
        </div>
        <span>
          The theme was taken from:{" "}
          <a href="https://tweakcn.com/" className="underline text-primary">
            https://tweakcn.com/
          </a>
        </span>
      </div>
    </>
  );
};
