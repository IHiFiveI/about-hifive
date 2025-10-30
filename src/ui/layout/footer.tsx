import { RestrictedWidthWrapper } from './restricted-width-wrapper';
import { Github } from '../icons/github';
import { HeadHunter } from '../icons/head-hunter';
import { LinkedIn } from '../icons/linkedin';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground/80 flex justify-center p-4">
      <RestrictedWidthWrapper className="flex-row items-center justify-between">
        <span>© 2025-present</span>
        <ul className="flex gap-4 sm:gap-2">
          <li>
            <a
              title="Github"
              target="_blank"
              href="https://github.com/IHiFiveI"
            >
              <Github className="size-8" />
            </a>
          </li>
          <li>
            <Popover>
              <PopoverTrigger>
                <HeadHunter className="size-8 cursor-pointer" />
              </PopoverTrigger>
              <PopoverContent>
                if you really are interested in my resume, better contact me by
                email\linkedin or with any other methods !
              </PopoverContent>
            </Popover>
          </li>
          <li>
            <a
              title="LinkedIn"
              target="_blank"
              href="https://www.linkedin.com/in/npanin5"
            >
              <LinkedIn className="scale-98 size-8" />
            </a>
          </li>
        </ul>
      </RestrictedWidthWrapper>
    </footer>
  );
};
