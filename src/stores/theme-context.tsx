"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export interface ThemeContextType {
  theme: string;
  changeTheme: (newTheme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("dark");

  const rawSetTheme = (newTheme: string) => {
    const root = window.document.documentElement;

    // Remove the old theme, if it exists, else remove the default theme
    root.classList.remove(localStorage.getItem("color-theme") || "dark");
    root.classList.add(newTheme);

    localStorage.setItem("color-theme", newTheme);
  };

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
};
