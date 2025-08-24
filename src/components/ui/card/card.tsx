'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'

type Props = {
  title: string,
  description: string,
  image: string,
}

export default function Card(props: Props) {
  const [inView, setInView] = useState(false)
  const cardRef = useRef<HTMLHeadingElement>(null)

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

    if(cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={cardRef} className={`
      w-full h-80 bg-no-repeat
      bg-cover py-6.25 px-7.5
      bg-white/3 rounded-4xl select-none opacity-0
      flex flex-col
      ${inView? styles.show : ''}`}
      style={{ backgroundImage: `url(${props.image})`,
        backgroundPosition: 'right 0 top 0'
      }}
    >
      <div className='mt-auto'>
        <h1 className='text-white 
        text-6.25 font-medium tracking-tighter leading-8'>{props.title}</h1>
        <p className='text-3.5 font-medium leading-5.25 max-w-115'>{props.description}</p>
      </div>
    </div>
  )
}
