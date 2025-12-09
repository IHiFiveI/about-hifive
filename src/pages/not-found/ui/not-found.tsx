import { useTranslation } from 'react-i18next';

export const NotFound = () => {
  const { t } = useTranslation('common');

  return (
    <section className="text-primary flex h-full flex-wrap-reverse items-center justify-center px-5">
      <p className="w-64">
        {t('404.thePageNoLongerThere')}
        <br />
        {t('404.movedOrWasntPresent')}
      </p>
      <span className="text-sideways rotate-180 overflow-hidden text-[16rem] leading-none">
        404
      </span>
    </section>
  );
};
