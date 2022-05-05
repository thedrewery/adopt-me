import { createContext } from "react";

//const [theme, setTheme] = useState("darkblue")

const ThemeContext = createContext(["darkblue", () => { }]);

export default ThemeContext;