import { createContext } from "react";

// Creating a context for theme management

const ThemeContext  = createContext({
    theme: "light", 
    toggleTheme: () => {}
})


export default ThemeContext;
