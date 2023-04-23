import { UserContext } from '@/contexts/UserContext'
import { Users } from '@prisma/client'
import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router'

export default function Login(): React.ReactElement {
  
  const {userContext ,setUserContext } = useContext(UserContext)
  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const router = useRouter();

  async function login (): Promise<void>{

      fetch('/api/login',{
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: state.email, password: state.password })
      }).then((loggedUser)=>{
        
        loggedUser.json().then((user)=>{
          
          setUserContext(user)
          
          router.push('/home')
        
        }).catch((error)=>{
          
          console.log("Error", error)
        
        })
      
      }).catch((error)=>{
          
        console.log("Error", error)
      
      })

  }
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF', width: '100vw', height:'100vh'}}>

      <div style={{backgroundColor:"#AAA", padding: '5px', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
        <p>Digite seu email</p>
        <input type='text' onChange={(event)=>{setState({...state, email: event.target.value})}} />
        <p>Digite sua senha</p>
        <input type='password' onChange={(event)=>{setState({...state, password: event.target.value})}} />
        <button style={{display: 'block'}} onClick={login}>Logar</button>
        <button style={{display: 'block'}} onClick={()=>{ router.push('/register') }}>Cadastrar</button>
      </div>

    </div>
  )

}