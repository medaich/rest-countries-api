import { Moon } from "lucide-react";
import Wrapper from "./Wrapper";
import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Header = () => {
  const [isDark, setIsDark] = useLocalStorage<boolean>(false, "darkTheme");

  useEffect(() => {
    const doc = document.documentElement;

    const classList = doc.classList;

    if (classList.contains("dark") && !isDark) classList.remove("dark");
    else if (!classList.contains("dark") && isDark) classList.add("dark");
  }, [isDark]);
  return (
    <header className="bg-white dark:bg-dark-blue shadow">
      <Wrapper className="flex items-center justify-between">
        <h1 className="font-[800] text-2xl max-sm:text-base">
          Where in the world?
        </h1>
        <button
          className="flex items-center gap-2"
          onClick={() => setIsDark((isDark) => !isDark)}
        >
          <Moon
            strokeWidth={1.5}
            className="w-6 max-sm:w-4"
            fill={isDark ? "currentColor" : "transparent"}
          />
          {/* <Moon strokeWidth={1.5} className="w-6 max-sm:w-4 fill="currentColor" /> for dark mode */}
          <p>Dark Mode</p>
        </button>
      </Wrapper>
    </header>
  );
};

export default Header;
