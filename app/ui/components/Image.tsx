import {default as NextImage, StaticImageData} from "next/image";

type ImageType = {
  width: number,
  height: number,
  alt: string,
  src: string | StaticImageData,
  fit?: string,
  position?: string,
  className?: string,
  key?: any
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