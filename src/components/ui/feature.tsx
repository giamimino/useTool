'use client'
import React, { useEffect, useRef, useState } from 'react'
import styls from './style.module.scss'
import { Icon } from '@iconify/react/dist/iconify.js'

type Props = {
  icon: string,
  text: string,
  direction: 'slideUp' | 'slideLeft' | 'slideRight'
}

export default function Feature(props: Props) {
  const [inView, setInView] = useState(false)
  const featureCart = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if(featureCart.current) {
      observer.observe(featureCart.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className={`flex flex-col justify-center items-center gap-4
    text-center w-full opacity-0 mb-auto ${inView ? styls[props.direction] : ''}`} ref={featureCart}>
      <Icon icon={props.icon} className='text-white/25 text-3xl' />
      <p className='text-center'>{props.text}</p>
    </div>
  )
}
