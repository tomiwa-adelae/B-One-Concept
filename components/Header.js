import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
        <div className="header-container">
           <div className="left">
            <Link className='text-primary' href='/'>
                    <div className="logo">
                        <h4>B.one </h4> <h5>Concept</h5>
                    </div>
                </Link>
                <div className="links">
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/service'>Services</Link>
                </div>
           </div>
           <div className="right">
                <Link href='/contact'>
                    <div className="btn btn-primary">Contact Us</div>
                </Link>
           </div>
          
        </div>
    </header>
  )
}

export default Header