import { useContext, useEffect } from 'react'
import { authContext } from './context/AuthContexts'
import usePrivateFetch from './hooks/usePrivateFetch'
import './index.css'
import Home from './pages/Home/Home'
function App() {

  const { user, loading, error, dispatch } = useContext(authContext)

  const userID = user?.details._id
  const {data , reFetch } = usePrivateFetch(`/users/${userID}`)

  useEffect(()=>{
    
    if(user){
      reFetch()
    }
  },[])

  return (
    <>
      <Home/>
    </>
  )
}

export default App
