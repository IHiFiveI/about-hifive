export const formatTimeByLocale = (time: string, locales: string) =>
  new Date(time).toLocaleDateString(locales, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
