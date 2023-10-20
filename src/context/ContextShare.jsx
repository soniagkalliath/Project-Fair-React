import React,{useState,createContext} from 'react'
export const loginData = createContext()
export const userContex = createContext()

function ContextShare({children}) {
  //register data
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [userData,setUserData] = useState("")
  return (
    <>
      <loginData.Provider value={{ isLoggedIn,setIsLoggedIn }}>
      <userContex.Provider value={{userData,setUserData}}>
        {children}
      </userContex.Provider>
      </loginData.Provider>
    </>
  );
}

export default ContextShare