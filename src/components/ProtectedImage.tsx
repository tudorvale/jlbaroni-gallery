"use client";

import Image, { ImageProps } from "next/image";

interface ProtectedImageProps extends ImageProps {
  disableRightClick?: boolean;
}

export default function ProtectedImage({
  disableRightClick = true,
  className = "",
  ...props
}: ProtectedImageProps) {
  return (
    <Image
      {...props}
      className={`${className} ${disableRightClick ? 'no-select' : ''}`}
      onContextMenu={disableRightClick ? (e) => e.preventDefault() : undefined}
    />
  );
}
