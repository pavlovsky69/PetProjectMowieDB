import {createContext, useState} from "react";

const Context= createContext(null)


const ContextProvider = ({children}) => {
    const [context, setContext]=useState(null)
    return (
        <div>
            <ContextProvider value={{context, setContext}}>
                {children}
            </ContextProvider>
        </div>
    );
};

export {ContextProvider};