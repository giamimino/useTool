'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'

type Props = {
  title: string,
  description: string,
}

export default function FaqCard(props: Props) {
  const [show, setShow] = useState(false)
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
  }, [])

  return (
    <div ref={cardRef} className={`${styles.card} ${show ? styles.show : ''} ${inView ? styles.inView : ""}`} onClick={() => setShow(prev => !prev)}>
      <div>
        <h1>{props.title}</h1>
        <button>
          <span></span>
          <span></span>
        </button>
      </div>
      <main className={`${styles.description} ${show ? styles.open : ''}`}>
        <p>{props.description}</p>
      </main>
    </div>
  )
}
