import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { AboutReadmeTooltip } from "./about-readme-tooltip";

export const AboutMeCard = () => {
  return (
    <Card className="bg-secondary text-secondary-foreground">
      <CardHeader>
        <CardTitle>Whoami</CardTitle>
        <CardAction>
          <AboutReadmeTooltip />
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>
          My name is Nikita, I am a React frontend developer with 4+ years of
          experience. Im looking forward to writing a lot of text there but for
          now i'll just put lorem there: Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </CardContent>
    </Card>
  );
};
