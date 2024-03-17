'use client'

import { useEffect, useState } from "react"

/**
 * 
 * @param threshold default: 10
 * wil return a boolean if user scrolled the page more then 10px.
 * @returns boolean
 */

export const useScrollTrigger = (threshold=10) => {
  const [scrolled, setScrolled] = useState<boolean>(false)
  useEffect(() => {
    const handleScroll = () => {
        if(window.scrollY > threshold) {
            setScrolled(true)
        }else {
            setScrolled(false)
        }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return { scrolled }
}