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
    <div className={`${styles.card} ${inView ? styles.inView : ''}`} ref={cardRef} style={{
      animationDelay: `${props.delay}ms`,
    }}>
      <header>
        <Image
          src={props.image}
          alt={'FaqCard-image'}
          width={42}
          height={42}
        />
        <div>
          <h1>{props.name}</h1>
          <p>{props.job}</p>
        </div>
      </header>
      <p>
        {props.description}
      </p>
    </div>
  )
}
