import React from 'react'

export default function Footer() {
  return (
    <footer className={'w-[100%] mt-18 mb-12'}>
      <div className='flex border-b border-solid border-[rgba(255,255,255,0.1)]
      pb-2 gap-3'>
        <p className='cursor-pointer'>Terms & Conditions</p>
        <p className='cursor-pointer'>Privacy & Policy</p>
      </div>
      <p className='pt-2'>Original content © usetool.bar. This version customized and hosted by Gia Miminoshvili.</p>
    </footer>
  )
}