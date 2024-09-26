import { useEffect, useState } from 'react'

export const useAnimation = (ms: number): string => {
   const [translateY, setTranslateY] = useState<string>('translateY(-100%)')

   useEffect(() => {
      setTimeout(() => {
         setTranslateY('translateY(0%)')
      }, ms)
   }, [ms])

   return translateY
}
