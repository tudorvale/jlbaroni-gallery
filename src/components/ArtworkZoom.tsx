"use client";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ProtectedImage from "./ProtectedImage";

interface ArtworkZoomProps {
  src: string;
  alt: string;
}

export default function ArtworkZoom({ src, alt }: ArtworkZoomProps) {
  return (
    <Zoom>
      <div className="relative aspect-[3/4] w-full bg-gray-100">
        <ProtectedImage
          src={src}
          alt={alt}
          fill
          className="object-contain"
          priority
        />
      </div>
    </Zoom>
  );
}
