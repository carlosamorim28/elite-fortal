import { UserContext } from "@/contexts/UserContext";
import React, { useContext } from "react";
export default function Home(): React.ReactElement {
  const {userContext} = useContext(UserContext)
  return(
    <div style={{display:'flex', justifyContent:'center',alignItems:'center', width:'100vw', height:'100vh', flexDirection: 'column'}}>
      <p>Usuário logadp</p>
      <p>email: {userContext.email}</p>
      <p>Senha: {userContext.password}</p>
    </div>
  )
}