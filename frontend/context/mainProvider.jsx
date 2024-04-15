import React, { createContext, useContext } from 'react'
export const mainContext = createContext()

const MainProvider = ({children}) => {
    return (
        <mainContext.Provider value={{}}>
        </mainContext.Provider>
    )
}

export default MainProvider