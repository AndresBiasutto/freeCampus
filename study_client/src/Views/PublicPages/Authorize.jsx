import { useAuth0 } from "@auth0/auth0-react"

const Authorize = () => {
  const {loginWithRedirect}= useAuth0()
    return (
      <button onClick={loginWithRedirect} >
        Login
      </button>
    )
  }
  
  export default Authorize