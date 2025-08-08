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
    <div className={`${styls.feature} ${inView ? styls[props.direction] : ''}`} ref={featureCart}>
      <Icon icon={props.icon} />
      <p>{props.text}</p>
    </div>
  )
}
