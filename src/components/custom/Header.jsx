import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

export default function Header() {
  const {user,isSignedIn} = useUser()
  return (
    <div className='p-3 px-5 flex justify-between shadow-md'>
        <img src="/logo.svg" width={100} height={100}/>
        {
        isSignedIn?
        <Button>Dashboard</Button>:
        <Link to={"/auth/sign-in"}>
          <Button>Get Started</Button>
        </Link>    
      }
    </div>
  )
}
