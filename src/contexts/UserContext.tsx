import { Users } from "@prisma/client";
import { ReactNode, createContext } from "react";

import React,{useState} from "react";

export const UserContext = createContext({userContext:{
  created_at:new Date(),
  email:'',
  password:'',
  rule:'',
  updated_at:new Date()
} ,
setUserContext:(user: Users)=>{}})


export const UserProvider = ({children}: {children: ReactNode}) => {
  const [userContext, setUserContext] = useState({id:0,
    created_at:new Date(),
    email:'',
    password:'',
    rule:'',
    updated_at:new Date()})
  
  return(
    <UserContext.Provider value={{userContext, setUserContext }}  >
      {children}
    </UserContext.Provider>
  )
}
