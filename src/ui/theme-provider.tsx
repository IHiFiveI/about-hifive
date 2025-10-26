import { createContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
};

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);

const updateTheme = (themeClassName: Exclude<Theme, 'system'>) => {
  const root = window.document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(themeClassName);

  const faviconList = window.document.querySelectorAll('link[data-favicon]');

  for (const favicon of faviconList) {
    const currentHref = favicon.getAttribute('href');

    if (!currentHref) {
      continue;
    }

    const temporaryThemeString = '!';

    const newHref = currentHref
      .replaceAll('light', temporaryThemeString)
      .replaceAll('dark', temporaryThemeString)
      .replaceAll(temporaryThemeString, themeClassName);

    favicon.setAttribute('href', newHref);
  }
};

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'about-hifive-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    if (theme === 'system') {
      const colorSchemeMedia = window.matchMedia(
        '(prefers-color-scheme: dark)'
      );

      const handleThemeUpdate = () => {
        const systemTheme = colorSchemeMedia.matches ? 'dark' : 'light';

        updateTheme(systemTheme);
      };

      colorSchemeMedia.addEventListener('change', handleThemeUpdate);

      handleThemeUpdate();

      return () => {
        colorSchemeMedia.removeEventListener('change', handleThemeUpdate);
      };
    }

    updateTheme(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
