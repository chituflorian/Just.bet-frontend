import React from 'react'

const Footer = () => {
  return (
    <footer className='layout'>
      <span className='text-xs font-medium xl:text-xl'>
        &copy; {new Date().getFullYear()} Codemelt Nextjs Starter Kit
      </span>
    </footer>
  )
}

export default Footer
