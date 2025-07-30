'use client';

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import clsx from "clsx";

export function LazyImage({
  className,
  src,
  alt,
  width = 0,
  height = 0,
  ...props
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={clsx(
        "object-cover",
        isLoading ? "blur-sm" : "blur-0 transition-all duration-500",
        className
      )}
      onLoad={handleLoad}
      {...props}
    />
  );
}
