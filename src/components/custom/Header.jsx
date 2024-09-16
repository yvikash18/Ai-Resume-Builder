import React from 'react'
import { Button } from '../ui/button'

export default function Header() {
  return (
    <div className='p-3 px-5 flex justify-between shadow-md'>
        <img src="/logo.svg" width={100} height={100}/>
        <Button>Get Started</Button>
    </div>
  )
}
