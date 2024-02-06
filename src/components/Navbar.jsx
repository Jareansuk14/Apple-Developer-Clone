import React from 'react'

function Navbar() {
  return (
    <div className='bg-[rgba(240,240,240,0.8)] sticky top-0'>
      <nav className='max-w-[980px] mx-auto'>
        <ul className='flex justify-between items-center'>
          <li><a className='max-md:hidden' href="#"><img src="https://developer.apple.com/assets/elements/icons/brandmark/apple-developer-brandmark.svg" width="135px" height="44px" alt="Logo" /></a></li>
          <li><a className='max-md:hidden' href="#">News</a></li>
          <li><a className='max-md:hidden' href="#">Discover</a></li>
          <li><a className='max-md:hidden' href="#">Design</a></li>
          <li><a className='max-md:hidden' href="#">Develop</a></li>
          <li><a className='max-md:hidden' href="#">Distribute</a></li>
          <li><a className='max-md:hidden' href="#">Support</a></li>
          <li><a className='max-md:hidden' href="#">Accocunt</a></li>
          <li><a className='max-md:hidden' href="#"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='44' viewBox='0 0 16 44'%3E%3Cpath d='M15.27 28.29l-4.06-4.06a6.113 6.113 0 0 0 1.35-3.83c0-3.39-2.76-6.15-6.15-6.15-3.39 0-6.15 2.76-6.15 6.15s2.76 6.15 6.15 6.15c1.43 0 2.75-.5 3.8-1.33l4.06 4.06 1-.99zM6.4 25.33a4.93 4.93 0 0 1-4.92-4.92c0-2.71 2.2-4.92 4.92-4.92s4.92 2.21 4.92 4.92c.01 2.71-2.2 4.92-4.92 4.92z' fill='%23666666'/%3E%3C/svg%3E" alt="search" /></a></li>
        </ul>
        <div className='hidden max-md:flex items-center  justify-center p-3 bg-[rgba(240,240,240,0.8)]'>
          <a href="#"><img src="https://developer.apple.com/assets/elements/icons/brandmark/apple-developer-brandmark.svg" width="110px" height="48px" alt="Logo" /></a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
