import { generateTheme, Theme } from '@/colors/colors';


export const BRIDGE_THEME_STORAGE_KEY = 'bridge-theme';

export interface ThemeStoreState {
    theme: Theme;

    setTheme: (theme: Theme) => void;
    getTheme: () => Theme;
}

const themeStore = (
  set: (params: Partial<ThemeStoreState>) => void,
  get: () => ThemeStoreState,
) =>({

    theme: generateTheme(),

    setTheme: (theme: Theme) => {
      set({ theme });
    },

    getTheme: () => {
        return get().theme;
    }
})


export default themeStore;