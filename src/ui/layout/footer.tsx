import { RestrictedWidthWrapper } from './restricted-width-wrapper';
import { Github } from '../icons/github';
import { HeadHunter } from '../icons/head-hunter';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground/80 flex justify-center p-4">
      <RestrictedWidthWrapper className="flex-row items-center justify-between">
        <span>© 2025-present</span>
        <ul className="flex gap-2">
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
            <a
              title="HeadHunter"
              target="_blank"
              href="https://novosibirsk.hh.ru/resume/79eb7b49ff0f8343700039ed1f507759633542"
            >
              <HeadHunter className="size-8" />
            </a>
          </li>
        </ul>
      </RestrictedWidthWrapper>
    </footer>
  );
};
