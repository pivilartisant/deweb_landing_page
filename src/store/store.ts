
import { create } from "zustand";
import themeStore, { ThemeStoreState } from "./themeStore";

export const useThemeStore = create<ThemeStoreState>((set, get) => ({
  ...themeStore(set, get),
}));

