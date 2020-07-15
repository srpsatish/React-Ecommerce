import React from 'react'
import './SigninAndsignup.scss'
import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/SignUp'

export const SignInAndSignUpPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
           <SignIn /> 
           <SignUp />
        </div>
    )
}
