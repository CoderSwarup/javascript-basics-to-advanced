import React, { ReactNode, createContext, useState } from "react";

import "./App.css";
import Box from "./Componnt/Box";
import Generics from "./Componnt/Generics";
import Context from "./Componnt/Context";

//interface
interface Person {
  name: string;
  age: number;
}

// Create a Context

type ThemeType = "light" | "dark";

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function App() {
  const [val, setVal] = useState<string>("");
  const [person, setperson] = useState<Person>();

  const SubmitHanlder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(person);
  };
  return (
    <>
      <h2>How To Pass The Props</h2>
      <Box
        heading="String"
        fun={() => {
          // alert("iou");
        }}
      >
        <h1>sfjksdj</h1>
      </Box>

      <hr />
      <h2>Generic In React</h2>
      <Generics head="HEAD" value={val} setter={setVal}></Generics>

      <hr />
      <h2>Form With Interface</h2>
      <form action="" onSubmit={SubmitHanlder}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={person?.name || ""}
          onChange={(e) => {
            setperson((prev) => ({ ...prev!, name: e.target.value }));
          }}
        />
        <input
          type="number"
          name="age"
          placeholder="Enter age"
          value={person?.age || ""}
          onChange={(e) => {
            setperson((prev) => ({ ...prev!, age: Number(e.target.value) }));
          }}
        />
        <button>Submit</button>
      </form>

      {/* context Provider */}
      <hr />
      <h2>Context Api in React TypeScript</h2>
      <ThemeProvider>
        <Context />
      </ThemeProvider>
    </>
  );
}

export default App;
