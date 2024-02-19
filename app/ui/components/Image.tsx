import {default as NextImage} from "next/image";

type ImageType = {
  width: number,
  height: number,
  alt: string,
  src: string,
  fit?: string,
  position?: string,
  className?: string
}

export default function Image({
  width,
  height,
  alt,
  src,
  // fit,
  // position,
  className
}: ImageType) {
  return (
    <NextImage
    width={width}
    height={height}
    alt={alt}
    src={src}
    // objectFit={fit || "cover"}
    // objectPosition={position || "center"}
    loading="lazy"
    className={className}
    />
  )
}