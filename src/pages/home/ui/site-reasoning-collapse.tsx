import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { Separator } from '@/ui/separator';
import { useTranslation } from 'react-i18next';
import { analytics } from '@/app/firebase';
import { logEvent } from 'firebase/analytics';

export const SiteReasoningCollapse = () => {
  const { t } = useTranslation('home');

  return (
    <Collapsible
      className="bg-accent text-card-foreground flex flex-col rounded-xl border shadow-sm"
      onClick={() => {
        // TODO: Remove temporary logging
        console.log('event logged');
        logEvent(analytics, 'site_reasoning_opened');
      }}
    >
      <CollapsibleTrigger className="group flex w-full items-center justify-between p-6 py-3">
        <h3 className="mr-4 flex items-center text-left text-sm font-semibold">
          {t('siteReasoning.iWasntPlanningOnDoingIt')}
        </h3>
        <span className="text-muted-foreground ml-auto font-thin">
          {t('siteReasoning.why')}
        </span>
        <ChevronDown className="text-muted-foreground h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent className="p-6 py-3 pt-0">
        <Separator className="bg-muted-foreground mb-3" />
        <aside>
          <p>{t('siteReasoning.iveNeverThoughtAboutCustomization')}</p>
          <br />
          <p>{t('siteReasoning.andOnlyAfterThat')}</p>
          <br />
          😭😭😭
          <br />
          <span>{t('siteReasoning.kindaShouldveKnown')}</span>
        </aside>
      </CollapsibleContent>
    </Collapsible>
  );
};
