'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './style.module.scss'

type Props = {
  image: string,
  job: string,
  name: string,
  description: string,
  delay: number
}

export default function CommentCard(props: Props) {
  const [inView, setInView] = useState(false)
  const cardRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      }, { threshold: 0.3 }
    )

    if(cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      observer.disconnect()
    }
  })

  return (
    <div className={`flex flex-col bg-white/3 rounded-4xl
      px-6 py-6.25 max-w-80 gap-3.5 h-fit opacity-0 ${inView ? styles.inView : ''}`} ref={cardRef} style={{
      animationDelay: `${props.delay}ms`,
    }}>
      <header className='flex gap-1.5 text-center'>
        <Image
          src={props.image}
          alt={'FaqCard-image'}
          width={42}
          height={42}
          priority
        />
        <div className='flex flex-col'>
          <h1 className='text-white'>{props.name}</h1>
          <p className='text-3.5'>{props.job}</p>
        </div>
      </header>
      <p>
        {props.description}
      </p>
    </div>
  )
}
