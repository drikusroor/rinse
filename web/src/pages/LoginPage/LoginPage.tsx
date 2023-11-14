import { useRef, useState } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import classNames from 'src/lib/class-names'

const WELCOME_MESSAGE = 'Welcome back!'
const REDIRECT = routes.playOverview()

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const emailRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    setIsLoggingIn(true)
    const response = await logIn({
      username: data.email,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success(WELCOME_MESSAGE)

      navigate(REDIRECT)
    }

    setIsLoggingIn(false)
  }

  const PasswordForm = () => (
    <Form onSubmit={onSubmit} className="rw-form-wrapper">
      <Label
        name="email"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        Email
      </Label>
      <TextField
        name="email"
        className={classNames('rw-input', isLoggingIn ? 'bg-gray-100' : '')}
        disabled={isLoggingIn}
        errorClassName="rw-input rw-input-error"
        ref={emailRef}
        autoFocus
        validation={{
          required: {
            value: true,
            message: 'Email is required',
          },
        }}
      />

      <FieldError name="email" className="rw-field-error" />

      <Label
        name="password"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        Password
      </Label>
      <PasswordField
        name="password"
        className={classNames('rw-input', isLoggingIn ? 'bg-gray-100' : '')}
        disabled={isLoggingIn}
        errorClassName="rw-input rw-input-error"
        autoComplete="current-password"
        validation={{
          required: {
            value: true,
            message: 'Password is required',
          },
        }}
      />

      <div className="rw-forgot-link">
        <Link to={routes.forgotPassword()} className="rw-forgot-link">
          Forgot Password?
        </Link>
      </div>

      <FieldError name="password" className="rw-field-error" />

      <div className="rw-button-group">
        <Submit
          className={`rw-button rw-button-blue transition-opacity ${
            isLoggingIn ? 'animate-bounce cursor-wait opacity-50' : ''
          }}`}
          disabled={isLoggingIn}
        >
          Login
        </Submit>
      </div>
    </Form>
  )

  const formToRender = () => {
    return <PasswordForm />
  }

  const linkToRender = () => {
    return (
      <div className="rw-login-link">
        <span>Don&apos;t have an account?</span>{' '}
        <Link to={routes.signup()} className="rw-link">
          Sign up!
        </Link>
      </div>
    )
  }

  return (
    <>
      <MetaTags title="Login" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Login</h2>
            </header>

            <div className="rw-segment-main">
              <div className="rw-form-wrapper">{formToRender()}</div>
            </div>
          </div>
          {linkToRender()}
        </div>
      </main>
    </>
  )
}

export default LoginPage
