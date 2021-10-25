import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// TODO: could these be refactored to not use render props?
export function IsUserRedirect({ user, loggedInPath, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={() => {
        if (!user) {
          // if not signed in, send to requested route (eg Signin, Signup page)
          return children
        }

        if (user) {
          // if signed in, redirect to relevant page (eg Browse)
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          )
        }

        return null
      }}
    />
  )
}

// essentially the reverse of IsUserRedirect
export function ProtectedRoute({ user, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        if (user) {
          return children
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: 'signin',
                state: { from: location },
              }}
            />
          )
        }

        return null
      }}
    />
  )
}

// without using render props
// export function IsUserRedirect({ user, loggedInPath, children, ...restProps }) {
//   return (
//     <Route {...restProps}>
//       {!user ? (
//         children
//       ) : (
//         <Redirect
//           to={{
//             pathname: loggedInPath,
//           }}
//         />
//       )}
//     </Route>
//   )
// }
