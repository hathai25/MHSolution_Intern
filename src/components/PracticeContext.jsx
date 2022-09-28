import { useState } from "react";
import {createContext, useContext} from "react";

// blue is the default value
const ThemeContext = createContext("blue")
const BackgroundContext = createContext("red")

function Toolbars() {
    return(
        <div style={{margin: "10px"}}>
            <MiddleMan/>
        </div>
        
    )
}



function MiddleMan() {
    const useBackgroundContext = useContext(BackgroundContext)
    return(
        <div style={{backgroundColor: `${useBackgroundContext}`}}>
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
        <button 
            style={{color: `${theme}`, margin: "10px",
                    borderRadius: "15px", backgroundColor: "",
                    width: "150px", padding: "10px", border: "none"
        }}>
            Test button
        </button>
    )
}

const PracticeContext = () => {
    const [theme, setTheme] = useState('')
    const [bg, setBg] = useState('')
    return(
        <ThemeContext.Provider value={theme}>
            <BackgroundContext.Provider value={bg}>
                <input 
                    placeholder="Change below component color" 
                    style={{marginTop: "10px", padding: "10px", borderRadius: "20px", width: "250px"}} 
                    onChange={e => {
                        setTheme(e.target.value)
                        setBg(e.target.value)
                    }}
                />
                <Toolbars />
            </BackgroundContext.Provider>    
        </ThemeContext.Provider>
    )
}

export default PracticeContext