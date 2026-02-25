"use client";

import { useEffect } from "react";

type ThemeMode = "dark" | "light";

const STORAGE_KEY = "redm-docs-theme";

export default function ThemeToggle() {
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const initialTheme: ThemeMode = saved === "light" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme: ThemeMode = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  };

    return (
    <button
      type="button"
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      Theme
    </button>
  );
}
