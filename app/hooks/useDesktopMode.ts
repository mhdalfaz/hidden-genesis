'use client'

import { useEffect, useState } from 'react'

export function useDesktopMode() {
  const [state, setState] = useState({ isDesktopMode: false, vh: 0 })

  useEffect(() => {
    const check = () => {
      const vh = window.innerHeight
      const viewportWiderThanScreen = window.innerWidth > window.screen.width
      const wide = window.innerWidth >= 768
      setState({ isDesktopMode: viewportWiderThanScreen && wide, vh })
    }

    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return state
}
