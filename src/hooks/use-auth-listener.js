import { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../context/firebase'

export default function useAuthListener() {
  // initialize state with value from localStorage, if exists
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')))
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    console.log('auth hook useEffect fired')
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // if logged in, put user into localStorage
        localStorage.setItem('authUser', JSON.stringify(authUser))
        setUser(authUser)
      } else {
        // if not logged in, remove user from localStorage
        localStorage.removeItem('authUser')
        setUser(null)
      }
    })

    return () => listener() // clean-up function
  }, [firebase])

  //   console.log({ user })

  // why return as object only to destructure back out on import in app.js?
  return { user }
}
