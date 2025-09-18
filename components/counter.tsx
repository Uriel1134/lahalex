"use client"

import { useEffect, useState, useRef } from "react"

interface CounterProps {
  target: number
  duration?: number
  prefix?: string
  suffix?: string
  separator?: string
  className?: string
  startOnVisible?: boolean
}

export function Counter({
  target,
  duration = 2000,
  prefix = "",
  suffix = "",
  separator = ".",
  className = "",
  startOnVisible = true,
}: CounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const counterRef = useRef<HTMLSpanElement>(null)

  // Format number with separator
  const formatNumber = (num: number) => {
    const rounded = Math.floor(num)
    return rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
  }

  // Intersection Observer to detect when counter is visible
  useEffect(() => {
    if (!startOnVisible) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [startOnVisible, hasStarted])

  // Counter animation
  useEffect(() => {
    if (!isVisible || hasStarted) return

    setHasStarted(true)
    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = startValue + (target - startValue) * easeOutQuart

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, target, duration, hasStarted])

  return (
    <span ref={counterRef} className={className}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  )
}
