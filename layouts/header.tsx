import { ThemeToggle } from '@components/ui/theme-toggle'
import React from 'react'

const Header = () => {
  return (
    <header className='layout flex items-center justify-between'>
      <h4 className='text-xs font-medium xl:text-xl'>
        Codemelt Nextjs Starter Kit
      </h4>
      <ThemeToggle />
    </header>
  )
}

export default Header
