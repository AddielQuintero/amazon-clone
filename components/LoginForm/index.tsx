import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useRouter } from 'next/router'
import { BackToSignIn, Container, RegisterButton, SignInButton } from './styled'
import { auth } from '@/lib/firebase'
import { useAppDispatch } from '@/lib/redux/store/index.store'
import { signIn } from '@/lib/redux/slice/user.slice'

export const LoginForm = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegistering, setIsRegistering] = useState(false)

  const router = useRouter()
  const dispatch = useAppDispatch()

  const loginUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user

        dispatch(
          signIn({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        )
        router.push('/')
      })
      .catch((error) => {
        const errorMessage = error.Message
        console.log('🚀  error.Message:', error.Message)
      })
  }

  const registerUser = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      await updateProfile(user, { displayName: userName })

      dispatch(
        signIn({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      )

      router.push('/')
    } catch (error) {
      console.log('Error al iniciar sesión: ', error)
    }
  }

  return (
    <Container>
      <h1>{isRegistering ? 'Register' : 'Sign In'}</h1>
      <form>
        {isRegistering && (
          <>
            <label htmlFor="userName">User Name</label>
            <input type="text" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
          </>
        )}
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {isRegistering ? (
          <>
            <RegisterButton type="button" onClick={(e) => registerUser(e)}>
              Create Account
            </RegisterButton>
            <BackToSignIn type="button" onClick={() => setIsRegistering(false)}>
              Back to Sign In
            </BackToSignIn>
          </>
        ) : (
          <>
            <SignInButton type="submit" onClick={(e) => loginUser(e)}>
              Sign In
            </SignInButton>
            <p style={{ textAlign: 'center' }}>Or</p>
            <RegisterButton type="button" onClick={() => setIsRegistering(true)}>
              Create your Amazon Account
            </RegisterButton>
          </>
        )}
      </form>
    </Container>
  )
}
