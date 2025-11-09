import Image from "next/image";
import { Caption } from "lucide-react";

interface MediaBlockProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export function MediaBlock({ src, alt, caption, width, height }: MediaBlockProps) {
  return (
    <figure className="my-8">
      <div className="relative w-full rounded-lg overflow-hidden bg-black/5 border border-black/10">
        {width && height ? (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-auto object-contain"
          />
        ) : (
          <div className="relative w-full aspect-video">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-black/60 flex items-start gap-2">
          <Caption className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}

