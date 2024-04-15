import React, { useContext } from 'react'
export const mainContext = useContext()

const MainProvider = ({children}) => {
    return (
        <mainContext.Provider value={{}}>
        </mainContext.Provider>
    )
}

export default MainProvider