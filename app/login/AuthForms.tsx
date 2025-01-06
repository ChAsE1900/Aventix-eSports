'use client'

import { useState } from 'react'
import { Logo } from './Logo'
import { SignUpForm } from './SignUpForm'
import { LoginForm } from './LoginForm'
import { Button } from "@/components/ui/button"

export function AuthForms() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? 'Log In' : 'Sign Up'}
        </h2>
        {isLogin ? <LoginForm /> : <SignUpForm />}
        <div className="mt-4 text-center">
          <Button 
            variant="link" 
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
          </Button>
        </div>
      </div>
    </div>
  )
}