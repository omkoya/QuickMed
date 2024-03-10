import React, {createContext} from 'react';

export const Contexts = React.createContext();

const AllContexts = ( { children }) => {

    return(

        <Contexts.Provider value={ {} } >
            { children }
        </Contexts.Provider>
    )
}
