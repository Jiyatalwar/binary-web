"use client"

import React, { useState, useEffect } from 'react'

interface AnimatedCounterProps {
  targetValue: string;
}

const AnimatedCounter = ({ targetValue }: AnimatedCounterProps) => {
  // Extract the numeric target up front
  const numericTarget = parseInt(targetValue.replace(/[^0-9]/g, ''), 10) || 0

  // State now ONLY holds a number type. No more complex type unions!
  const [count, setCount] = useState<number>(numericTarget)
  const [trigger, setTrigger] = useState<number>(0)

  // Loop that runs every 10 seconds to auto-rerun the animation
  useEffect(() => {
    const autoRefreshInterval = setInterval(() => {
      setCount(0) // Clean, unambiguous numeric reset
      setTrigger(prev => prev + 1)
    }, 10000)

    return () => clearInterval(autoRefreshInterval)
  }, [])

  // Core frame-by-frame counting animation logic
  useEffect(() => {
    setCount(0) 

    const duration = 1500 
    const frameRate = 1000 / 60 
    const totalFrames = Math.round(duration / frameRate)
    let frame = 0

    const counterInterval = setInterval(() => {
      frame++
      
      const progress = frame / totalFrames
      const easeOutProgress = progress * (2 - progress)
      
      const currentCount = Math.round(easeOutProgress * numericTarget)

      if (frame >= totalFrames) {
        setCount(numericTarget)
        clearInterval(counterInterval)
      } else {
        setCount(currentCount)
      }
    }, frameRate)

    return () => clearInterval(counterInterval)
  }, [numericTarget, trigger])

  // Purely handles the string decoration mapping safely
  const formatDisplay = (num: number): string => {
    const formattedNum = num.toLocaleString()

    if (targetValue.includes('$') && targetValue.includes('+')) {
      return `$${formattedNum} +`
    } else if (targetValue.includes('+')) {
      return `${formattedNum} +`
    }
    return formattedNum
  }

  return <>{formatDisplay(count)}</>
}

interface StatItem {
  value: string;
  label: string;
}

const States = () => {
  const statsData: StatItem[] = [
    { value: '76 +', label: 'Turnover (in Million USD)' },
    { value: '220 +', label: 'Experts' },
    { value: '25 +', label: 'Years of Service' },
    { value: '2,500 +', label: 'Customers Served' }
  ]

  return (
    <div className="w-full bg-[#0a0f18] py-12 px-4 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-6 py-6 rounded-2xl 
                       bg-gradient-to-r from-[#161b26]/60 to-[#0f141d]/60 
                       border border-gray-800/60 backdrop-blur-md
                       shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]
                       transition-all duration-700 ease-out hover:border-gray-700/80
                       min-h-[96px]"
          >
            <span className="text-3xl xl:text-4xl font-serif text-white tracking-wide whitespace-nowrap">
              <AnimatedCounter targetValue={stat.value} />
            </span>
            
            <span className="text-white text-xs xl:text-sm text-right font-medium max-w-[110px] leading-snug">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default States