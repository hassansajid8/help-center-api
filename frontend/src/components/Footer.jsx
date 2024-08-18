import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white p-16">
      <div className="grid md:grid-cols-5 grid-cols-1">
        <div>
          <h4 className="">Abstract</h4>
          <ul>
            <li><a href='/'>Branches</a></li>
          </ul>
        </div>
        <div>
          <h4 className="">Resources</h4>
          <ul>
            <li><a href='/'>Blog</a></li>
            <li><a href='/'>Help Center</a></li>
            <li><a href='/'>Release Notes</a></li>
            <li><a href='/'>Status</a></li>
          </ul>
        </div>
        <div>
          <h4 className="">Community</h4>
          <ul>
            <li><a href='/'>Twitter</a></li>
            <li><a href='/'>LinkedIn</a></li>
            <li><a href='/'>Facebook</a></li>
            <li><a href='/'>Dribbble</a></li>
            <li><a href='/'>Podcast</a></li>
          </ul>
        </div>
        <div>
          <h4 className="">Company</h4>
          <ul>
            <li><a href='/'>About Us</a></li>
            <li><a href='/'>Careers</a></li>
            <li><a href='/'>Legal</a></li>
          </ul>
          <h4 className='text-lg'>Contact Us</h4>
          <p className='text-[0.9rem]'>info@abstract.com</p>
        </div>
        <div className='self-end pt-36'>
          <div className='w-8 h-8 bg-white rounded-xl'></div>
          <p className="mt-4">© Copyright 2022</p>
          <p>Abstract Studio Design, Inc.</p>
          <p>All rights reserved</p>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer