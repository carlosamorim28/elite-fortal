import { Router } from "next/router";
import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Register(): React.ReactElement{

  const [state,setState] = useState({
    email: '',
    password:''
  })

  const router = useRouter()
  
  async function cadastro(){
    
      fetch('/api/users',{
        headers: { 'Content-Type': 'application/json' },
        method: "POST",
        body: JSON.stringify({email: state.email, password: state.password})
      }).then((user)=>[

        user.json().then((createdUser)=>{    

          console.log("Usuário criado", createdUser)

          alert("Não foi possível criar a conta, verifique se o email já está sendo usado")
       
          router.push('/login')
       
        }).catch((error)=>{
          
          console.log("Error", error)
        
        })

      ]).catch((error)=>{
          
        console.log("Error", error)
      
      })
    
  }
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF', width: '100vw', height:'100vh'}}>

    <div style={{backgroundColor:"#AAA", padding: '5px', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
      
      <p>Digite seu email</p>
      <input type='text' onChange={(event)=>{setState({...state, email: event.target.value})}} />
      <p>Digite sua senha </p>
      <input type='password' onChange={(event)=>{setState({...state, password: event.target.value})}} />
      <button style={{display: 'block'}} onClick={cadastro}>Cadastro</button>
   
    </div>

  </div>
  )
}