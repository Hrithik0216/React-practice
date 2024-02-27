import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
const LoginButton = () => {
    const { isLoading, isAuthenticated, error, loginWithRedirect } = useAuth0();


    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Oops... {error.message}</div>;
    }
    if (!isAuthenticated) {
        return (
            <>
                <button className="btn btn-primary mx-5 my-5 px-4"
                    onClick={() => loginWithRedirect()}>
                    Log In</button>
            </>
        )
    }
    // if (isAuthenticated) {
    //     return (
    //         <div>
    //             Hello {user.name}{' '}
    //             <button className="btn btn-primary mx-5 my-5 px-4"
    //                 onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
    //                 Log out
    //             </button>
    //         </div>
    //     )
    // }

}

export default LoginButton