import { createContext, useContext, useState  } from "react";

const Global = createContext()

export const StateManager = ({children})=>{
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('')

    console.log('this is name:', user)
    return(
        <Global.Provider value={{
            user, setUser,
            email, setEmail
        }}>
            {children}
        </Global.Provider>
    )

}

export const CallContext = ()=> useContext(Global);