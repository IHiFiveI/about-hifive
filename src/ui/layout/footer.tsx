import { RestrictedWidthWrapper } from './restricted-width-wrapper';
import { Github } from '../icons/github';
import { HeadHunter } from '../icons/head-hunter';
import { LinkedIn } from '../icons/linkedin';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import { useTranslation } from 'react-i18next';
import { Anchor } from '../anchor';

export const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-secondary text-secondary-foreground/80 flex justify-center p-4">
      <RestrictedWidthWrapper className="flex-row items-center justify-between">
        <span>{t('footer.copyright')}</span>
        <ul className="flex items-center gap-4 sm:gap-2">
          <li>
            <a
              title="Github"
              target="_blank"
              href="https://github.com/IHiFiveI"
            >
              <Github className="size-8" />
            </a>
          </li>
          <li className="size-8">
            <Popover>
              <PopoverTrigger type="button" aria-haspopup="dialog">
                <HeadHunter className="size-8 cursor-pointer" />
              </PopoverTrigger>
              <PopoverContent>
                {t('footer.ifYouReallyInterested')}{' '}
                <Anchor href="mailto:np.reachout+work@gmail.com">
                  np.reachout+work@gmail.com
                </Anchor>{' '}
                {t('footer.thanks')}
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
