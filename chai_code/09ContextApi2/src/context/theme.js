import {createContext, useContext} from 'react';

export const ThemeContext = createContext({
    theme: 'light',
    darkTheme: () => {},    
    lightTheme: () => {}
})         // Create a context
// Add values to the context

export const ThemeProvider = ThemeContext.Provider;
// Create a provider


// To avaoid two imports in every file
// create a custom hook

export const useTheme = () => {
    return useContext(ThemeContext);        // context is returned
}

// Import the function and you get the context directly