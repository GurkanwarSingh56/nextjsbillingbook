'use client'

import Image from 'next/image'
import { useState } from 'react'

interface CustomerImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function CustomerImage({ src, alt, width, height, className }: CustomerImageProps) {
  const [imgSrc, setImgSrc] = useState(src || '/customers/placeholder.svg')

  const handleError = () => {
    setImgSrc('/customers/placeholder.svg')
  }

  return (
    <Image
      src={imgSrc}
      className={className}
      alt={alt}
      width={width}
      height={height}
      onError={handleError}
    />
  )
}
