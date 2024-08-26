
import {ThemeProvider} from "next-themes"


export function Provider({children}){
    return(
        // ensure you pass the attribute prop
        <ThemeProvider attribute="class">
            {children}
        </ThemeProvider>
    )
}