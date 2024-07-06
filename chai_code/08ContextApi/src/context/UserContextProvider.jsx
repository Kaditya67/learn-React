// Store

import { useState } from "react"
import userContext from "./UserContext"

// eslint-disable-next-line react/prop-types
export default function UserContextProvider({children}) {
    const [user,setUser]=useState(null)
  return (
    <userContext.Provider value={{user,setUser}}>
      {children}
    </userContext.Provider>
  )
}
