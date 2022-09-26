import { useState } from "react";
import {createContext, useContext} from "react";

// blue is the default value
const ThemeContext = createContext("blue")

function Toolbars() {
    return(
        <div>
            <p>This is Toolbars</p>
            <MiddleMan/>
        </div>
        
    )
}

function MiddleMan() {
    return(
        <div>
            <p>This is MiddleMan</p>
            <ThemedButton />
            <ThemedButton />
            <ThemedButton />
            <ThemedButton />
        </div>
    )
}

function ThemedButton() {
    const theme = useContext(ThemeContext)
    return(
        <button style={{color: `${theme}`, margin: "10px"}}>Test button</button>
    )
}

const Context = () => {
    const [theme, setTheme] = useState('')
    return(
        <ThemeContext.Provider value={theme}>
            <input onChange={e => setTheme(e.target.value)}/>
            <Toolbars />
        </ThemeContext.Provider>
    )
}

export default Context