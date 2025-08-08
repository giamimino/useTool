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
    <div ref={cardRef} className={`${styles.cardWrapper} ${inView? styles.show : ''}`}
      style={{
        "--image-url": `url(${props.image})`,
      } as React.CSSProperties}
    >
      <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  )
}
