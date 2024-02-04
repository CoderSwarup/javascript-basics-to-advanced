import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Context() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  //   alert(theme);
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h2>Use Context</h2>
      <button onClick={toggleTheme}>Change theme</button>
    </div>
  );
}
