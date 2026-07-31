"use client"

import React, { useState, useEffect } from 'react'

interface AnimatedCounterProps {
  targetValue: string
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ targetValue }) => {
  // Extract numbers securely, ignoring commas, plus signs, or currency markers
  const numericTarget = parseInt(targetValue.replace(/[^0-9]/g, ''), 10) || 0
  const [count, setCount] = useState<number>(0)
  const [trigger, setTrigger] = useState<number>(0)

  // 1. Loop that runs every 10 seconds to auto-rerun the animation
  useEffect(() => {
    const autoRefreshInterval = setInterval(() => {
      setTrigger(prev => prev + 1)
    }, 10000)

    return () => clearInterval(autoRefreshInterval)
  }, [])

  // 2. Core frame-by-frame counting animation logic
  useEffect(() => {
    let frame = 0
    const duration = 1500 // 1.5 seconds
    const frameRate = 1000 / 60 
    const totalFrames = Math.round(duration / frameRate)

    const counterInterval = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const easeOutProgress = progress * (2 - progress) // easeOutQuad
      
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

  // Clear format parsing wrapper
  const formatDisplay = (num: number) => {
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

const States = () => {
  const statsData = [
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