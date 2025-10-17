import React, { createContext, useContext, useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

const FirebaseContext = createContext()

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
}

let app, auth

export function FirebaseProvider({ children }){
  if(!app) app = initializeApp(firebaseConfig)
  if(!auth) auth = getAuth()
  const [user, setUser] = useState(null)

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, u => setUser(u))
    return () => unsub()
  },[])

  async function logout(){ if(auth) await signOut(auth) }

  return (
    <FirebaseContext.Provider value={{ user, logout }}>
      {children}
    </FirebaseContext.Provider>
  )
}

export function useAuth(){
  return useContext(FirebaseContext)
}
