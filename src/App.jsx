import Register from "./Register"
import axios from "axios"
import { userContext, UserContextProvider } from "./UserContext";
import { useContext } from "react";
import Routes from "./Routes";

function App() {
  axios.defaults.baseURL='https://chat-backened.onrender.com/'
  axios.defaults.withCredentials=true;
  
  return (
    
    <UserContextProvider >
      <Routes/>      
    </UserContextProvider>
  )
}

export default App;