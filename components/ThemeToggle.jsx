"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <button
      className={`${resolvedTheme === "dark" ? "hover:border-sky-200 hover:bg-sky-200 hover:text-background" : "hover:border-sky-950 hover:bg-sky-950 hover:text-sky-50"} bttn-press-animation inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-muted-foreground px-3 text-xs transition-colors`}
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="size-5" />
      ) : (
        <MoonIcon className="size-5" />
      )}
      <span className="sr-only">Toggle Theme</span>
    </button>
  );
};
export default ThemeToggle;
