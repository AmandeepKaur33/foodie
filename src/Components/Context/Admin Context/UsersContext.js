import React, { Children, createContext } from "react";

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
    return <UsersContext.Provider>
        { children }
    </UsersContext.Provider>
}

export {UsersContext,UsersProvider}