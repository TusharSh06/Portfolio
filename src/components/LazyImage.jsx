import React, { useState } from 'react'

export const SkeletonLoader = ({ className }) => (
  <div className={`animate-pulse bg-gray-700/50 ${className}`} />
)

const LazyImage = ({ src, alt, className, containerClassName, onError }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${containerClassName || ''}`}>
      {!isLoaded && <SkeletonLoader className={`absolute inset-0 ${className}`} />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={onError}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
      />
    </div>
  )
}

export default LazyImage
